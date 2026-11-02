import type {
  AnswerRecord,
  AnswerResult,
  Question,
  Session,
  SessionInput,
  SessionWithQuestions,
  StudyStats,
  Topic,
  TopicDetail,
  TopicProgress,
} from "@workspace/api-client-react";
import { BUNDLED_QUESTIONS } from "./offline-data";
import { BUNDLED_TOPICS } from "./offline-topics";

type StoredState = {
  sessions: StoredSession[];
  nextSessionId: number;
  outbox: OutboxOperation[];
};

type StoredSession = SessionWithQuestions & {
  clientSessionId: string;
  remoteSessionId?: number;
};

type OutboxOperation = {
  id: string;
  type: "create" | "answer" | "complete" | "delete";
  clientSessionId: string;
  remoteSessionId?: number;
  payload: Record<string, unknown>;
  createdAt: string;
  attempts: number;
  nextAttemptAt: number;
};

export type SyncTransport = (url: string, init: RequestInit) => Promise<Response>;
export type RetryScheduler = {
  setTimeout(callback: () => void, delayMs: number): unknown;
  clearTimeout(handle: unknown): void;
};

const DB_NAME = "rt-study-offline";
const DB_VERSION = 2;
const STORE_NAME = "state";
const STATE_KEY = "current";
const LOCAL_KEY = "rt-study-offline-state-v2";
const LEGACY_LOCAL_KEY = "rt-study-offline-state-v1";

// The checked-in topic snapshot is exported from the current database source
// so descriptions, key points, and study notes remain complete offline.
const TOPIC_INFO = BUNDLED_TOPICS;

const TOPICS: Topic[] = TOPIC_INFO.map((topic) => ({
  id: topic.id,
  title: topic.title,
  description: topic.description,
  sortOrder: topic.sortOrder,
  questionCount: BUNDLED_QUESTIONS.filter((question) => question.topicId === topic.id).length,
  keyPoints: topic.keyPoints,
}));

const QUESTIONS: Question[] = BUNDLED_QUESTIONS.map((question, index) => ({
  ...question,
  id: index + 1,
}));

const memoryStores = new Map<string, string>();

function readMemory(key: string): string | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage.getItem(key) : memoryStores.get(key) ?? null;
  } catch {
    return memoryStores.get(key) ?? null;
  }
}

function writeMemory(key: string, value: string): void {
  try {
    if (typeof localStorage !== "undefined") localStorage.setItem(key, value);
    else memoryStores.set(key, value);
  } catch {
    memoryStores.set(key, value);
  }
}

function newUuid(prefix: string): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function normalizeState(value: Partial<StoredState> | null | undefined): StoredState {
  const sessions = (value?.sessions ?? []).map((session) => {
    const stored = session as StoredSession;
    return {
      ...stored,
      clientSessionId: stored.clientSessionId ?? `legacy-session-${stored.id}`,
    };
  });
  return {
    sessions,
    nextSessionId: value?.nextSessionId ?? Math.max(0, ...sessions.map((session) => session.id)) + 1,
    outbox: value?.outbox ?? [],
  };
}

function openDatabase(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

async function readPersistedState(): Promise<StoredState> {
  const db = await openDatabase();
  if (db) {
    const value = await new Promise<StoredState | undefined>((resolve) => {
      const request = db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(STATE_KEY);
      request.onsuccess = () => resolve(request.result as StoredState | undefined);
      request.onerror = () => resolve(undefined);
    });
    db.close();
    if (value) return normalizeState(value);
  }
  try {
    const parsed = JSON.parse(readMemory(LOCAL_KEY) ?? readMemory(LEGACY_LOCAL_KEY) ?? "null") as StoredState | null;
    if (parsed?.sessions) return normalizeState(parsed);
  } catch {
    // A corrupt local state is safely replaced by a fresh state.
  }
  return { sessions: [], nextSessionId: 1, outbox: [] };
}

async function persistState(state: StoredState): Promise<void> {
  writeMemory(LOCAL_KEY, JSON.stringify(state));
  const db = await openDatabase();
  if (!db) return;
  await new Promise<void>((resolve) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(state, STATE_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => resolve();
  });
  db.close();
}

let statePromise: Promise<StoredState> | undefined;
function state(): Promise<StoredState> {
  statePromise ??= readPersistedState();
  return statePromise;
}

let syncBaseUrl: string | undefined;
let syncTransport: SyncTransport | undefined;
let syncInProgress = false;
let onlineListenerInstalled = false;
const defaultRetryScheduler: RetryScheduler = {
  setTimeout: (callback, delayMs) => globalThis.setTimeout(callback, delayMs),
  clearTimeout: (handle) => globalThis.clearTimeout(handle as ReturnType<typeof setTimeout>),
};
let retryScheduler: RetryScheduler = defaultRetryScheduler;
let retryTimer: unknown;
let retryTimerGeneration = 0;

function syncIsAvailable(): boolean {
  return Boolean(
    syncBaseUrl &&
      syncTransport &&
      (typeof navigator === "undefined" || navigator.onLine !== false),
  );
}

function cancelRetryTimer(): void {
  retryTimerGeneration += 1;
  if (retryTimer !== undefined) {
    retryScheduler.clearTimeout(retryTimer);
    retryTimer = undefined;
  }
}

function scheduleNextRetry(): void {
  cancelRetryTimer();
  if (!syncIsAvailable()) return;
  const generation = retryTimerGeneration;
  void state().then((current) => {
    if (generation !== retryTimerGeneration || !syncIsAvailable()) return;
    const scheduled = current.outbox
      .map((operation) => operation.nextAttemptAt)
      .filter((attemptAt) => attemptAt > 0);
    const nextAttemptAt = scheduled.length > 0 ? Math.min(...scheduled) : undefined;
    if (nextAttemptAt == null) return;
    const delay = Math.max(0, nextAttemptAt - Date.now());
    retryTimer = retryScheduler.setTimeout(() => {
      retryTimer = undefined;
      void processOutbox(true);
    }, delay);
  });
}

function outboxHeaders(operation: OutboxOperation): Headers {
  return new Headers({
    "Content-Type": "application/json",
    "Idempotency-Key": operation.id,
    "X-Client-Operation-Id": operation.id,
    "X-Client-Session-Id": operation.clientSessionId,
  });
}

function outboxRequest(operation: OutboxOperation): { path: string; init: RequestInit } | null {
  if (operation.type === "create") {
    return {
      path: "/api/sessions",
      init: {
        method: "POST",
        headers: outboxHeaders(operation),
        body: JSON.stringify({
          ...operation.payload,
          clientSessionId: operation.clientSessionId,
        }),
      },
    };
  }
  // Never put a local numeric ID in a remote URL. Until create maps the
  // server's ID, dependent operations remain at the head of the outbox.
  if (operation.remoteSessionId == null) return null;
  if (operation.type === "answer") {
    return {
      path: `/api/sessions/${operation.remoteSessionId}/answers`,
      init: { method: "POST", headers: outboxHeaders(operation), body: JSON.stringify(operation.payload) },
    };
  }
  if (operation.type === "complete") {
    return {
      path: `/api/sessions/${operation.remoteSessionId}/complete`,
      init: { method: "PATCH", headers: outboxHeaders(operation), body: JSON.stringify({}) },
    };
  }
  return {
    path: `/api/sessions/${operation.remoteSessionId}`,
    init: { method: "DELETE", headers: outboxHeaders(operation) },
  };
}

async function enqueueOperation(operation: Omit<OutboxOperation, "id" | "createdAt" | "attempts" | "nextAttemptAt">): Promise<void> {
  const current = await state();
  current.outbox.push({
    ...operation,
    id: newUuid("operation"),
    createdAt: new Date().toISOString(),
    attempts: 0,
    nextAttemptAt: 0,
  });
  await persistState(current);
  cancelRetryTimer();
  void processOutbox();
}

export async function processOutbox(force = false): Promise<void> {
  if (force) cancelRetryTimer();
  if (syncInProgress || !syncIsAvailable()) return;
  syncInProgress = true;
  try {
    while (syncIsAvailable()) {
      const current = await state();
      const operation = current.outbox[0];
      if (!operation || (!force && operation.nextAttemptAt > Date.now())) return;
      const request = outboxRequest(operation);
      if (!request) return;

      try {
        const response = await syncTransport!(
          `${syncBaseUrl!.replace(/\/+$/, "")}${request.path}`,
          request.init,
        );
        if (!response.ok) throw new Error(`Sync request failed with HTTP ${response.status}`);
        if (operation.type === "create") {
          const remote = (await response.json()) as { id?: unknown; remoteSessionId?: unknown };
          const remoteId = Number(remote.remoteSessionId ?? remote.id);
          if (!Number.isSafeInteger(remoteId) || remoteId <= 0) {
            throw new Error("Sync create response did not return a remote session ID");
          }
          const session = current.sessions.find(
            (item) => item.clientSessionId === operation.clientSessionId,
          );
          if (session) session.remoteSessionId = remoteId;
          for (const pending of current.outbox) {
            if (pending.clientSessionId === operation.clientSessionId) pending.remoteSessionId = remoteId;
          }
        }
        current.outbox.shift();
        await persistState(current);
      } catch {
        operation.attempts += 1;
        operation.nextAttemptAt = Date.now() + Math.min(60_000, 1000 * 2 ** Math.min(operation.attempts - 1, 6));
        await persistState(current);
        return;
      }
    }
  } finally {
    syncInProgress = false;
    scheduleNextRetry();
  }
}

export function configureOfflineSync(
  baseUrl: string | undefined,
  transport: SyncTransport = fetch,
  scheduler: RetryScheduler = defaultRetryScheduler,
): void {
  cancelRetryTimer();
  syncBaseUrl = baseUrl && /^https:\/\//i.test(baseUrl) ? baseUrl : undefined;
  syncTransport = syncBaseUrl ? transport : undefined;
  retryScheduler = scheduler;
  if (typeof window !== "undefined" && !onlineListenerInstalled) {
    window.addEventListener("online", () => {
      cancelRetryTimer();
      void processOutbox(true);
    });
    window.addEventListener("offline", cancelRetryTimer);
    onlineListenerInstalled = true;
  }
  void processOutbox();
}

export async function getOutbox(): Promise<readonly OutboxOperation[]> {
  return (await state()).outbox;
}

export function resetOfflineRepository(): void {
  cancelRetryTimer();
  statePromise = Promise.resolve({ sessions: [], nextSessionId: 1, outbox: [] });
  writeMemory(LOCAL_KEY, JSON.stringify({ sessions: [], nextSessionId: 1, outbox: [] }));
}

/** Re-read durable state; useful when a second browser/native context opens. */
export async function reloadOfflineRepository(): Promise<void> {
  statePromise = undefined;
  await state();
}

export class OfflineRepository {
  async listTopics(): Promise<Topic[]> {
    return TOPICS;
  }

  async getTopic(id: number): Promise<TopicDetail | null> {
    const topic = TOPIC_INFO.find((item) => item.id === id);
    const summary = TOPICS.find((item) => item.id === id);
    if (!topic || !summary) return null;
    return { ...summary, studyContent: topic.studyContent };
  }

  async listQuestions(params: { topicId?: number; difficulty?: string } = {}): Promise<Question[]> {
    return QUESTIONS.filter((question) =>
      (params.topicId == null || question.topicId === params.topicId) &&
      (params.difficulty == null || question.difficulty === params.difficulty)
    );
  }

  async listSessions(): Promise<Session[]> {
    const current = await state();
    return current.sessions.map(({ questions: _questions, answers: _answers, ...session }) => session);
  }

  async getSession(id: number): Promise<SessionWithQuestions | null> {
    const current = await state();
    return current.sessions.find((session) => session.id === id) ?? null;
  }

  async createSession(input: SessionInput): Promise<SessionWithQuestions> {
    const current = await state();
    const pool = input.mode === "topic" && input.topicId != null
      ? QUESTIONS.filter((question) => question.topicId === input.topicId)
      : QUESTIONS;
    const requested = input.questionCount ?? (input.mode === "exam" ? 60 : pool.length);
    const selected = [...pool];
    for (let index = selected.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [selected[index], selected[swap]] = [selected[swap], selected[index]];
    }
    const questions = selected.slice(0, Math.max(0, requested));
    const topic = TOPICS.find((item) => item.id === input.topicId);
    const session: StoredSession = {
      id: current.nextSessionId,
      clientSessionId: newUuid("session"),
      mode: input.mode,
      topicId: input.topicId ?? null,
      topicTitle: topic?.title ?? null,
      status: "in_progress",
      score: null,
      totalQuestions: questions.length,
      createdAt: new Date().toISOString(),
      completedAt: null,
      questions,
      answers: [],
    };
    current.nextSessionId += 1;
    current.sessions.push(session);
    await persistState(current);
    await enqueueOperation({
      type: "create",
      clientSessionId: session.clientSessionId,
      payload: { mode: session.mode, topicId: session.topicId, questionCount: session.totalQuestions },
    });
    return session;
  }

  async submitAnswer(id: number, questionId: number, selectedIndex: number): Promise<AnswerResult | null> {
    const current = await state();
    const session = current.sessions.find((item) => item.id === id);
    const question = QUESTIONS.find((item) => item.id === questionId);
    if (!session || !question || !session.questions.some((item) => item.id === questionId)) return null;
    const isCorrect = selectedIndex === question.correctIndex;
    if (!session.answers.some((answer) => answer.questionId === questionId)) {
      session.answers.push({ questionId, selectedIndex, isCorrect });
      await persistState(current);
      await enqueueOperation({
        type: "answer",
        clientSessionId: session.clientSessionId,
        remoteSessionId: session.remoteSessionId,
        payload: { clientSessionId: session.clientSessionId, questionId, selectedIndex },
      });
    }
    return { isCorrect, correctIndex: question.correctIndex, explanation: question.explanation };
  }

  async completeSession(id: number): Promise<Session | null> {
    const current = await state();
    const session = current.sessions.find((item) => item.id === id);
    if (!session) return null;
    const correct = session.answers.filter((answer) => answer.isCorrect).length;
    session.status = "completed";
    session.score = session.totalQuestions > 0 ? Math.round((correct / session.totalQuestions) * 100) : 0;
    session.completedAt = new Date().toISOString();
    await persistState(current);
    await enqueueOperation({
      type: "complete",
      clientSessionId: session.clientSessionId,
      remoteSessionId: session.remoteSessionId,
      payload: { clientSessionId: session.clientSessionId },
    });
    const { questions: _questions, answers: _answers, ...summary } = session;
    return summary;
  }

  async deleteSession(id: number): Promise<boolean> {
    const current = await state();
    const session = current.sessions.find((item) => item.id === id);
    const before = current.sessions.length;
    current.sessions = current.sessions.filter((session) => session.id !== id);
    if (current.sessions.length === before) return false;
    await persistState(current);
    if (session) {
      await enqueueOperation({
        type: "delete",
        clientSessionId: session.clientSessionId,
        remoteSessionId: session.remoteSessionId,
        payload: { clientSessionId: session.clientSessionId },
      });
    }
    return true;
  }

  async getProgress(): Promise<TopicProgress[]> {
    const current = await state();
    const firstAnswers = new Map<number, AnswerRecord>();
    for (const session of current.sessions) {
      for (const answer of session.answers) if (!firstAnswers.has(answer.questionId)) firstAnswers.set(answer.questionId, answer);
    }
    return TOPICS.map((topic) => {
      const ids = new Set(QUESTIONS.filter((question) => question.topicId === topic.id).map((question) => question.id));
      const answers = [...firstAnswers.entries()].filter(([questionId]) => ids.has(questionId)).map(([, answer]) => answer);
      const sessions = current.sessions.filter((session) => session.topicId === topic.id && session.status === "completed");
      return {
        topicId: topic.id,
        topicTitle: topic.title,
        totalQuestions: topic.questionCount,
        attempted: answers.length,
        correct: answers.filter((answer) => answer.isCorrect).length,
        bestScore: sessions.length ? Math.max(...sessions.map((session) => session.score ?? 0)) : null,
      };
    });
  }

  async getStats(): Promise<StudyStats> {
    const current = await state();
    const completed = current.sessions.filter((session) => session.status === "completed");
    const scores = completed.map((session) => session.score ?? 0);
    return {
      totalSessions: current.sessions.length,
      completedSessions: completed.length,
      avgScore: scores.length ? scores.reduce((total, score) => total + score, 0) / scores.length : null,
      bestScore: scores.length ? Math.max(...scores) : null,
      topicsMastered: TOPICS.filter((topic) => completed.some((session) => session.topicId === topic.id && (session.score ?? 0) >= 80)).length,
      totalQuestionsAttempted: current.sessions.reduce((total, session) => total + session.answers.length, 0),
    };
  }
}

export const offlineRepository = new OfflineRepository();

function inputUrl(input: RequestInfo | URL): URL {
  if (typeof input === "string") return new URL(input, "http://offline.local");
  if (input instanceof URL) return input;
  return new URL(input.url);
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function requestBody(init: RequestInit): Record<string, unknown> {
  if (typeof init.body !== "string") return {};
  try {
    return JSON.parse(init.body) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export async function offlineFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const url = inputUrl(input);
  const path = `${url.pathname}${url.search}`;
  const method = (init.method ?? (input instanceof Request ? input.method : "GET")).toUpperCase();
  const body = requestBody(init);
  let response: Response;

  if (method === "GET" && path === "/api/healthz") response = jsonResponse({ status: "ok" });
  else if (method === "GET" && path === "/api/topics") response = jsonResponse(await offlineRepository.listTopics());
  else if (method === "GET" && /^\/api\/topics\/\d+$/.test(url.pathname)) {
    const topic = await offlineRepository.getTopic(Number(url.pathname.split("/").pop()));
    response = topic ? jsonResponse(topic) : jsonResponse({ error: "Topic not found" }, 404);
  } else if (method === "GET" && /^\/api\/topics\/\d+\/questions$/.test(url.pathname)) {
    const topicId = Number(url.pathname.split("/")[3]);
    const questions = await offlineRepository.listQuestions({ topicId });
    response = jsonResponse(questions);
  } else if (method === "GET" && url.pathname === "/api/questions") {
    const topicId = url.searchParams.get("topicId");
    response = jsonResponse(await offlineRepository.listQuestions({
      topicId: topicId == null ? undefined : Number(topicId),
      difficulty: url.searchParams.get("difficulty") ?? undefined,
    }));
  } else if (method === "GET" && path === "/api/sessions") response = jsonResponse(await offlineRepository.listSessions());
  else if (method === "POST" && path === "/api/sessions") {
    response = jsonResponse(await offlineRepository.createSession(body as unknown as SessionInput), 201);
  } else if (method === "GET" && /^\/api\/sessions\/\d+$/.test(url.pathname)) {
    const session = await offlineRepository.getSession(Number(url.pathname.split("/").pop()));
    response = session ? jsonResponse(session) : jsonResponse({ error: "Session not found" }, 404);
  } else if (method === "POST" && /^\/api\/sessions\/\d+\/answers$/.test(url.pathname)) {
    const id = Number(url.pathname.split("/")[3]);
    const result = await offlineRepository.submitAnswer(id, Number(body.questionId), Number(body.selectedIndex));
    response = result ? jsonResponse(result) : jsonResponse({ error: "Session or question not found" }, 404);
  } else if (method === "PATCH" && /^\/api\/sessions\/\d+\/complete$/.test(url.pathname)) {
    const session = await offlineRepository.completeSession(Number(url.pathname.split("/")[3]));
    response = session ? jsonResponse(session) : jsonResponse({ error: "Session not found" }, 404);
  } else if (method === "DELETE" && /^\/api\/sessions\/\d+$/.test(url.pathname)) {
    response = (await offlineRepository.deleteSession(Number(url.pathname.split("/").pop())))
      ? new Response(null, { status: 204 })
      : jsonResponse({ error: "Session not found" }, 404);
  } else if (method === "GET" && path === "/api/progress") response = jsonResponse(await offlineRepository.getProgress());
  else if (method === "GET" && path === "/api/stats") response = jsonResponse(await offlineRepository.getStats());
  else response = jsonResponse({ error: "Offline endpoint not found" }, 404);

  return response;
}
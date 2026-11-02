import assert from "node:assert/strict";
import {
  configureOfflineSync,
  getOutbox,
  offlineFetch,
  offlineRepository,
  processOutbox,
  reloadOfflineRepository,
  resetOfflineRepository,
} from "./offline-repository";
import { findFirstUnansweredIndex } from "./session-navigation";

resetOfflineRepository();
const drainOutbox = async () => {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 2));
    await processOutbox(true);
    if ((await getOutbox()).length === 0) return;
  }
};
const topics = await offlineRepository.listTopics();
const questions = await offlineRepository.listQuestions();
assert.equal(topics.length, 10);
assert.equal(questions.length, 685);
assert.equal((await offlineRepository.listQuestions({ topicId: 4 })).every((q) => q.topicId === 4), true);

const session = await offlineRepository.createSession({ mode: "topic", topicId: 4, questionCount: 2 });
assert.equal(session.status, "in_progress");
assert.equal(session.questions.length, 2);
const answer = session.questions[0];
const result = await offlineRepository.submitAnswer(session.id, answer.id, answer.correctIndex);
assert.equal(result?.isCorrect, true);
assert.equal((await offlineRepository.getSession(session.id))?.answers.length, 1);

const completed = await offlineRepository.completeSession(session.id);
assert.equal(completed?.status, "completed");
assert.equal(completed?.score, 50);
assert.equal((await offlineRepository.getStats()).completedSessions, 1);
assert.equal((await offlineRepository.getProgress()).find((p) => p.topicId === 4)?.attempted, 1);

const response = await offlineFetch("/api/questions?topicId=4", { method: "GET" });
assert.equal(response.status, 200);
assert.equal((await response.json()).length, topics.find((t) => t.id === 4)?.questionCount);
assert.equal((await offlineRepository.getSession(session.id))?.status, "completed");
await reloadOfflineRepository();
assert.equal((await offlineRepository.getSession(session.id))?.status, "completed");
assert.equal(
  findFirstUnansweredIndex([{ id: 10 }, { id: 11 }, { id: 12 }], [{ questionId: 10 }]),
  1,
);

// Sync is ordered and uses only the remote ID returned by create.
resetOfflineRepository();
configureOfflineSync(undefined);
const synced = await offlineRepository.createSession({ mode: "practice", questionCount: 1 });
await offlineRepository.submitAnswer(synced.id, synced.questions[0].id, 0);
await offlineRepository.completeSession(synced.id);
const calls: Array<{ url: string; init: RequestInit }> = [];
configureOfflineSync("https://sync.example.test", async (url, init) => {
  calls.push({ url, init });
  if (calls.length === 1) return new Response(JSON.stringify({ id: 9001 }), { status: 201 });
  return new Response("{}", { status: 200, headers: { "content-type": "application/json" } });
});
await drainOutbox();
assert.deepEqual(calls.map((call) => new URL(call.url).pathname), [
  "/api/sessions",
  "/api/sessions/9001/answers",
  "/api/sessions/9001/complete",
]);
assert.equal(new URL(calls[1].url).pathname.includes(`/${synced.id}/`), false);
assert.ok(new Headers(calls[0].init.headers).get("Idempotency-Key"));
assert.equal((await getOutbox()).length, 0);

// A failed request survives and can be retried after connectivity returns.
const retried = await offlineRepository.createSession({ mode: "practice", questionCount: 1 });
configureOfflineSync("https://sync.example.test", async () => {
  throw new Error("offline");
});
await new Promise((resolve) => setTimeout(resolve, 5));
await processOutbox(true);
assert.equal((await getOutbox()).length, 1);
assert.ok((await getOutbox())[0].attempts >= 1);
configureOfflineSync("https://sync.example.test", async () =>
  new Response(JSON.stringify({ id: 9002 }), { status: 201 }),
);
await drainOutbox();
assert.equal((await getOutbox()).length, 0);
assert.equal((await offlineRepository.getSession(retried.id))?.id, retried.id);

// A transient failure schedules its own retry; no explicit drain, mutation,
// or online event is needed.
resetOfflineRepository();
let automaticAttempts = 0;
const fastScheduler = {
  setTimeout: (callback: () => void, delayMs: number) =>
    setTimeout(callback, Math.min(delayMs, 5)),
  clearTimeout: (handle: unknown) => clearTimeout(handle as ReturnType<typeof setTimeout>),
};
configureOfflineSync("https://sync.example.test", async () => {
  automaticAttempts += 1;
  if (automaticAttempts === 1) throw new Error("transient");
  return new Response(JSON.stringify({ id: 9100 }), { status: 201 });
}, fastScheduler);
await offlineRepository.createSession({ mode: "practice", questionCount: 1 });
const retryDeadline = Date.now() + 500;
while (Date.now() < retryDeadline && ((await getOutbox()).length > 0 || automaticAttempts < 2)) {
  await new Promise((resolve) => setTimeout(resolve, 5));
}
assert.equal(automaticAttempts, 2);
assert.equal((await getOutbox()).length, 0);
configureOfflineSync(undefined);

console.info("offline repository tests passed");
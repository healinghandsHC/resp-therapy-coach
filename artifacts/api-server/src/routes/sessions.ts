import { Router, type IRouter } from "express";
import { eq, and, inArray } from "drizzle-orm";
import { db, sessionsTable, questionsTable, topicsTable, sessionQuestionsTable, sessionAnswersTable } from "@workspace/db";
import {
  CreateSessionBody,
  GetSessionParams,
  SubmitAnswerParams,
  SubmitAnswerBody,
  CompleteSessionParams,
  ListSessionsResponse,
  GetSessionResponse,
  SubmitAnswerResponse,
  CompleteSessionResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

router.get("/sessions", async (_req, res): Promise<void> => {
  const sessions = await db
    .select()
    .from(sessionsTable)
    .orderBy(sessionsTable.createdAt);

  const result = await Promise.all(
    sessions.map(async (s) => {
      let topicTitle: string | null = null;
      if (s.topicId) {
        const [topic] = await db
          .select({ title: topicsTable.title })
          .from(topicsTable)
          .where(eq(topicsTable.id, s.topicId));
        topicTitle = topic?.title ?? null;
      }
      return {
        id: s.id,
        mode: s.mode,
        topicId: s.topicId ?? null,
        topicTitle,
        status: s.status,
        score: s.score ?? null,
        totalQuestions: s.totalQuestions,
        createdAt: s.createdAt.toISOString(),
        completedAt: s.completedAt ? s.completedAt.toISOString() : null,
      };
    })
  );

  res.json(ListSessionsResponse.parse(result));
});

router.post("/sessions", async (req, res): Promise<void> => {
  const parsed = CreateSessionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { mode, topicId, questionCount } = parsed.data;

  let allQuestions: { id: number; topicId: number; text: string; options: string; correctIndex: number; explanation: string; difficulty: string }[] = [];

  if (mode === "topic" && topicId != null) {
    allQuestions = await db
      .select()
      .from(questionsTable)
      .where(eq(questionsTable.topicId, topicId));
  } else {
    allQuestions = await db.select().from(questionsTable);
  }

  const count = questionCount ?? (mode === "exam" ? 60 : allQuestions.length);
  const selected = shuffle(allQuestions).slice(0, count);

  let topicTitle: string | null = null;
  if (topicId != null) {
    const [topic] = await db
      .select({ title: topicsTable.title })
      .from(topicsTable)
      .where(eq(topicsTable.id, topicId));
    topicTitle = topic?.title ?? null;
  }

  const [session] = await db
    .insert(sessionsTable)
    .values({
      mode,
      topicId: topicId ?? null,
      status: "in_progress",
      totalQuestions: selected.length,
    })
    .returning();

  await db.insert(sessionQuestionsTable).values(
    selected.map((q, i) => ({
      sessionId: session.id,
      questionId: q.id,
      sortOrder: i,
    }))
  );

  const questions = selected.map((q) => ({
    id: q.id,
    topicId: q.topicId,
    text: q.text,
    options: JSON.parse(q.options) as string[],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    difficulty: q.difficulty,
  }));

  const result = {
    id: session.id,
    mode: session.mode,
    topicId: session.topicId ?? null,
    topicTitle,
    status: session.status,
    score: session.score ?? null,
    totalQuestions: session.totalQuestions,
    createdAt: session.createdAt.toISOString(),
    completedAt: null,
    questions,
    answers: [],
  };

  res.status(201).json(GetSessionResponse.parse(result));
});

router.get("/sessions/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetSessionParams.safeParse({ id: parseInt(rawId, 10) });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [session] = await db
    .select()
    .from(sessionsTable)
    .where(eq(sessionsTable.id, params.data.id));

  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }

  let topicTitle: string | null = null;
  if (session.topicId) {
    const [topic] = await db
      .select({ title: topicsTable.title })
      .from(topicsTable)
      .where(eq(topicsTable.id, session.topicId));
    topicTitle = topic?.title ?? null;
  }

  const sessionQs = await db
    .select()
    .from(sessionQuestionsTable)
    .where(eq(sessionQuestionsTable.sessionId, session.id))
    .orderBy(sessionQuestionsTable.sortOrder);

  const questionIds = sessionQs.map((sq) => sq.questionId);
  let questions: typeof questionsTable.$inferSelect[] = [];
  if (questionIds.length > 0) {
    questions = await db
      .select()
      .from(questionsTable)
      .where(inArray(questionsTable.id, questionIds));
  }

  const questionsOrdered = sessionQs
    .map((sq) => questions.find((q) => q.id === sq.questionId))
    .filter(Boolean) as typeof questionsTable.$inferSelect[];

  const answers = await db
    .select()
    .from(sessionAnswersTable)
    .where(eq(sessionAnswersTable.sessionId, session.id));

  const result = {
    id: session.id,
    mode: session.mode,
    topicId: session.topicId ?? null,
    topicTitle,
    status: session.status,
    score: session.score ?? null,
    totalQuestions: session.totalQuestions,
    createdAt: session.createdAt.toISOString(),
    completedAt: session.completedAt ? session.completedAt.toISOString() : null,
    questions: questionsOrdered.map((q) => ({
      id: q.id,
      topicId: q.topicId,
      text: q.text,
      options: JSON.parse(q.options) as string[],
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      difficulty: q.difficulty,
    })),
    answers: answers.map((a) => ({
      questionId: a.questionId,
      selectedIndex: a.selectedIndex,
      isCorrect: a.isCorrect === 1,
    })),
  };

  res.json(GetSessionResponse.parse(result));
});

router.post("/sessions/:id/answers", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = SubmitAnswerParams.safeParse({ id: parseInt(rawId, 10) });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = SubmitAnswerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [session] = await db
    .select()
    .from(sessionsTable)
    .where(eq(sessionsTable.id, params.data.id));

  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }

  const [question] = await db
    .select()
    .from(questionsTable)
    .where(eq(questionsTable.id, parsed.data.questionId));

  if (!question) {
    res.status(404).json({ error: "Question not found" });
    return;
  }

  const isCorrect = parsed.data.selectedIndex === question.correctIndex;

  const existing = await db
    .select()
    .from(sessionAnswersTable)
    .where(
      and(
        eq(sessionAnswersTable.sessionId, params.data.id),
        eq(sessionAnswersTable.questionId, parsed.data.questionId)
      )
    );

  if (existing.length === 0) {
    await db.insert(sessionAnswersTable).values({
      sessionId: params.data.id,
      questionId: parsed.data.questionId,
      selectedIndex: parsed.data.selectedIndex,
      isCorrect: isCorrect ? 1 : 0,
    });
  }

  const result = {
    isCorrect,
    correctIndex: question.correctIndex,
    explanation: question.explanation,
  };

  res.json(SubmitAnswerResponse.parse(result));
});

router.patch("/sessions/:id/complete", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = CompleteSessionParams.safeParse({ id: parseInt(rawId, 10) });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [session] = await db
    .select()
    .from(sessionsTable)
    .where(eq(sessionsTable.id, params.data.id));

  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }

  const answers = await db
    .select()
    .from(sessionAnswersTable)
    .where(eq(sessionAnswersTable.sessionId, session.id));

  const correctCount = answers.filter((a) => a.isCorrect === 1).length;
  const score = session.totalQuestions > 0
    ? Math.round((correctCount / session.totalQuestions) * 100)
    : 0;

  const [updated] = await db
    .update(sessionsTable)
    .set({
      status: "completed",
      score,
      completedAt: new Date(),
    })
    .where(eq(sessionsTable.id, session.id))
    .returning();

  let topicTitle: string | null = null;
  if (updated.topicId) {
    const [topic] = await db
      .select({ title: topicsTable.title })
      .from(topicsTable)
      .where(eq(topicsTable.id, updated.topicId));
    topicTitle = topic?.title ?? null;
  }

  const result = {
    id: updated.id,
    mode: updated.mode,
    topicId: updated.topicId ?? null,
    topicTitle,
    status: updated.status,
    score: updated.score ?? null,
    totalQuestions: updated.totalQuestions,
    createdAt: updated.createdAt.toISOString(),
    completedAt: updated.completedAt ? updated.completedAt.toISOString() : null,
  };

  res.json(CompleteSessionResponse.parse(result));
});

export default router;

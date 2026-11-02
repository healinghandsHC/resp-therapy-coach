import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, topicsTable, questionsTable, sessionsTable, sessionAnswersTable } from "@workspace/db";
import { GetProgressResponse, GetStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/progress", async (_req, res): Promise<void> => {
  const topics = await db
    .select()
    .from(topicsTable)
    .orderBy(topicsTable.sortOrder);

  const result = await Promise.all(
    topics.map(async (topic) => {
      const questions = await db
        .select({ id: questionsTable.id })
        .from(questionsTable)
        .where(eq(questionsTable.topicId, topic.id));

      const questionIds = questions.map((q) => q.id);

      const topicSessions = await db
        .select()
        .from(sessionsTable)
        .where(eq(sessionsTable.topicId, topic.id));

      const completedSessions = topicSessions.filter((s) => s.status === "completed");
      const bestScore = completedSessions.length > 0
        ? Math.max(...completedSessions.map((s) => s.score ?? 0))
        : null;

      let attempted = 0;
      let correct = 0;

      if (questionIds.length > 0) {
        const allAnswers = await db
          .select()
          .from(sessionAnswersTable);

        const topicAnswers = allAnswers.filter((a) => questionIds.includes(a.questionId));
        const uniqueByQuestion = new Map<number, typeof topicAnswers[0]>();
        for (const answer of topicAnswers) {
          if (!uniqueByQuestion.has(answer.questionId)) {
            uniqueByQuestion.set(answer.questionId, answer);
          }
        }
        attempted = uniqueByQuestion.size;
        correct = [...uniqueByQuestion.values()].filter((a) => a.isCorrect === 1).length;
      }

      return {
        topicId: topic.id,
        topicTitle: topic.title,
        totalQuestions: questionIds.length,
        attempted,
        correct,
        bestScore: bestScore ?? null,
      };
    })
  );

  res.json(GetProgressResponse.parse(result));
});

router.get("/stats", async (_req, res): Promise<void> => {
  const allSessions = await db.select().from(sessionsTable);
  const completedSessions = allSessions.filter((s) => s.status === "completed");

  const avgScore =
    completedSessions.length > 0
      ? completedSessions.reduce((sum, s) => sum + (s.score ?? 0), 0) / completedSessions.length
      : null;

  const bestScore =
    completedSessions.length > 0
      ? Math.max(...completedSessions.map((s) => s.score ?? 0))
      : null;

  const topics = await db.select().from(topicsTable);
  const topicsMastered = (
    await Promise.all(
      topics.map(async (topic) => {
        const topicSessions = completedSessions.filter((s) => s.topicId === topic.id);
        return topicSessions.some((s) => (s.score ?? 0) >= 80);
      })
    )
  ).filter(Boolean).length;

  const allAnswers = await db.select().from(sessionAnswersTable);

  const result = {
    totalSessions: allSessions.length,
    completedSessions: completedSessions.length,
    avgScore: avgScore ?? null,
    bestScore: bestScore ?? null,
    topicsMastered,
    totalQuestionsAttempted: allAnswers.length,
  };

  res.json(GetStatsResponse.parse(result));
});

export default router;

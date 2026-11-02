import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, topicsTable, questionsTable } from "@workspace/db";
import {
  GetTopicParams,
  GetTopicQuestionsParams,
  ListTopicsResponse,
  GetTopicResponse,
  GetTopicQuestionsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/topics", async (_req, res): Promise<void> => {
  const topics = await db
    .select()
    .from(topicsTable)
    .orderBy(topicsTable.sortOrder);

  const topicsWithCount = await Promise.all(
    topics.map(async (topic) => {
      const questions = await db
        .select({ id: questionsTable.id })
        .from(questionsTable)
        .where(eq(questionsTable.topicId, topic.id));

      return {
        id: topic.id,
        title: topic.title,
        description: topic.description,
        sortOrder: topic.sortOrder,
        questionCount: questions.length,
        keyPoints: JSON.parse(topic.keyPoints) as string[],
      };
    })
  );

  res.json(ListTopicsResponse.parse(topicsWithCount));
});

router.get("/topics/:id", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetTopicParams.safeParse({ id: parseInt(rawId, 10) });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [topic] = await db
    .select()
    .from(topicsTable)
    .where(eq(topicsTable.id, params.data.id));

  if (!topic) {
    res.status(404).json({ error: "Topic not found" });
    return;
  }

  const questions = await db
    .select({ id: questionsTable.id })
    .from(questionsTable)
    .where(eq(questionsTable.topicId, topic.id));

  const result = {
    id: topic.id,
    title: topic.title,
    description: topic.description,
    sortOrder: topic.sortOrder,
    questionCount: questions.length,
    keyPoints: JSON.parse(topic.keyPoints) as string[],
    studyContent: topic.studyContent,
  };

  res.json(GetTopicResponse.parse(result));
});

router.get("/topics/:id/questions", async (req, res): Promise<void> => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetTopicQuestionsParams.safeParse({ id: parseInt(rawId, 10) });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [topic] = await db
    .select({ id: topicsTable.id })
    .from(topicsTable)
    .where(eq(topicsTable.id, params.data.id));

  if (!topic) {
    res.status(404).json({ error: "Topic not found" });
    return;
  }

  const questions = await db
    .select()
    .from(questionsTable)
    .where(eq(questionsTable.topicId, params.data.id));

  const result = questions.map((q) => ({
    id: q.id,
    topicId: q.topicId,
    text: q.text,
    options: JSON.parse(q.options) as string[],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    difficulty: q.difficulty,
  }));

  res.json(GetTopicQuestionsResponse.parse(result));
});

export default router;

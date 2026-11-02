import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, questionsTable } from "@workspace/db";
import { ListQuestionsQueryParams, ListQuestionsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/questions", async (req, res): Promise<void> => {
  const queryParsed = ListQuestionsQueryParams.safeParse(req.query);
  if (!queryParsed.success) {
    res.status(400).json({ error: queryParsed.error.message });
    return;
  }

  const { topicId, difficulty } = queryParsed.data;

  let query = db.select().from(questionsTable).$dynamic();

  if (topicId != null) {
    query = query.where(eq(questionsTable.topicId, topicId));
  }

  if (difficulty != null) {
    query = query.where(eq(questionsTable.difficulty, difficulty));
  }

  const questions = await query;

  const result = questions.map((q) => ({
    id: q.id,
    topicId: q.topicId,
    text: q.text,
    options: JSON.parse(q.options) as string[],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    difficulty: q.difficulty,
  }));

  res.json(ListQuestionsResponse.parse(result));
});

export default router;

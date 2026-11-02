import type { AnswerRecord, Question } from "@workspace/api-client-react";

/** Returns the first unanswered position after a session has been loaded. */
export function findFirstUnansweredIndex(
  questions: Pick<Question, "id">[],
  answers: Pick<AnswerRecord, "questionId">[],
): number {
  const answeredIds = new Set(answers.map((answer) => answer.questionId));
  return questions.findIndex((question) => !answeredIds.has(question.id));
}
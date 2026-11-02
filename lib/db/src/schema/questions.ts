import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { topicsTable } from "./topics";

export const questionsTable = pgTable("questions", {
  id: serial("id").primaryKey(),
  topicId: integer("topic_id").notNull().references(() => topicsTable.id),
  text: text("text").notNull(),
  options: text("options").notNull(),
  correctIndex: integer("correct_index").notNull(),
  explanation: text("explanation").notNull(),
  difficulty: text("difficulty").notNull().default("medium"),
});

export const insertQuestionSchema = createInsertSchema(questionsTable).omit({ id: true });
export type InsertQuestion = z.infer<typeof insertQuestionSchema>;
export type Question = typeof questionsTable.$inferSelect;

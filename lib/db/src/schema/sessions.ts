import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { topicsTable } from "./topics";

export const sessionsTable = pgTable("sessions", {
  id: serial("id").primaryKey(),
  mode: text("mode").notNull(),
  topicId: integer("topic_id").references(() => topicsTable.id),
  status: text("status").notNull().default("in_progress"),
  score: integer("score"),
  totalQuestions: integer("total_questions").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  completedAt: timestamp("completed_at"),
});

export const insertSessionSchema = createInsertSchema(sessionsTable).omit({ id: true, createdAt: true });
export type InsertSession = z.infer<typeof insertSessionSchema>;
export type Session = typeof sessionsTable.$inferSelect;

export const sessionQuestionsTable = pgTable("session_questions", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull().references(() => sessionsTable.id),
  questionId: integer("question_id").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const sessionAnswersTable = pgTable("session_answers", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull().references(() => sessionsTable.id),
  questionId: integer("question_id").notNull(),
  selectedIndex: integer("selected_index").notNull(),
  isCorrect: integer("is_correct").notNull(),
});

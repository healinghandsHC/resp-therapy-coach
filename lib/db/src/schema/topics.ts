import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const topicsTable = pgTable("topics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  keyPoints: text("key_points").notNull().default("[]"),
  studyContent: text("study_content").notNull().default(""),
});

export const insertTopicSchema = createInsertSchema(topicsTable).omit({ id: true });
export type InsertTopic = z.infer<typeof insertTopicSchema>;
export type Topic = typeof topicsTable.$inferSelect;

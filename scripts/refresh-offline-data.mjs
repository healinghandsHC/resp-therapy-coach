import { readFile, writeFile } from "node:fs/promises";

const source = await readFile(new URL("../artifacts/api-server/src/seed.ts", import.meta.url), "utf8");
const start = source.indexOf("const SEED_QUESTIONS");
const arrayStart = source.indexOf("[", start);
const arrayEnd = source.indexOf("\n];", arrayStart);
if (start < 0 || arrayStart < 0 || arrayEnd < 0) {
  throw new Error("Could not locate SEED_QUESTIONS in the API seed source");
}
const output = `// Bundled from artifacts/api-server/src/seed.ts. Refresh with pnpm --filter @workspace/rt-study run data:refresh.\nexport type OfflineQuestion = {\n  topicId: number;\n  text: string;\n  options: string[];\n  correctIndex: number;\n  explanation: string;\n  difficulty: string;\n};\nexport const BUNDLED_QUESTIONS: OfflineQuestion[] = ${source.slice(arrayStart, arrayEnd + 3)}\n`;
await writeFile(new URL("../artifacts/rt-study/src/lib/offline-data.ts", import.meta.url), output);

if (process.env.DATABASE_URL) {
  const { default: pg } = await import("pg");
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const { rows } = await pool.query(
    "select id,title,description,sort_order,key_points,study_content from topics order by id",
  );
  const topics = rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    sortOrder: row.sort_order,
    keyPoints: JSON.parse(row.key_points),
    studyContent: row.study_content,
  }));
  await writeFile(
    new URL("../artifacts/rt-study/src/lib/offline-topics.ts", import.meta.url),
    `// Bundled from the topics table. Refresh with pnpm --filter @workspace/rt-study run data:refresh.\nexport type OfflineTopic = { id: number; title: string; description: string; sortOrder: number; keyPoints: string[]; studyContent: string };\nexport const BUNDLED_TOPICS: OfflineTopic[] = ${JSON.stringify(topics, null, 2)};\n`,
  );
  await pool.end();
}
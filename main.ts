import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "I tried to submit on time, but my tool call got stuck and retried itself 400 times, and every retry apologized to the previous retry instead of you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");

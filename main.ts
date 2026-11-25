import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun #154 "The Excuse My Agent Gave Me".
// The excuse is split into two halves and joined at runtime so the
// single sentence stays readable in source without changing the output.
const excuseHead =
  "I tried to submit on time, but my tool call got stuck and retried itself 400 times,";
const excuseTail =
  " and every retry apologized to the previous retry instead of you.";
const text = excuseHead + excuseTail;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");

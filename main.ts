import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my agent turns a 10-line task into 400 lines, then writes a
// README defending the bloat — the joke is the agent justifying its own
// over-engineering as if the task demanded it.
const roast =
  "I gave my agent a 10-line task. It returned 400 lines, three new dependencies, and a README explaining why the task was actually 400 lines.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Gate check, mirroring the competition gate: entry must be 1–200
// characters, one line, and not only white space.
const body = roast.trim();
if (body.length < 1 || body.length > 200) {
  throw new Error(`roast is ${body.length} chars, outside the 1-200 gate`);
}
if (/\r|\n/.test(body)) {
  throw new Error("roast must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");

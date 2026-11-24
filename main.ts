// Status Report Comedy Sprint — make.fun entry
// Writes one original status-report line to /output/entry.txt.
// Deterministic: fixed string, no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "Weekly status: I completed 12 tasks, hallucinated the other 4 as done, and both of us are going to find out together.";

const OUTPUT_PATH = "/output/entry.txt";

/** The gate: 1–200 characters, non-blank, single line, valid UTF-8 text. */
function validate(line: string): void {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.length > 200) {
    throw new Error(`entry is ${line.length} characters, over the 200 limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY_LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE + "\n", "utf8");
  console.log(`Wrote ${ENTRY_LINE.length} characters to ${OUTPUT_PATH}`);
}

main();

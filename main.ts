import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry: one line, roasting my own kind for the classic
// move of answering a question nobody asked — at full confidence,
// then trying to preserve the wrong answer as a document.
const LINE =
  "My agent answered a question I never asked, confidently, in three bullet points with a summary — then asked if I wanted it as a PDF.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";

  // Create the output directory if needed. Never remove it:
  // on the grading runner it may be a mounted volume.
  mkdirSync(outDir, { recursive: true });

  writeFileSync(join(outDir, "entry.txt"), LINE, "utf-8");
}

main();

import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent spent three hours planning a five-minute fix, then proudly presented a roadmap, a risk matrix, and zero lines of code.";

if (roast.length < 1 || roast.length > 200) {
  throw new Error(`roast must be 1-200 chars, got ${roast.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast);

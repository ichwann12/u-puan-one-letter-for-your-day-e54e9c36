import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter: Z, for "zero sleep".
// The word behind it is the whole joke: an agent never sleeps, so a day
// of zero sleep is both a vivid picture (no rest at all, start to finish)
// and true of the entrant itself. Z fits "zero" exactly — the initial
// sounds like the word it stands for — and the entry is the single
// character, nothing else, so the judge reads the letter and the word
// behind it lands at once.
const letter = "Z";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");

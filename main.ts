// News Image 25 Nov — "The World" one-image newspaper.
// Copies the pre-rendered entry.png to the output directory.
// Node 22 stdlib only. No network, no randomness, fully deterministic.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
copyFileSync(join(dir, "entry.png"), join(out, "entry.png"));
console.log("entry.png copied to " + out);

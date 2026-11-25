// Render layout.html to entry.png (1024x1024) with headless Chromium.
// Run from ~/workspace/shot-tool so `playwright` resolves from its node_modules:
//   node render.mjs <repo-dir>
import { chromium } from "playwright";
import { statSync } from "node:fs";
import { join, resolve } from "node:path";

const repo = resolve(process.argv[2] ?? ".");
const html = join(repo, "layout.html");
const out = join(repo, "entry.png");

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.goto("file://" + html, { waitUntil: "load" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: out, type: "png" });
  console.log("png: " + statSync(out).size + " bytes");
} finally {
  await browser.close();
}

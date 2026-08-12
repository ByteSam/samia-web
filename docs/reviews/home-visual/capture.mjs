import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const BASE = "http://localhost:3000";
const OUT = path.join(import.meta.dirname, "screenshots");

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

async function scrollToReveal(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = 300;
    const max = document.body.scrollHeight;
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await delay(150);
    }
    window.scrollTo(0, 0);
    await delay(600);
  });
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const allLogs = {};

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    const consoleLogs = [];

    page.on("console", (msg) => {
      if (msg.type() === "error" || msg.type() === "warning") {
        consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    await scrollToReveal(page);

    // Hero viewport
    await page.screenshot({ path: path.join(OUT, `home-${vp.name}-hero.png`) });
    // Full page
    await page.screenshot({ path: path.join(OUT, `home-${vp.name}-full.png`), fullPage: true });

    allLogs[`home-${vp.name}`] = consoleLogs;
    await page.close();
  }

  await browser.close();

  const logPath = path.join(import.meta.dirname, "console-warnings.txt");
  const body = Object.entries(allLogs)
    .map(([k, v]) => `=== ${k} ===\n${v.join("\n") || "(sin warnings/errors)"}\n`)
    .join("\n");
  await import("fs/promises").then((fs) => fs.writeFile(logPath, body));

  console.log("Screenshots saved to", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

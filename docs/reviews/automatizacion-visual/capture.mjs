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

const PAGE = { slug: "automatizacion", path: "/servicios/automatizacion" };

async function scrollToReveal(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = 350;
    const max = document.body.scrollHeight;
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await delay(180);
    }
    window.scrollTo(0, 0);
    await delay(600);
  });
}

async function capturePage(browser, viewport) {
  const page = await browser.newPage();
  const consoleLogs = [];

  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
    }
  });

  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(`${BASE}${PAGE.path}`, { waitUntil: "networkidle" });
  await scrollToReveal(page);

  const prefix = `${PAGE.slug}-${viewport.name}`;
  await page.screenshot({
    path: path.join(OUT, `${prefix}-full.png`),
    fullPage: true,
  });
  await page.screenshot({
    path: path.join(OUT, `${prefix}-hero.png`),
  });

  await page.close();
  return consoleLogs;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const allLogs = {};

  for (const vp of VIEWPORTS) {
    const logs = await capturePage(browser, vp);
    allLogs[`${PAGE.slug}-${vp.name}`] = logs;
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

// Screenshot the live platforms for the portfolio gallery.
//
//   npx playwright install chromium   # once
//   node scripts/shoot-projects.mjs   # writes into client/src/assets/projects/
//
// Sites returning an error are SKIPPED rather than captured — a screenshot of a
// 525 page in a portfolio is worse than a missing frame.
//
// Straight headless captures pick up cookie banners and half-finished
// animations, which look like sloppiness rather than product. So: dismiss the
// obvious consent overlays, wait for the network to settle, give motion a beat
// to land, then shoot at 16:10 to match the gallery frame.

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.argv[2] ?? new URL("../client/src/assets/projects", import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const TARGETS = [
  { id: "orizon", url: "https://orzn.io" },
  { id: "pxxl", url: "https://pxxl.app" },
  { id: "settlr", url: "https://payments.afriversedao.org" },
  { id: "blincs", url: "https://blincs.afriversedao.org" },
  { id: "scarletdb", url: "https://scarletdb.space" },
];

// Text on buttons that dismiss a consent/cookie overlay.
const DISMISS = ["Accept", "Accept all", "I agree", "Got it", "Allow all", "OK"];

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const results = [];

for (const t of TARGETS) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    // A real UA: some edges serve a degraded page to obvious headless clients.
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });
  const page = await ctx.newPage();
  try {
    const res = await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 });
    const status = res?.status() ?? 0;
    if (status >= 400) {
      results.push({ id: t.id, status, shot: false, note: "error page — not captured" });
      await ctx.close();
      continue;
    }

    for (const label of DISMISS) {
      const btn = page.getByRole("button", { name: label, exact: false }).first();
      if (await btn.isVisible().catch(() => false)) {
        await btn.click({ timeout: 3000 }).catch(() => {});
        break;
      }
    }

    // Let entrance animations finish so nothing is caught mid-fade.
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: `${OUT}/${t.id}.png`,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    results.push({ id: t.id, status, shot: true });
  } catch (err) {
    results.push({ id: t.id, status: 0, shot: false, note: String(err).slice(0, 90) });
  }
  await ctx.close();
}

await browser.close();
for (const r of results) {
  console.log(`  ${r.id.padEnd(10)} status=${r.status} shot=${r.shot}${r.note ? " — " + r.note : ""}`);
}

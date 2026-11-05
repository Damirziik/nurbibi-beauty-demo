import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base = process.env.BASE_URL || "http://localhost:3000";
await mkdir("docs/qa", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage();
const errors = [],
  failures = [],
  results = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("requestfailed", (r) =>
  failures.push({ url: r.url(), error: r.failure()?.errorText }),
);
for (const width of [320, 360, 375, 390, 430, 768, 1024, 1440, 1800]) {
  await page.setViewportSize({ width, height: 900 });
  const response = await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 650) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 70));
    }
  });
  await page.locator("footer").scrollIntoViewIfNeeded();
  const state = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > innerWidth,
    brokenImages: Array.from(document.images)
      .filter(
        (i) =>
          i.getBoundingClientRect().width > 0 &&
          (!i.complete || !i.naturalWidth),
      )
      .map((i) => i.src),
    h1: document.querySelectorAll("h1").length,
    anchors: Array.from(document.querySelectorAll('a[href^="#"]')).filter(
      (a) => !document.querySelector(a.getAttribute("href")),
    ).length,
  }));
  if (
    response.status() !== 200 ||
    state.overflow ||
    state.brokenImages.length ||
    state.h1 !== 1 ||
    state.anchors
  )
    throw new Error(JSON.stringify({ width, ...state }));
  if ([390, 768, 1440].includes(width)) {
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `docs/qa/${width}.png`, fullPage: true });
  }
  results.push({ width, status: response.status(), ...state });
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base);
await page.getByRole("button", { name: "Меню +", exact: true }).click();
await page
  .getByRole("navigation")
  .getByRole("link", { name: "Услуги", exact: true })
  .click();
if (await page.getByRole("navigation").isVisible())
  throw new Error("Mobile menu did not close");
await page.locator("summary").first().click();
if (
  !(await page
    .locator("details")
    .first()
    .getAttribute("open")
    .then((x) => x !== null))
)
  throw new Error("Service did not expand");
for (const button of await page
  .getByRole("button", { name: /Открыть фото:/ })
  .all()) {
  await button.click();
  await page.locator("dialog[open]").waitFor();
  if (
    !(await page
      .locator("dialog img")
      .evaluate((i) => i.complete && i.naturalWidth > 0))
  )
    throw new Error("Lightbox image missing");
  await page.keyboard.press("Escape");
}
await page.getByLabel("На что хотите записаться?").selectOption("Брови");
const link = await page
  .getByRole("link", { name: "Продолжить в WhatsApp" })
  .getAttribute("href");
if (
  !decodeURIComponent(link).includes("«Брови»") ||
  !link.startsWith("https://wa.me/77084880784?")
)
  throw new Error("Incorrect WhatsApp link");
await page.emulateMedia({ reducedMotion: "reduce" });
await page.reload();
if (
  (await page
    .locator("h1")
    .evaluate((el) => getComputedStyle(el).animationName)) !== "none"
)
  throw new Error("Reduced motion failed");
page.removeAllListeners('console');
const notFound = await page.goto(base + "/missing-page");
if (notFound.status() !== 404) throw new Error("Missing 404");
const report = {
  base,
  results,
  interactions:
    "menu, services, all four lightboxes, Escape, WhatsApp service, reduced motion, 404 passed",
  errors,
  failures,
};
await writeFile("docs/qa/report.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (errors.length || failures.length) process.exitCode = 1;

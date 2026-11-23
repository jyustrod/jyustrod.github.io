import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
const html = await readFile("index.html", "utf8");
const javascript = await readFile("assets/app.js", "utf8");
const styles = await readFile("assets/styles.css", "utf8");
test("primary sections have unique anchored IDs", () => {
  for (const id of ["main", "about", "projects", "skills", "education", "contact", "top"]) assert.equal((html.match(new RegExp('id="' + id + '"', "g")) || []).length, 1);
});
test("navigation references real section IDs", () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const [, hash] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(hash), "Missing anchor: " + hash);
});
test("all bilingual keys have translations", () => {
  const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(match => match[1]);
  for (const key of new Set(keys)) {
    const safe = key.replace(/[.*+?^$()|[\]{}]/g, "\\$&");
    assert.ok((javascript.match(new RegExp(safe + ":", "g")) || []).length >= 2, "Missing translation for " + key);
  }
});
test("does not publish removed CV achievements or project", () => {
  assert.doesNotMatch(html + javascript, /yTrading|Matrícula de Honor|10\/10/);
});
test("does not embed external tracking scripts or personal photo", () => {
  assert.doesNotMatch(html, /<img\b|analytics|gtag\(|google-analytics\.com/i);
});
test("has accessibility essentials", () => {
  assert.match(html, /class="skip-link"/);
  assert.match(html, /aria-pressed="true"/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(html, /<main\b/);
});
test("required assets exist", async () => {
  for (const p of ["favicon.svg", "assets/styles.css", "assets/app.js", "sitemap.xml", "robots.txt"]) await stat(p);
});

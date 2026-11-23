import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
const required = ["index.html", "assets/app.js", "assets/styles.css", "favicon.svg", "robots.txt", "sitemap.xml"];
for (const file of required) await stat(join("dist", file));
const html = await readFile(join("dist", "index.html"), "utf8");
for (const fragment of ['id="main"', 'id="projects"', 'id="skills"', 'id="education"', 'id="contact"', "MiCuE-CLM", "Avanduo", "Nature Pistachio"]) {
  if (!html.includes(fragment)) throw new Error("Missing expected output: " + fragment);
}
if (/yTrading|Matrícula de Honor|10\/10/.test(html)) throw new Error("Disallowed CV content detected");
console.log("Static output verification passed");

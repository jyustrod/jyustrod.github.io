import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const path of ["index.html", "favicon.svg", "robots.txt", "sitemap.xml"]) {
  await cp(join(root, path), join(output, path));
}
await cp(join(root, "assets"), join(output, "assets"), { recursive: true });
await mkdir(join(output, ".well-known"), { recursive: true });
console.log("Built static site in dist/");

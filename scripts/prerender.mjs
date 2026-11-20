// Renders the app to static HTML and injects it into dist/index.html so
// crawlers and no-JS clients get the full page. Runs after both vite builds.
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist/index.html");
const ssrDir = path.join(root, "dist-ssr");
const placeholder = '<div id="root"></div>';

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const html = await readFile(htmlPath, "utf8");
if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

const markup = render();
await writeFile(
  htmlPath,
  html.replace(placeholder, () => `<div id="root">${markup}</div>`)
);
await rm(ssrDir, { recursive: true, force: true });

console.log(`prerendered dist/index.html (${markup.length} bytes of markup)`);

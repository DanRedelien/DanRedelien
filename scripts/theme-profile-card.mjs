import { readFileSync, writeFileSync } from "node:fs";

const cardPath = "profile-summary-card-output/github_dark/0-profile-details.svg";

const palette = {
  background: "#0d1117",
  text: "#f0f6fc",
  accent: "#4f1d20",
  muted: "#6a736e",
};

const replacements = new Map([
  ["#0d1117", palette.background],
  ["#161b22", palette.background],
  ["#21262d", palette.muted],
  ["#30363d", palette.muted],
  ["#484f58", palette.muted],
  ["#6e7681", palette.muted],
  ["#8b949e", palette.muted],
  ["#c9d1d9", palette.text],
  ["#f0f6fc", palette.text],
  ["#58a6ff", palette.accent],
  ["#79c0ff", palette.accent],
  ["#1f6feb", palette.accent],
  ["#2f81f7", palette.accent],
  ["#238636", palette.accent],
  ["#2ea043", palette.accent],
  ["#3fb950", palette.accent],
]);

let svg = readFileSync(cardPath, "utf8");

for (const [from, to] of replacements.entries()) {
  svg = svg.replaceAll(from, to).replaceAll(from.toUpperCase(), to);
}

svg = svg
  .replace(/fill="none"/g, 'fill="none"')
  .replace(/stroke="#6a736e"\s+stroke-opacity="[^"]*"/g, 'stroke="#6a736e"')
  .replace(/fill-opacity="0\.2"/g, 'fill-opacity="0.28"')
  .replace(/fill-opacity="0\.1"/g, 'fill-opacity="0.18"');

writeFileSync(cardPath, svg);

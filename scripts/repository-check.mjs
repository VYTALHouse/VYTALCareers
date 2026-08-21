import fs from "node:fs";
import path from "node:path";

const required = [
  "README.md", "AGENTS.md", "docs/SCOPE.md", "docs/ROADMAP.md",
  "docs/INTEGRATION_CONTRACT.md", "docs/DECISIONS.md",
  "assets/README.md", "assets/manifest.json"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}
const manifest = JSON.parse(fs.readFileSync("assets/manifest.json", "utf8"));
if (manifest.schemaVersion !== 1 || !Array.isArray(manifest.assets)) {
  throw new Error("Invalid asset manifest");
}
const blocked = /(^|\/)(\.env($|\.)|credentials?|secrets?|bank[-_ ]?statements?|pfs|pof)(\/|$)/i;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const target = path.join(dir, entry.name);
    if (blocked.test(target)) throw new Error(`Blocked public path: ${target}`);
    if (entry.isDirectory()) walk(target);
  }
}
walk(".");
console.log("VYTALCareers: repository contract verified");

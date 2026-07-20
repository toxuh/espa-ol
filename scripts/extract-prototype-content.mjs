import { mkdir, readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";

const sourcePath = new URL("../temp/espanol-diario.html", import.meta.url);
const outputPath = new URL(
  "../temp/prototype-content-extracted.json",
  import.meta.url,
);

const html = await readFile(sourcePath, "utf8");
const start = html.indexOf("const LEVELS =");
const end = html.indexOf("/* ============================= СОСТОЯНИЕ");

if (start === -1 || end === -1 || end <= start) {
  throw new Error("Не удалось найти статический блок контента в прототипе");
}

const names = [
  "LEVELS",
  "LEVEL_NAMES",
  "GRAMMAR",
  "READINGS",
  "LISTENING",
  "TRANSLATE_FROM_ES",
  "TRANSLATE_TO_ES",
  "THEORY",
  "VOCAB",
  "CONJUGATIONS",
  "CONJ_PERSONS",
  "PLACEMENT",
];
const context = {};
vm.createContext(context);
vm.runInContext(
  `${html.slice(start, end)}\nresult = { ${names.join(", ")} };`,
  context,
  { filename: "espanol-diario.html" },
);

await mkdir(new URL("../temp/", import.meta.url), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(context.result, null, 2)}\n`);

for (const name of names) {
  const value = context.result[name];
  const count = Array.isArray(value) ? value.length : Object.keys(value).length;
  console.log(`${name}: ${count}`);
}

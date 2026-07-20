import { readFile, writeFile } from "node:fs/promises";

import { catalogItems } from "../src/content/catalog";
import {
  assertManifestUpdateIsRevisioned,
  contentReport,
  createContentManifest,
  type ContentManifest,
  validateCatalog,
} from "../src/content/validation";

const manifestUrl = new URL(
  "../src/content/content-manifest.json",
  import.meta.url,
);
const writeManifest = process.argv.includes("--write-manifest");

async function readManifest() {
  try {
    return JSON.parse(await readFile(manifestUrl, "utf8")) as ContentManifest;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

async function main() {
  const savedManifest = await readManifest();

  if (writeManifest) {
    const structuralErrors = validateCatalog(catalogItems);
    if (structuralErrors.length) throw new Error(structuralErrors.join("\n"));

    const nextManifest = createContentManifest(catalogItems);
    if (savedManifest) {
      const revisionErrors = assertManifestUpdateIsRevisioned(
        savedManifest,
        nextManifest,
      );
      if (revisionErrors.length) throw new Error(revisionErrors.join("\n"));
    }
    await writeFile(manifestUrl, `${JSON.stringify(nextManifest, null, 2)}\n`);
    console.log(`Wrote manifest for ${catalogItems.length} content items.`);
    return;
  }

  if (!savedManifest) {
    throw new Error(
      "Content manifest is missing. Run npm run content:manifest.",
    );
  }
  const errors = validateCatalog(catalogItems, savedManifest);
  if (errors.length) throw new Error(errors.join("\n"));
  console.log(contentReport(catalogItems));
  console.log("\nContent validation passed.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

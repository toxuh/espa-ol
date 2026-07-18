import "dotenv/config";

import { readFile } from "node:fs/promises";

import { PrismaPg } from "@prisma/adapter-pg";

import {
  CefrLevel,
  ContentKind,
  Prisma,
  PrismaClient,
} from "../src/generated/prisma/client";
import type { PrototypeContent } from "../src/content/types";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is required");

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: url }),
});

type SeedItem = {
  sourceId: string;
  kind: ContentKind;
  level: CefrLevel | null;
  topic: string | null;
  position: number;
  data: Prisma.InputJsonValue;
};

async function main() {
  const content = JSON.parse(
    await readFile("src/content/prototype-content.json", "utf8"),
  ) as PrototypeContent;
  const items: SeedItem[] = [
    ...content.GRAMMAR.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.GRAMMAR,
      level: item.level as CefrLevel,
      topic: item.topic,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.READINGS.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.READING,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.LISTENING.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.LISTENING,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.TRANSLATE_FROM_ES.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.TRANSLATE_FROM_ES,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.TRANSLATE_TO_ES.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.TRANSLATE_TO_ES,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.THEORY.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.THEORY,
      level: item.level as CefrLevel,
      topic: item.topics[0] ?? null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.VOCAB.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.VOCABULARY,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.CONJUGATIONS.map((item, position) => ({
      sourceId: item.id,
      kind: ContentKind.CONJUGATION,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: item as unknown as Prisma.InputJsonValue,
    })),
    ...content.PLACEMENT.map((item, position) => ({
      sourceId: `placement-${String(position + 1).padStart(2, "0")}`,
      kind: ContentKind.PLACEMENT,
      level: item.level as CefrLevel,
      topic: null,
      position,
      data: {
        ...item,
        id: `placement-${String(position + 1).padStart(2, "0")}`,
      },
    })),
  ];

  await prisma.$transaction(async (tx) => {
    await tx.contentItem.updateMany({ data: { active: false } });
    for (const item of items) {
      await tx.contentItem.upsert({
        where: { sourceId: item.sourceId },
        create: { ...item, active: true },
        update: { ...item, active: true },
      });
    }
  });

  console.log(`Seeded ${items.length} content items.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());

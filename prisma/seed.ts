import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import {
  CefrLevel,
  ContentKind,
  Prisma,
  PrismaClient,
} from "../src/generated/prisma/client";
import { catalogItems } from "../src/content/catalog";

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
  const items: SeedItem[] = catalogItems.map((item) => ({
    sourceId: item.sourceId,
    kind: ContentKind[item.kind],
    level: CefrLevel[item.level],
    topic: item.topic,
    position: item.position,
    data: JSON.parse(JSON.stringify(item.data)) as Prisma.InputJsonValue,
  }));

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

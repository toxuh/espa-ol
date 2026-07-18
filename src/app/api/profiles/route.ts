import { Prisma } from "@/generated/prisma/client";
import { z } from "zod";

import { normalizeAnswer } from "@/domain/answer-normalization";
import { getDb } from "@/lib/db";
import { apiErrorResponse } from "@/server/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const profiles = await getDb().profile.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      level: true,
      placementDone: true,
      streak: true,
    },
  });
  return Response.json({ profiles });
}

export async function POST(request: Request) {
  try {
    const { name } = z
      .object({ name: z.string().trim().min(1).max(40) })
      .parse(await request.json());
    const normalizedName = normalizeAnswer(name).replace(/\s+/g, " ");
    const profile = await getDb().profile.create({
      data: { name, normalizedName },
    });
    return Response.json({ profile }, { status: 201 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return Response.json(
        { error: "Профиль с таким именем уже существует" },
        { status: 409 },
      );
    }
    return apiErrorResponse(error);
  }
}

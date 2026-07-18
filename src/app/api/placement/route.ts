import {
  ContentKind,
  LevelSelectionMethod,
  Prisma,
} from "@/generated/prisma/client";
import { z } from "zod";

import type { PlacementQuestion } from "@/content/types";
import { normalizeAnswer } from "@/domain/answer-normalization";
import { levelFromPlacementScore } from "@/domain/learning";
import { getDb } from "@/lib/db";
import { apiErrorResponse, requireProfile } from "@/server/auth";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    await requireProfile(request);
    const items = await getDb().contentItem.findMany({
      where: { kind: ContentKind.PLACEMENT, active: true },
      orderBy: { position: "asc" },
    });
    const questions = items.map((item) => {
      const data = item.data as unknown as PlacementQuestion;
      return {
        id: item.sourceId,
        level: data.level,
        prompt: data.prompt,
        options: data.options,
      };
    });
    return Response.json({ questions });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const profile = await requireProfile(request);
    const { answers } = z
      .object({ answers: z.array(z.string()).length(15) })
      .parse(await request.json());
    const items = await getDb().contentItem.findMany({
      where: { kind: ContentKind.PLACEMENT, active: true },
      orderBy: { position: "asc" },
    });
    if (items.length !== 15) throw new Error("Placement content is incomplete");
    const graded = items.map((item, index) => {
      const question = item.data as unknown as PlacementQuestion;
      const given = answers[index] ?? "";
      return {
        sourceId: item.sourceId,
        given,
        correct: normalizeAnswer(given) === normalizeAnswer(question.answer),
      };
    });
    const score = graded.filter((item) => item.correct).length;
    const level = levelFromPlacementScore(score);
    const [updated] = await getDb().$transaction([
      getDb().profile.update({
        where: { id: profile.id },
        data: { level, placementDone: true },
      }),
      getDb().placementAttempt.create({
        data: {
          profileId: profile.id,
          method: LevelSelectionMethod.PLACEMENT,
          answers: graded as unknown as Prisma.InputJsonValue,
          score,
          assignedLevel: level,
        },
      }),
      getDb().profileLevelEvent.create({
        data: {
          profileId: profile.id,
          fromLevel: profile.level,
          toLevel: level,
          method: LevelSelectionMethod.PLACEMENT,
        },
      }),
    ]);
    return Response.json({ profile: updated, score, level });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

import { CefrLevel, LevelSelectionMethod } from "@/generated/prisma/client";
import { z } from "zod";

import { apiErrorResponse, requireProfile } from "@/server/auth";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    return Response.json({ profile: await requireProfile(request) });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const profile = await requireProfile(request);
    const { level } = z
      .object({ level: z.enum(CefrLevel) })
      .parse(await request.json());
    const [updated] = await getDb().$transaction([
      getDb().profile.update({
        where: { id: profile.id },
        data: { level, placementDone: true },
      }),
      getDb().profileLevelEvent.create({
        data: {
          profileId: profile.id,
          fromLevel: profile.level,
          toLevel: level,
          method: LevelSelectionMethod.MANUAL,
        },
      }),
      getDb().placementAttempt.create({
        data: {
          profileId: profile.id,
          method: LevelSelectionMethod.MANUAL,
          answers: [],
          assignedLevel: level,
        },
      }),
    ]);
    return Response.json({ profile: updated });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

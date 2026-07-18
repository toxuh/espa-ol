import { z } from "zod";

import { apiErrorResponse, requireProfile } from "@/server/auth";
import { updateDayActivity } from "@/server/daily-plan";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = z
      .object({
        dayId: z.string().min(1),
        action: z.string().min(1),
        sourceId: z.string().optional(),
        done: z.boolean().optional(),
        rating: z.string().optional(),
        text: z.string().max(10000).optional(),
      })
      .parse(await request.json());
    return Response.json({
      progress: await updateDayActivity(await requireProfile(request), input),
    });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

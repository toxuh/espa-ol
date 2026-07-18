import { z } from "zod";

import { apiErrorResponse, requireProfile } from "@/server/auth";
import { submitAttempt } from "@/server/daily-plan";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = z
      .object({
        dayId: z.string().min(1),
        sourceId: z.string().min(1),
        answer: z.union([z.string(), z.array(z.string()).length(6)]),
      })
      .parse(await request.json());
    return Response.json({
      attempt: await submitAttempt(await requireProfile(request), input),
    });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

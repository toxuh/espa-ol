import { apiErrorResponse, requireProfile } from "@/server/auth";
import { hydrateDay } from "@/server/daily-plan";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    return Response.json(await hydrateDay(await requireProfile(request)));
  } catch (error) {
    return apiErrorResponse(error);
  }
}

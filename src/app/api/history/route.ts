import { getDb } from "@/lib/db";
import { apiErrorResponse, requireProfile } from "@/server/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const profile = await requireProfile(request);
    const days = await getDb().dailyPlan.findMany({
      where: { profileId: profile.id },
      orderBy: { localDate: "desc" },
      include: { _count: { select: { attempts: true } } },
    });
    return Response.json({ days });
  } catch (error) {
    return apiErrorResponse(error);
  }
}

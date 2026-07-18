import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    await getDb().$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: "ok",
      database: "reachable",
    });
  } catch (error) {
    console.error("Health check failed", error);

    return NextResponse.json(
      { status: "error", database: "unreachable" },
      { status: 503 },
    );
  }
}

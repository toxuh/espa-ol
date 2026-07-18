import { z } from "zod";

import { getDb } from "@/lib/db";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function requireProfile(request: Request) {
  const profileId = request.headers.get("x-profile-id");
  if (!profileId) throw new ApiError(401, "Сначала выберите профиль");

  const profile = await getDb().profile.findFirst({
    where: { id: profileId, active: true },
  });
  if (!profile) throw new ApiError(401, "Профиль не найден");
  return profile;
}

export function apiErrorResponse(error: unknown) {
  if (error instanceof ApiError) {
    return Response.json({ error: error.message }, { status: error.status });
  }
  if (error instanceof z.ZodError) {
    return Response.json(
      { error: "Некорректные данные", details: error.issues },
      { status: 400 },
    );
  }
  console.error(error);
  return Response.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
}

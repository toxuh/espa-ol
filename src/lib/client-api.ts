export async function profileFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const profileId = window.localStorage.getItem("espanolDiario.profileId");
  const response = await fetch(path, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(profileId ? { "x-profile-id": profileId } : {}),
      ...init?.headers,
    },
  });
  const body = (await response.json()) as T & { error?: string };
  if (!response.ok) throw new Error(body.error ?? "Ошибка запроса");
  return body;
}

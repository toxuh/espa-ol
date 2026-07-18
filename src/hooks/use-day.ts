"use client";

import { useCallback, useEffect, useState } from "react";

import { profileFetch } from "@/lib/client-api";
import type { DayPayload } from "@/types/day";

export function useDay() {
  const [data, setData] = useState<DayPayload | null>(null);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setData(await profileFetch<DayPayload>("/api/day"));
      setError("");
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Не удалось загрузить день",
      );
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    profileFetch<DayPayload>("/api/day")
      .then((value) => {
        if (!cancelled) setData(value);
      })
      .catch((caught: unknown) => {
        if (!cancelled)
          setError(
            caught instanceof Error
              ? caught.message
              : "Не удалось загрузить день",
          );
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const attempt = useCallback(
    async (sourceId: string, answer: string | string[]) => {
      if (!data) return;
      setBusyId(sourceId);
      try {
        await profileFetch("/api/day/attempt", {
          method: "POST",
          body: JSON.stringify({ dayId: data.day.id, sourceId, answer }),
        });
        await refresh();
      } catch (caught) {
        setError(
          caught instanceof Error
            ? caught.message
            : "Не удалось сохранить ответ",
        );
      } finally {
        setBusyId(null);
      }
    },
    [data, refresh],
  );

  const activity = useCallback(
    async (action: string, values: Record<string, unknown> = {}) => {
      if (!data) return;
      setBusyId(action + String(values.sourceId ?? ""));
      try {
        await profileFetch("/api/day/activity", {
          method: "POST",
          body: JSON.stringify({ dayId: data.day.id, action, ...values }),
        });
        await refresh();
      } catch (caught) {
        setError(
          caught instanceof Error
            ? caught.message
            : "Не удалось сохранить действие",
        );
      } finally {
        setBusyId(null);
      }
    },
    [data, refresh],
  );

  return { data, error, busyId, attempt, activity, refresh };
}

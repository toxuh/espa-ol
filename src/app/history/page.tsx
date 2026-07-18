"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, CircleDashed } from "lucide-react";

import { ProfileRequired } from "@/components/profile-required";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { profileFetch } from "@/lib/client-api";

type HistoryDay = {
  id: string;
  localDate: string;
  levelSnapshot: string;
  completedAt: string | null;
  score: number | null;
  rating: string | null;
  _count: { attempts: number };
};

export default function HistoryPage() {
  return (
    <ProfileRequired>
      <History />
    </ProfileRequired>
  );
}

function History() {
  const [days, setDays] = useState<HistoryDay[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    profileFetch<{ days: HistoryDay[] }>("/api/history")
      .then((data) => setDays(data.days))
      .catch((caught) => setError(caught.message));
  }, []);
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-6 py-10">
      <div>
        <Badge variant="secondary">Календарь занятий</Badge>
        <h1 className="mt-2 text-3xl font-semibold">История</h1>
      </div>
      {error && <p className="text-destructive">{error}</p>}
      {days.length === 0 ? (
        <p className="text-muted-foreground">
          Пока нет ни одного сгенерированного дня.
        </p>
      ) : (
        <div className="grid gap-3">
          {days.map((day) => (
            <Card key={day.id}>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-3">
                  {day.completedAt ? (
                    <CheckCircle2 className="text-emerald-600" />
                  ) : (
                    <CircleDashed className="text-muted-foreground" />
                  )}
                  <div>
                    <CardTitle className="text-lg">
                      {new Date(day.localDate).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Уровень {day.levelSnapshot} · попыток:{" "}
                      {day._count.attempts}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {day.score !== null ? (
                    <Badge>{day.score}%</Badge>
                  ) : (
                    <Badge variant="outline">не завершён</Badge>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}

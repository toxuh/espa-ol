"use client";

import { useEffect, useState } from "react";

import { ProfileRequired } from "@/components/profile-required";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { profileFetch } from "@/lib/client-api";

type Stats = {
  profile: { joinedAt: string; streak: number; level: string };
  days: { started: number; completed: number };
  categories: Record<
    string,
    {
      attempts: number;
      correct: number;
      total: number;
      accuracy: number | null;
    }
  >;
  topics: { topic: string; correct: number; total: number; accuracy: number }[];
};
const labels: Record<string, string> = {
  GRAMMAR: "Грамматика",
  VOCABULARY: "Словарь",
  CONJUGATION: "Спряжения",
};

export default function ProgressPage() {
  return (
    <ProfileRequired>
      <ProgressPageContent />
    </ProfileRequired>
  );
}

function ProgressPageContent() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    profileFetch<Stats>("/api/progress")
      .then(setStats)
      .catch((caught) => setError(caught.message));
  }, []);
  if (!stats)
    return (
      <main className="mx-auto max-w-5xl px-6 py-10">
        <p>{error || "Считаем прогресс…"}</p>
      </main>
    );
  return (
    <main className="mx-auto w-full max-w-5xl space-y-7 px-6 py-10">
      <div>
        <Badge variant="secondary">Уровень {stats.profile.level}</Badge>
        <h1 className="mt-2 text-3xl font-semibold">Прогресс</h1>
        <p className="text-muted-foreground">
          Серия: 🔥 {stats.profile.streak} · начато дней: {stats.days.started} ·
          завершено: {stats.days.completed}
        </p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {Object.entries(stats.categories).map(([kind, value]) => (
          <Card key={kind}>
            <CardHeader>
              <CardTitle>{labels[kind] ?? kind}</CardTitle>
              <CardDescription>{value.attempts} карточек</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-semibold">
                {value.accuracy === null ? "—" : `${value.accuracy}%`}
              </div>
              <Progress value={value.accuracy ?? 0} />
            </CardContent>
          </Card>
        ))}
      </section>
      <Card>
        <CardHeader>
          <CardTitle>Темы грамматики</CardTitle>
          <CardDescription>
            Сначала самые слабые — именно они получают повышенный приоритет при
            генерации.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {stats.topics.length === 0 ? (
            <p className="text-muted-foreground">
              Статистика появится после первых ответов.
            </p>
          ) : (
            <div className="space-y-4">
              {stats.topics.map((topic) => (
                <div
                  key={topic.topic}
                  className="grid items-center gap-2 sm:grid-cols-[220px_1fr_60px]"
                >
                  <span className="text-sm font-medium">{topic.topic}</span>
                  <Progress value={topic.accuracy} />
                  <span className="text-right text-sm">{topic.accuracy}%</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

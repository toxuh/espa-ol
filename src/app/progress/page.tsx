"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ActivityCalendar } from "@/components/activity-calendar";
import { ProfileRequired } from "@/components/profile-required";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  days: {
    started: number;
    completed: number;
    activity: { localDate: string; completedAt: string | null }[];
  };
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
  vocabulary: ItemMastery[];
  conjugation: ItemMastery[];
};
type ItemMastery = {
  id: string;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
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
        <p className="text-sm text-muted-foreground">
          Дата начала:{" "}
          {new Date(stats.profile.joinedAt).toLocaleDateString("ru-RU")}
        </p>
      </div>
      <section className="grid gap-4 md:grid-cols-3">
        {Object.entries(stats.categories).map(([kind, value]) => (
          <Card key={kind}>
            <CardHeader>
              <CardTitle>{labels[kind] ?? kind}</CardTitle>
              <CardDescription>
                Решено карточек: {value.attempts}. Процент — доля полностью
                верных первых попыток.
              </CardDescription>
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
            <TopicGroups topics={stats.topics} />
          )}
        </CardContent>
      </Card>
      <MasteryCard
        title="Словарный запас"
        empty="Пока нет данных по словарным карточкам."
        items={stats.vocabulary}
      />
      <MasteryCard
        title="Спряжение глаголов"
        empty="Пока нет данных по спряжениям."
        items={stats.conjugation}
      />
      <Card>
        <CardHeader>
          <CardTitle>Календарь активности</CardTitle>
          <CardDescription>
            Зелёный день завершён полностью, оранжевый начат частично.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityCalendar days={stats.days.activity} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Изменить уровень</CardTitle>
          <CardDescription>
            Можно повторить placement-тест или выбрать уровень вручную. История
            сохранится.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline">
            <Link href="/placement">Изменить уровень</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

function TopicGroups({ topics }: { topics: Stats["topics"] }) {
  const groups = [
    {
      title: "Нужно подтянуть",
      items: topics.filter((item) => item.accuracy < 45),
    },
    {
      title: "Средне",
      items: topics.filter((item) => item.accuracy >= 45 && item.accuracy < 75),
    },
    {
      title: "Хорошо усвоено",
      items: topics.filter((item) => item.accuracy >= 75),
    },
  ];
  return (
    <div className="space-y-6">
      {groups.map((group) =>
        group.items.length ? (
          <section key={group.title}>
            <h3 className="mb-3 font-medium">{group.title}</h3>
            <div className="space-y-3">
              {group.items.map((topic) => (
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
          </section>
        ) : null,
      )}
    </div>
  );
}

function MasteryCard({
  title,
  empty,
  items,
}: {
  title: string;
  empty: string;
  items: ItemMastery[];
}) {
  const learned = items.filter((item) => item.accuracy >= 75);
  const struggling = items.filter((item) => item.accuracy < 45);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.length ? (
          <>
            <p>
              Отработано карточек: <b>{items.length}</b>. Хорошо усвоено:{" "}
              <b>{learned.length}</b>.
            </p>
            {struggling.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Пока даются трудно:{" "}
                {struggling.map((item) => item.label).join(", ")}
              </p>
            )}
          </>
        ) : (
          <p className="text-muted-foreground">{empty}</p>
        )}
      </CardContent>
    </Card>
  );
}

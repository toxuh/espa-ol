"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Flame,
  NotebookPen,
  Plus,
  Sparkles,
  UserRound,
} from "lucide-react";
import { FormEvent, useState } from "react";

import { useProfile } from "@/components/profile-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { profileFetch } from "@/lib/client-api";

export default function HomePage() {
  const { ready, profile, profiles, refresh, select } = useProfile();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function createProfile(event: FormEvent) {
    event.preventDefault();
    setError("");
    try {
      const result = await profileFetch<{ profile: (typeof profiles)[number] }>(
        "/api/profiles",
        {
          method: "POST",
          body: JSON.stringify({ name }),
        },
      );
      await refresh();
      select(result.profile);
      setName("");
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Не удалось создать профиль",
      );
    }
  }

  if (!ready)
    return (
      <main className="page-shell">
        <div className="soft-panel h-56 animate-pulse" />
      </main>
    );
  if (profile) {
    return (
      <main className="page-shell">
        <section className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">
          <div className="absolute -right-16 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 size-56 rounded-full bg-accent/60 blur-3xl" />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">
                  Уровень {profile.level ?? "—"}
                </Badge>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  План на сегодня
                </span>
              </div>
              <div className="space-y-3">
                <p className="eyebrow">Buenos días</p>
                <h1 className="page-heading sm:text-5xl">
                  ¡Hola, {profile.name}!
                </h1>
                <p className="page-lede">
                  {profile.placementDone
                    ? "Небольшой шаг сегодня — заметный прогресс через месяц. Ваш персональный набор уже ждёт."
                    : "Начнём с короткого теста или выберем уровень вручную — это займёт всего несколько минут."}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-xl px-5">
                  <Link
                    href={profile.placementDone ? "/practice" : "/placement"}
                  >
                    {profile.placementDone
                      ? "Продолжить занятие"
                      : "Определить уровень"}
                    <ArrowRight />
                  </Link>
                </Button>
                {profile.placementDone && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-xl px-5"
                  >
                    <Link href="/theory">Открыть теорию дня</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur-sm">
                <span className="mb-5 grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Flame className="size-4" />
                </span>
                <p className="font-mono text-3xl font-semibold tabular-nums">
                  {profile.streak}
                </p>
                <p className="text-xs text-muted-foreground">дней в серии</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur-sm">
                <span className="mb-5 grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Sparkles className="size-4" />
                </span>
                <p className="font-mono text-3xl font-semibold">
                  {profile.level ?? "—"}
                </p>
                <p className="text-xs text-muted-foreground">текущий уровень</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Ваш маршрут</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                Каждый день — три понятных шага
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="group">
              <CardHeader>
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <NotebookPen className="size-5" />
                </span>
                <CardTitle>01 · Практика</CardTitle>
                <CardDescription>
                  Персональный набор грамматики, слов, спряжений и живых
                  навыков.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="-ml-2" asChild>
                  <Link href="/practice">
                    К заданиям <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group">
              <CardHeader>
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <BookOpenText className="size-5" />
                </span>
                <CardTitle>02 · Теория</CardTitle>
                <CardDescription>
                  Короткое объяснение одной новой или пока слабой темы.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="-ml-2" asChild>
                  <Link href="/theory">
                    Читать урок <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group">
              <CardHeader>
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <CalendarDays className="size-5" />
                </span>
                <CardTitle>03 · Результат</CardTitle>
                <CardDescription>
                  Весь прогресс, слабые темы и история занятий в одном месте.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="-ml-2" asChild>
                  <Link href="/progress">
                    Смотреть прогресс <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell max-w-5xl">
      <section className="mx-auto max-w-2xl space-y-3 text-center">
        <Badge variant="secondary">Внутренний семейный проект</Badge>
        <h1 className="page-heading mt-4 sm:text-5xl">
          Кто сегодня занимается?
        </h1>
        <p className="page-lede mx-auto">
          Выберите свой профиль — мы откроем ваш уровень, серию и персональный
          план на день.
        </p>
      </section>
      <section
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Семейные профили"
      >
        {profiles.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="h-auto min-h-24 justify-start rounded-2xl border-border/70 bg-card/75 p-5 shadow-sm hover:border-primary/30 hover:bg-card"
            onClick={() => select(item)}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <UserRound className="size-5" />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block truncate text-base font-semibold">
                {item.name}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {item.level ?? "уровень не выбран"} · 🔥 {item.streak}
              </span>
            </span>
            <ArrowRight className="ml-auto size-4 text-muted-foreground" />
          </Button>
        ))}
      </section>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Добавить нового ученика</CardTitle>
          <CardDescription>
            Только имя — без почты и пароля. Оно должно быть уникальным внутри
            семьи.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={createProfile}
          >
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Имя"
              maxLength={40}
              required
            />
            <Button type="submit" className="h-10 sm:h-8">
              <Plus />
              Добавить
            </Button>
          </form>
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        </CardContent>
      </Card>
    </main>
  );
}

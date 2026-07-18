"use client";

import Link from "next/link";
import { ArrowRight, Plus, UserRound } from "lucide-react";
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
      <main className="mx-auto max-w-5xl px-6 py-16 text-muted-foreground">
        Загрузка…
      </main>
    );
  if (profile) {
    return (
      <main className="mx-auto w-full max-w-5xl space-y-8 px-6 py-12">
        <section className="space-y-4">
          <Badge>Профиль: {profile.name}</Badge>
          <h1 className="text-4xl font-semibold tracking-tight">
            ¡Hola, {profile.name}!
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {profile.placementDone
              ? `Текущий уровень — ${profile.level}. Сегодняшний набор уже можно начинать.`
              : "Определи уровень тестом или выбери его вручную."}
          </p>
          <Button asChild size="lg">
            <Link href={profile.placementDone ? "/practice" : "/placement"}>
              {profile.placementDone ? "Начать практику" : "Определить уровень"}
              <ArrowRight />
            </Link>
          </Button>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Практика</CardTitle>
              <CardDescription>
                Грамматика, слова, спряжения, чтение, аудио и переводы.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Теория дня</CardTitle>
              <CardDescription>
                Новая или слабая тема с привязанными заданиями.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Серия: 🔥 {profile.streak}</CardTitle>
              <CardDescription>
                Засчитывается только полностью завершённый день.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-6 py-12">
      <section className="space-y-3">
        <Badge variant="secondary">Внутренний семейный проект</Badge>
        <h1 className="text-4xl font-semibold">🇪🇸 Español Diario</h1>
        <p className="text-muted-foreground">
          Выберите себя. Паролей нет: браузер запомнит только ID профиля.
        </p>
      </section>
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="h-auto justify-start p-5"
            onClick={() => select(item)}
          >
            <UserRound className="size-5" />
            <span className="text-left">
              <span className="block font-medium">{item.name}</span>
              <span className="block text-xs text-muted-foreground">
                {item.level ?? "уровень не выбран"} · 🔥 {item.streak}
              </span>
            </span>
          </Button>
        ))}
      </section>
      <Card>
        <CardHeader>
          <CardTitle>Новый профиль</CardTitle>
          <CardDescription>
            Имя должно быть уникальным внутри семьи.
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
            <Button type="submit">
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

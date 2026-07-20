"use client";

import type { GrammarExercise, TheoryLesson } from "@/content/types";
import { GrammarExerciseCard } from "@/components/day/grammar-exercise";
import { ProfileRequired } from "@/components/profile-required";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDay } from "@/hooks/use-day";

export default function TheoryPage() {
  return (
    <ProfileRequired>
      <Theory />
    </ProfileRequired>
  );
}

function Theory() {
  const { data, error, busyId, attempt } = useDay();
  if (!data)
    return (
      <main className="mx-auto w-full max-w-4xl px-6 py-10">
        <p>{error || "Подбираем тему дня…"}</p>
      </main>
    );
  const lessonId = data.day.plan.theoryLessonId;
  const lesson = lessonId ? (data.content[lessonId] as TheoryLesson) : null;
  if (!lesson)
    return (
      <main className="mx-auto w-full max-w-4xl px-6 py-10">
        <p>Для этого уровня пока нет урока.</p>
      </main>
    );
  const completed = data.day.plan.theoryExerciseIds.filter(
    (id) => data.attempts[id],
  ).length;
  const sharedIds = new Set(
    data.day.plan.theoryExerciseIds.filter((id) =>
      data.day.plan.grammarIds.includes(id),
    ),
  );
  const sharedCompleted = [...sharedIds].filter(
    (id) => data.attempts[id],
  ).length;
  return (
    <main className="mx-auto w-full max-w-5xl space-y-7 px-6 py-10">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            <Badge>{lesson.level}</Badge>
            <Badge variant="secondary">
              {data.day.plan.theoryIsReview ? "Повторение" : "Новая тема"}
            </Badge>
          </div>
          <CardTitle className="text-3xl">{lesson.title}</CardTitle>
          <CardDescription>{lesson.topics.join(" · ")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="prose-content leading-8"
            dangerouslySetInnerHTML={{ __html: lesson.body }}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Шпаргалка и примеры</CardTitle>
          <CardDescription>
            Раскройте нужный пункт, чтобы повторить правило и увидеть пример.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {data.day.plan.theoryExerciseIds.map((id) => {
            const exercise = data.content[id] as GrammarExercise;
            return (
              <details key={id} className="rounded-lg border p-4">
                <summary className="cursor-pointer font-medium">
                  {exercise.topic}: правило и пример
                </summary>
                <div
                  className="mt-3 text-sm leading-7"
                  dangerouslySetInnerHTML={{ __html: exercise.explain }}
                />
                <p className="mt-3 rounded-md bg-muted p-3 text-sm">
                  <span className="text-muted-foreground">Пример:</span>{" "}
                  {exercise.prompt.replace("___", exercise.answer)}
                </p>
              </details>
            );
          })}
        </CardContent>
      </Card>
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Закрепление</h2>
          <p className="text-muted-foreground">
            Выполнено {completed} из {data.day.plan.theoryExerciseIds.length}.
            Результат общего задания сохраняется один раз и виден на обеих
            страницах.
          </p>
        </div>
        {sharedCompleted > 0 && (
          <Alert>
            <AlertTitle>
              {sharedCompleted}{" "}
              {sharedCompleted === 1
                ? "задание уже выполнено"
                : "задания уже выполнены"}
            </AlertTitle>
            <AlertDescription>
              Они входят и в практику, и в закрепление этой темы. Повторно
              отвечать не нужно; такие карточки помечены ниже.
            </AlertDescription>
          </Alert>
        )}
        <div className="grid gap-4 lg:grid-cols-2">
          {data.day.plan.theoryExerciseIds.map((id) => (
            <GrammarExerciseCard
              key={id}
              exercise={data.content[id] as GrammarExercise}
              options={data.day.plan.grammarOptions[id]}
              attempt={data.attempts[id]}
              busy={busyId === id}
              sharedWithPractice={sharedIds.has(id)}
              onSubmit={(answer) => attempt(id, answer)}
            />
          ))}
        </div>
      </section>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </main>
  );
}

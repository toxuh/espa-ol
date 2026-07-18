"use client";

import type { GrammarExercise, TheoryLesson } from "@/content/types";
import { GrammarExerciseCard } from "@/components/day/grammar-exercise";
import { ProfileRequired } from "@/components/profile-required";
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
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Закрепление</h2>
          <p className="text-muted-foreground">
            Выполнено {completed} из {data.day.plan.theoryExerciseIds.length}.
            Если упражнение уже было в практике, результат общий.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {data.day.plan.theoryExerciseIds.map((id) => (
            <GrammarExerciseCard
              key={id}
              exercise={data.content[id] as GrammarExercise}
              options={data.day.plan.grammarOptions[id]}
              attempt={data.attempts[id]}
              busy={busyId === id}
              onSubmit={(answer) => attempt(id, answer)}
            />
          ))}
        </div>
      </section>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </main>
  );
}

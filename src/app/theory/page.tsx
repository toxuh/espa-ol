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
      <main className="page-shell max-w-4xl">
        <p>{error || "Подбираем тему дня…"}</p>
      </main>
    );
  const lessonId = data.day.plan.theoryLessonId;
  const lesson = lessonId ? (data.content[lessonId] as TheoryLesson) : null;
  if (!lesson)
    return (
      <main className="page-shell max-w-4xl">
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
    <main className="page-shell max-w-5xl">
      <section>
        <p className="eyebrow">Теория дня</p>
        <h1 className="page-heading mt-1">Разберём одну тему глубже</h1>
        <p className="page-lede mt-3">
          Короткое объяснение, примеры и закрепление — без лишней воды.
        </p>
      </section>
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            <Badge>{lesson.level}</Badge>
            <Badge variant="secondary">
              {data.day.plan.theoryIsReview ? "Повторение" : "Новая тема"}
            </Badge>
          </div>
          <CardTitle className="text-2xl tracking-tight sm:text-3xl">
            {lesson.title}
          </CardTitle>
          <CardDescription>{lesson.topics.join(" · ")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {lesson.objectives?.length ? (
            <section className="rounded-xl bg-muted p-4 sm:p-5">
              <h2 className="font-semibold">После урока вы сможете</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {lesson.sections?.length ? (
            <StructuredTheory lesson={lesson} />
          ) : (
            <div
              className="prose-content leading-8"
              dangerouslySetInnerHTML={{ __html: lesson.body }}
            />
          )}
          {lesson.examples?.length ? (
            <section>
              <h2 className="text-xl font-semibold">Примеры</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {lesson.examples.map((example) => (
                  <div
                    key={example.es}
                    className="rounded-xl border bg-background/60 p-4"
                  >
                    <p className="font-medium" lang="es">
                      {example.es}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {example.ru}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          {lesson.commonMistakes?.length ? (
            <section className="rounded-xl border border-amber-300 bg-amber-50 p-4 dark:bg-amber-950/20">
              <h2 className="font-semibold">Типичные ошибки</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {lesson.commonMistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {lesson.summary?.length ? (
            <section className="rounded-xl bg-muted p-4 sm:p-5">
              <h2 className="font-semibold">Короткая шпаргалка</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {lesson.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
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
              <details
                key={id}
                className="rounded-xl border bg-background/50 p-4 open:border-primary/30"
              >
                <summary className="cursor-pointer font-medium">
                  {exercise.topic}: правило и пример
                </summary>
                <div
                  className="mt-3 text-sm leading-7"
                  dangerouslySetInnerHTML={{ __html: exercise.explain }}
                />
                <p className="mt-3 rounded-md bg-muted p-3 text-sm">
                  <span className="text-muted-foreground">Пример:</span>{" "}
                  {exercise.solvedExample ??
                    exercise.prompt.replace("___", exercise.answer)}
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

function StructuredTheory({ lesson }: { lesson: TheoryLesson }) {
  return (
    <div className="space-y-7">
      {lesson.sections?.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-8">
              {paragraph}
            </p>
          ))}
          {section.table && (
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full min-w-lg text-left text-sm">
                <thead className="bg-muted">
                  <tr>
                    {section.table.headers.map((header) => (
                      <th key={header} className="px-3 py-2 font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.join("|")} className="border-t">
                      {row.map((cell, index) => (
                        <td key={`${cell}-${index}`} className="px-3 py-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

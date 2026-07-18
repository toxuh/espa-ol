"use client";

import Link from "next/link";
import { Check, ExternalLink, Trophy } from "lucide-react";
import { useState } from "react";

import type {
  ConjugationCard,
  GrammarExercise,
  ListeningContent,
  ReadingContent,
  TranslationContent,
  VocabularyCard,
} from "@/content/types";
import { ConjugationExercise } from "@/components/day/conjugation-card";
import { GrammarExerciseCard } from "@/components/day/grammar-exercise";
import { VocabularyExercise } from "@/components/day/vocabulary-card";
import { ProfileRequired } from "@/components/profile-required";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useDay } from "@/hooks/use-day";
import type { DayPayload } from "@/types/day";

export default function PracticePage() {
  return (
    <ProfileRequired>
      <Practice />
    </ProfileRequired>
  );
}

function Practice() {
  const { data, error, busyId, attempt, activity } = useDay();
  const [translation, setTranslation] = useState("");
  if (!data)
    return (
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <p>{error || "Генерируем задания на сегодня…"}</p>
      </main>
    );
  const { plan } = data.day;
  const practiceIds = [
    ...plan.grammarIds,
    ...plan.vocabIds,
    ...plan.conjugationIds,
  ];
  const exerciseDone = practiceIds.filter((id) => data.attempts[id]).length;
  const activityDone =
    Number(data.day.progress.readingDone) +
    plan.listeningIds.filter((id) => data.day.progress.listeningDone[id])
      .length +
    Number(Boolean(data.day.progress.translateFrom.rating)) +
    Number(Boolean(data.day.progress.translateTo.rating));
  const total = practiceIds.length + plan.listeningIds.length + 3;
  const done = exerciseDone + activityDone;

  return (
    <main className="mx-auto w-full max-w-6xl space-y-7 px-4 py-8 sm:px-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge variant="secondary">
              {new Date(data.day.localDate).toLocaleDateString("ru-RU")}
            </Badge>
            <h1 className="mt-2 text-3xl font-semibold">Практика дня</h1>
          </div>
          <span className="text-sm text-muted-foreground">
            {done} из {total} блоков
          </span>
        </div>
        <Progress value={(done / total) * 100} />
        {data.day.completedAt && (
          <Alert>
            <Trophy />
            <AlertTitle>День полностью завершён</AlertTitle>
            <AlertDescription>
              Результат: {data.day.score}% · серия обновлена. Можно посмотреть{" "}
              <Link className="underline" href="/progress">
                прогресс
              </Link>
              .
            </AlertDescription>
          </Alert>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </section>

      <Tabs defaultValue="grammar">
        <TabsList className="h-auto flex-wrap">
          <TabsTrigger value="grammar">
            Грамматика ({plan.grammarIds.length})
          </TabsTrigger>
          <TabsTrigger value="vocab">
            Слова ({plan.vocabIds.length})
          </TabsTrigger>
          <TabsTrigger value="conjugation">
            Спряжения ({plan.conjugationIds.length})
          </TabsTrigger>
          <TabsTrigger value="skills">Чтение и переводы</TabsTrigger>
          <TabsTrigger value="analysis">Анализ</TabsTrigger>
        </TabsList>
        <TabsContent value="grammar" className="mt-5 space-y-7">
          <ExerciseGrid
            title="Выберите ответ"
            ids={plan.mcqIds}
            render={(id) => (
              <GrammarExerciseCard
                key={id}
                exercise={data.content[id] as GrammarExercise}
                options={plan.grammarOptions[id]}
                attempt={data.attempts[id]}
                busy={busyId === id}
                onSubmit={(answer) => attempt(id, answer)}
              />
            )}
          />
          <ExerciseGrid
            title="Впишите форму"
            ids={plan.fillIds}
            render={(id) => (
              <GrammarExerciseCard
                key={id}
                exercise={data.content[id] as GrammarExercise}
                attempt={data.attempts[id]}
                busy={busyId === id}
                onSubmit={(answer) => attempt(id, answer)}
              />
            )}
          />
        </TabsContent>
        <TabsContent value="vocab" className="mt-5">
          <ExerciseGrid
            title="Переведите слово"
            ids={plan.vocabIds}
            render={(id) => (
              <VocabularyExercise
                key={id}
                card={data.content[id] as VocabularyCard}
                attempt={data.attempts[id]}
                busy={busyId === id}
                onSubmit={(answer) => attempt(id, answer)}
              />
            )}
          />
        </TabsContent>
        <TabsContent value="conjugation" className="mt-5">
          <div className="grid gap-4 lg:grid-cols-2">
            {plan.conjugationIds.map((id) => (
              <ConjugationExercise
                key={id}
                card={data.content[id] as ConjugationCard}
                attempt={data.attempts[id]}
                busy={busyId === id}
                onSubmit={(answer) => attempt(id, answer)}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="skills" className="mt-5 space-y-5">
          <ReadingCard
            content={data.content[plan.readingId] as ReadingContent}
            done={data.day.progress.readingDone}
            busy={busyId === "reading-complete"}
            onDone={() => activity("reading-complete")}
          />
          <Card>
            <CardHeader>
              <CardTitle>Аудирование</CardTitle>
              <CardDescription>
                Откройте 1–2 материала и отметьте прослушанные.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {plan.listeningIds.map((id) => {
                const item = data.content[id] as ListeningContent;
                const isDone = data.day.progress.listeningDone[id];
                return (
                  <div
                    key={id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.channel}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          <ExternalLink />
                          Открыть
                        </a>
                      </Button>
                      <Button
                        variant={isDone ? "default" : "secondary"}
                        onClick={() =>
                          activity("listening-set", {
                            sourceId: id,
                            done: !isDone,
                          })
                        }
                      >
                        {isDone && <Check />}
                        {isDone ? "Прослушано" : "Отметить"}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
          <TranslateFrom
            card={data.content[plan.translateFromId] as TranslationContent}
            progress={data.day.progress.translateFrom}
            onAction={activity}
          />
          <Card>
            <CardHeader>
              <CardTitle>Перевод RU → ES</CardTitle>
              <CardDescription>
                {(data.content[plan.translateToId] as TranslationContent).title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="leading-7">
                {(data.content[plan.translateToId] as TranslationContent).text}
              </p>
              <Textarea
                value={translation}
                onChange={(event) => setTranslation(event.target.value)}
                disabled={Boolean(data.day.progress.translateTo.rating)}
                placeholder="Ваш перевод на испанский"
                rows={6}
              />
              <Button
                disabled={
                  !translation.trim() ||
                  Boolean(data.day.progress.translateTo.rating)
                }
                onClick={() =>
                  activity("translate-to-check", { text: translation })
                }
              >
                Проверить совпадение
              </Button>
              {data.day.progress.translateTo.rating && (
                <div className="rounded-lg bg-muted p-4">
                  <p className="font-medium">
                    Совпадение значимых слов:{" "}
                    {data.day.progress.translateTo.percent}% ·{" "}
                    {data.day.progress.translateTo.rating}
                  </p>
                  <p className="mt-2 text-sm">
                    <b>Эталон:</b>{" "}
                    {
                      (data.content[plan.translateToId] as TranslationContent)
                        .reference
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analysis" className="mt-5">
          <DayAnalysis data={data} />
        </TabsContent>
      </Tabs>
    </main>
  );
}

function DayAnalysis({ data }: { data: DayPayload }) {
  const grammarIds = new Set([
    ...data.day.plan.grammarIds,
    ...data.day.plan.theoryExerciseIds,
  ]);
  const topicStats = new Map<string, { correct: number; total: number }>();
  for (const id of grammarIds) {
    const current = data.attempts[id];
    if (!current) continue;
    const exercise = data.content[id] as GrammarExercise;
    const value = topicStats.get(exercise.topic) ?? { correct: 0, total: 0 };
    value.total += 1;
    if (current.correctFirstTry) value.correct += 1;
    topicStats.set(exercise.topic, value);
  }
  const topics = [...topicStats]
    .map(([topic, value]) => ({
      topic,
      ...value,
      accuracy: Math.round((value.correct / value.total) * 100),
    }))
    .sort((left, right) => left.accuracy - right.accuracy);
  const category = (ids: string[]) => {
    const attempts = ids.map((id) => data.attempts[id]).filter(Boolean);
    return {
      done: attempts.length,
      correct: attempts.filter((item) => item.correctFirstTry).length,
      total: ids.length,
    };
  };
  const grammar = category([...grammarIds]);
  const vocab = category(data.day.plan.vocabIds);
  const conjugation = category(data.day.plan.conjugationIds);
  const attempted = grammar.done + vocab.done + conjugation.done;
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-semibold">Промежуточный анализ дня</h2>
        <p className="text-muted-foreground">
          Считаются только уже отправленные первые попытки. Выполнено{" "}
          {attempted}
          упражнений.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Грамматика", grammar],
          ["Словарь", vocab],
          ["Спряжения", conjugation],
        ].map(([label, raw]) => {
          const value = raw as typeof grammar;
          const percent = value.done
            ? Math.round((value.correct / value.done) * 100)
            : 0;
          return (
            <Card key={label as string}>
              <CardHeader>
                <CardTitle>{label as string}</CardTitle>
                <CardDescription>
                  {value.done} из {value.total}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-semibold">
                  {value.done ? `${percent}%` : "—"}
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Темы грамматики сегодня</CardTitle>
          <CardDescription>
            Красная зона ниже 45%, рабочая 45–74%, сильная от 75%.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {topics.length === 0 ? (
            <p className="text-muted-foreground">
              Ответьте хотя бы на одно грамматическое задание.
            </p>
          ) : (
            <div className="space-y-3">
              {topics.map((topic) => (
                <div
                  key={topic.topic}
                  className="grid items-center gap-2 sm:grid-cols-[220px_1fr_60px]"
                >
                  <span className="text-sm font-medium">{topic.topic}</span>
                  <Progress value={topic.accuracy} />
                  <Badge
                    variant={topic.accuracy < 45 ? "destructive" : "secondary"}
                  >
                    {topic.accuracy}%
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ExerciseGrid({
  title,
  ids,
  render,
}: {
  title: string;
  ids: string[];
  render: (id: string) => React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid gap-4 lg:grid-cols-2">{ids.map(render)}</div>
    </section>
  );
}

function ReadingCard({
  content,
  done,
  busy,
  onDone,
}: {
  content: ReadingContent;
  done: boolean;
  busy: boolean;
  onDone: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>Чтение: {content.title}</CardTitle>
          {done && <Badge>готово</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="whitespace-pre-line leading-8">{content.text}</p>
        <Button disabled={done || busy} onClick={onDone}>
          {done && <Check />}
          {done ? "Прочитано" : "Я прочитал(а)"}
        </Button>
      </CardContent>
    </Card>
  );
}

function TranslateFrom({
  card,
  progress,
  onAction,
}: {
  card: TranslationContent;
  progress: { revealed: boolean; rating: "easy" | "mid" | "hard" | null };
  onAction: (action: string, values?: Record<string, unknown>) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Перевод ES → RU</CardTitle>
        <CardDescription>{card.title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="leading-7">{card.text}</p>
        {!progress.revealed ? (
          <Button onClick={() => onAction("translate-from-reveal")}>
            Показать эталон
          </Button>
        ) : (
          <>
            <div className="rounded-lg bg-muted p-4">
              <b>Эталон:</b> {card.reference}
            </div>
            <div className="flex flex-wrap gap-2">
              {(["easy", "mid", "hard"] as const).map((rating) => (
                <Button
                  key={rating}
                  variant={progress.rating === rating ? "default" : "outline"}
                  disabled={Boolean(progress.rating)}
                  onClick={() => onAction("translate-from-rate", { rating })}
                >
                  {rating === "easy"
                    ? "Легко"
                    : rating === "mid"
                      ? "Средне"
                      : "Сложно"}
                </Button>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Lightbulb, XCircle } from "lucide-react";

import type { GrammarExercise } from "@/content/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { normalizeAnswer } from "@/domain/answer-normalization";
import type { DayAttempt } from "@/types/day";

export function GrammarExerciseCard({
  exercise,
  options,
  attempt,
  busy,
  sharedWithPractice = false,
  onSubmit,
}: {
  exercise: GrammarExercise;
  options?: string[];
  attempt?: DayAttempt;
  busy: boolean;
  sharedWithPractice?: boolean;
  onSubmit: (answer: string) => void;
}) {
  const [answer, setAnswer] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const givenAnswer = attempt ? String(attempt.answer ?? "") : answer;
  function submit(event: FormEvent) {
    event.preventDefault();
    onSubmit(answer);
  }
  return (
    <Card
      className={
        attempt
          ? attempt.result.correct
            ? "border-emerald-300"
            : "border-amber-300"
          : ""
      }
    >
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{exercise.level}</Badge>
          {exercise.type === "mcq" && (
            <Badge variant="outline">{exercise.topic}</Badge>
          )}
          {sharedWithPractice && (
            <Badge variant="outline">Общее с практикой</Badge>
          )}
        </div>
        <CardTitle className="text-lg">{exercise.prompt}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {exercise.type === "mcq" && (
          <div className="grid gap-2 sm:grid-cols-2">
            {(options ?? exercise.options ?? []).map((option) => (
              <Button
                key={option}
                variant="outline"
                className={
                  attempt
                    ? normalizeAnswer(option) ===
                      normalizeAnswer(String(attempt.result.expected ?? ""))
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200"
                      : normalizeAnswer(option) === normalizeAnswer(givenAnswer)
                        ? "border-destructive bg-destructive/10 text-destructive"
                        : "opacity-60"
                    : undefined
                }
                disabled={busy || Boolean(attempt)}
                onClick={() => onSubmit(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )}
        {exercise.type === "fill" && (
          <form className="flex gap-2" onSubmit={submit}>
            <Input
              value={givenAnswer}
              onChange={(event) => setAnswer(event.target.value)}
              disabled={Boolean(attempt)}
              placeholder="Введите ответ"
            />
            {!attempt && <Button disabled={busy}>Проверить</Button>}
          </form>
        )}
        {!attempt && exercise.type === "fill" && (
          <div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="px-0 text-muted-foreground"
              onClick={() => setHintVisible((visible) => !visible)}
            >
              <Lightbulb />
              {hintVisible ? "Скрыть подсказку" : "Показать подсказку"}
            </Button>
            {hintVisible && (
              <p className="mt-1 rounded-md bg-muted px-3 py-2 text-sm">
                {exercise.hint ?? (
                  <>
                    Используйте правило или время: <b>{exercise.topic}</b>.
                  </>
                )}
              </p>
            )}
          </div>
        )}
        {attempt && <Result attempt={attempt} exercise={exercise} />}
      </CardContent>
    </Card>
  );
}

function Result({
  attempt,
  exercise,
}: {
  attempt: DayAttempt;
  exercise: GrammarExercise;
}) {
  const correct = Boolean(attempt.result.correct);
  return (
    <Alert variant={correct ? "default" : "destructive"}>
      {correct ? <CheckCircle2 /> : <XCircle />}
      <AlertTitle>
        {correct
          ? "Верно"
          : `Правильный ответ: ${String(attempt.result.expected ?? "")}`}
      </AlertTitle>
      <AlertDescription>
        <p>
          Ваш ответ: <b>{String(attempt.answer ?? "") || "(пусто)"}</b>
        </p>
        {attempt.result.explain && (
          <span dangerouslySetInnerHTML={{ __html: attempt.result.explain }} />
        )}
        {exercise.examples?.length ? (
          <div className="mt-3 space-y-2 border-t pt-3">
            <p className="font-medium">Дополнительные примеры</p>
            {exercise.examples.map((example) => (
              <p key={example.es}>
                <span lang="es">{example.es}</span> — {example.ru}
              </p>
            ))}
          </div>
        ) : null}
        {exercise.commonMistakes?.length ? (
          <div className="mt-3 border-t pt-3">
            <p className="font-medium">Частая ошибка</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {exercise.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </AlertDescription>
    </Alert>
  );
}

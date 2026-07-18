"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

import type { GrammarExercise } from "@/content/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { DayAttempt } from "@/types/day";

export function GrammarExerciseCard({
  exercise,
  options,
  attempt,
  busy,
  onSubmit,
}: {
  exercise: GrammarExercise;
  options?: string[];
  attempt?: DayAttempt;
  busy: boolean;
  onSubmit: (answer: string) => void;
}) {
  const [answer, setAnswer] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    if (answer.trim()) onSubmit(answer);
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
          <Badge variant="outline">{exercise.topic}</Badge>
        </div>
        <CardTitle className="text-lg">{exercise.prompt}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {!attempt && exercise.type === "mcq" && (
          <div className="grid gap-2 sm:grid-cols-2">
            {(options ?? exercise.options ?? []).map((option) => (
              <Button
                key={option}
                variant="outline"
                disabled={busy}
                onClick={() => onSubmit(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )}
        {!attempt && exercise.type === "fill" && (
          <form className="flex gap-2" onSubmit={submit}>
            <Input
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Введите ответ"
            />
            <Button disabled={busy || !answer.trim()}>Проверить</Button>
          </form>
        )}
        {attempt && <Result attempt={attempt} />}
      </CardContent>
    </Card>
  );
}

function Result({ attempt }: { attempt: DayAttempt }) {
  const correct = Boolean(attempt.result.correct);
  return (
    <Alert variant={correct ? "default" : "destructive"}>
      {correct ? <CheckCircle2 /> : <XCircle />}
      <AlertTitle>
        {correct
          ? "Верно"
          : `Правильный ответ: ${String(attempt.result.expected ?? "")}`}
      </AlertTitle>
      {attempt.result.explain && (
        <AlertDescription>
          <span dangerouslySetInnerHTML={{ __html: attempt.result.explain }} />
        </AlertDescription>
      )}
    </Alert>
  );
}

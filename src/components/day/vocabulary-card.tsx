"use client";

import { FormEvent, useState } from "react";

import type { VocabularyCard } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { DayAttempt } from "@/types/day";

export function VocabularyExercise({
  card,
  attempt,
  busy,
  onSubmit,
}: {
  card: VocabularyCard;
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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{card.word}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {attempt ? (
          <div
            className={
              attempt.result.correct ? "text-emerald-700" : "text-amber-700"
            }
          >
            <p className="font-medium">
              {attempt.result.correct
                ? "Верно"
                : `Ответ: ${attempt.result.expected}`}
            </p>
            <p className="text-sm text-muted-foreground">{card.context}</p>
          </div>
        ) : (
          <form className="flex gap-2" onSubmit={submit}>
            <Input
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Перевод на русский"
            />
            <Button disabled={busy}>OK</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

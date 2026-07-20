"use client";

import { FormEvent, useState } from "react";

import type { VocabularyCard } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { DayAttempt } from "@/types/day";

function Context({ text, word }: { text: string; word: string }) {
  const index = text
    .toLocaleLowerCase("es")
    .indexOf(word.toLocaleLowerCase("es"));
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded bg-amber-200 px-1 text-foreground dark:bg-amber-800">
        {text.slice(index, index + word.length)}
      </mark>
      {text.slice(index + word.length)}
    </>
  );
}

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
    onSubmit(answer);
  }
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Слово: {card.word}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-lg bg-muted p-3 leading-7">
          <Context text={card.context} word={card.contextTarget} />
        </div>
        <p className="text-sm text-muted-foreground">
          Переведите выделенное слово на русский.
        </p>
        {attempt ? (
          <div
            className={
              attempt.result.correct ? "text-emerald-700" : "text-amber-700"
            }
          >
            <p className="font-medium">
              {attempt.result.correct
                ? `Верно: ${String(attempt.answer ?? "")}`
                : `Ваш ответ: ${String(attempt.answer ?? "") || "(пусто)"}. Правильный перевод: ${attempt.result.expected}`}
            </p>
          </div>
        ) : (
          <form className="flex gap-2" onSubmit={submit}>
            <Input
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Перевод на русский"
            />
            <Button disabled={busy}>Проверить</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

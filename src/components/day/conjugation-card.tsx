"use client";

import { FormEvent, useState } from "react";

import type { ConjugationCard } from "@/content/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { DayAttempt } from "@/types/day";

const persons = [
  "yo",
  "tú",
  "él / ella / usted",
  "nosotros",
  "vosotros",
  "ellos / ellas / ustedes",
];

export function ConjugationExercise({
  card,
  attempt,
  busy,
  onSubmit,
}: {
  card: ConjugationCard;
  attempt?: DayAttempt;
  busy: boolean;
  onSubmit: (answer: string[]) => void;
}) {
  const [answers, setAnswers] = useState(() => Array(6).fill("") as string[]);
  function submit(event: FormEvent) {
    event.preventDefault();
    onSubmit(answers);
  }
  const submitted = Array.isArray(attempt?.answer)
    ? attempt.answer.map(String)
    : answers;
  const correctCount = attempt?.result.correctMask?.filter(Boolean).length ?? 0;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {card.verb} — {card.verbMeaning}
        </CardTitle>
        <CardDescription>{card.tenseLabel}</CardDescription>
      </CardHeader>
      <CardContent>
        {attempt ? (
          <div className="space-y-3">
            <p
              className={
                attempt.result.correct
                  ? "font-medium text-emerald-700"
                  : "font-medium text-destructive"
              }
            >
              {attempt.result.correct
                ? "Все 6 форм верны."
                : `Верно ${correctCount}/6. Сравните ошибки с правильными формами.`}
            </p>
            {persons.map((person, index) => (
              <div
                key={person}
                className="grid items-center gap-2 sm:grid-cols-[170px_1fr]"
              >
                <span className="text-sm text-muted-foreground">{person}</span>
                <div>
                  <p
                    className={
                      attempt.result.correctMask?.[index]
                        ? "text-emerald-700"
                        : "text-destructive"
                    }
                  >
                    {submitted[index] || "(пусто)"}
                  </p>
                  {!attempt.result.correctMask?.[index] && (
                    <p className="text-sm text-muted-foreground">
                      Правильно:{" "}
                      {String(
                        (attempt.result.expected as string[] | undefined)?.[
                          index
                        ] ?? "",
                      )}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <form className="grid gap-2" onSubmit={submit}>
            {persons.map((person, index) => (
              <label
                key={person}
                className="grid items-center gap-2 sm:grid-cols-[180px_1fr]"
              >
                <span className="text-sm text-muted-foreground">{person}</span>
                <Input
                  value={answers[index]}
                  onChange={(event) =>
                    setAnswers((current) =>
                      current.map((value, itemIndex) =>
                        itemIndex === index ? event.target.value : value,
                      ),
                    )
                  }
                />
              </label>
            ))}
            <Button className="mt-2" disabled={busy}>
              Проверить все формы
            </Button>
          </form>
        )}
        <div className="mt-5 rounded-lg bg-muted p-3 text-sm leading-6">
          <p className="italic">{card.example.es}</p>
          <p className="text-muted-foreground">{card.example.ru}</p>
        </div>
      </CardContent>
    </Card>
  );
}

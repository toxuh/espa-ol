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
    if (answers.every((item) => item.trim())) onSubmit(answers);
  }
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
          <div className="space-y-2">
            {persons.map((person, index) => (
              <p
                key={person}
                className={
                  attempt.result.correctMask?.[index]
                    ? "text-emerald-700"
                    : "text-destructive"
                }
              >
                <span className="inline-block w-44 text-muted-foreground">
                  {person}
                </span>
                {String(
                  (attempt.result.expected as string[] | undefined)?.[index] ??
                    "",
                )}
              </p>
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
            <Button
              className="mt-2"
              disabled={busy || answers.some((item) => !item.trim())}
            >
              Проверить все формы
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

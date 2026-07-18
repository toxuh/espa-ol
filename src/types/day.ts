import type { CefrLevel } from "@/content/types";
import type { DayPlanSnapshot, DayProgress } from "@/server/daily-plan";

export type DayAttempt = {
  id: string;
  contentSourceId: string;
  answer: unknown;
  result: {
    correct?: boolean;
    expected?: string | string[];
    explain?: string;
    context?: string;
    correctMask?: boolean[];
  };
  correctFirstTry: boolean;
};

export type DayPayload = {
  profile: { id: string; name: string; level: CefrLevel; streak: number };
  day: {
    id: string;
    localDate: string;
    completedAt: string | null;
    score: number | null;
    rating: string | null;
    plan: DayPlanSnapshot;
    progress: DayProgress;
  };
  content: Record<string, unknown>;
  attempts: Record<string, DayAttempt>;
};

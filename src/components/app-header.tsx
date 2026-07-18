"use client";

import Link from "next/link";
import {
  BookOpen,
  ChartNoAxesColumn,
  Flame,
  History,
  Home,
  LogOut,
  NotebookPen,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/components/profile-provider";

const links = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/practice", label: "Практика", icon: NotebookPen },
  { href: "/theory", label: "Теория", icon: BookOpen },
  { href: "/history", label: "История", icon: History },
  { href: "/progress", label: "Прогресс", icon: ChartNoAxesColumn },
];

export function AppHeader() {
  const { profile, select } = useProfile();
  return (
    <header className="border-b bg-background/95">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-3">
        <Link href="/" className="mr-3 font-semibold">
          🇪🇸 Español Diario
        </Link>
        <nav className="flex flex-1 flex-wrap gap-1">
          {profile &&
            links.map(({ href, label, icon: Icon }) => (
              <Button key={href} variant="ghost" size="sm" asChild>
                <Link href={href}>
                  <Icon />
                  {label}
                </Link>
              </Button>
            ))}
        </nav>
        {profile && (
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="secondary">
              {profile.name} · {profile.level ?? "без уровня"}
            </Badge>
            <span className="inline-flex items-center gap-1">
              <Flame className="size-4" />
              {profile.streak}
            </span>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Сменить профиль"
              onClick={() => select(null)}
            >
              <LogOut />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

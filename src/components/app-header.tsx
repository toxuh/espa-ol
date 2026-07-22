"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ChartNoAxesColumn,
  Flame,
  History,
  Home,
  NotebookPen,
} from "lucide-react";

import { ProfileMenu } from "@/components/profile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/components/profile-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/practice", label: "Практика", icon: NotebookPen },
  { href: "/theory", label: "Теория", icon: BookOpen },
  { href: "/history", label: "История", icon: History },
  { href: "/progress", label: "Прогресс", icon: ChartNoAxesColumn },
];

export function AppHeader() {
  const { profile } = useProfile();
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-lg text-primary-foreground shadow-sm transition-transform group-hover:-rotate-3">
              Ñ
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-heading text-sm font-semibold tracking-tight">
                Español Diario
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                Un poco cada día
              </span>
            </span>
          </Link>
          {profile && (
            <nav className="mx-auto hidden items-center rounded-full border border-border/70 bg-card/70 p-1 shadow-sm md:flex">
              {links.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <Button
                    key={href}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "rounded-full px-3 text-muted-foreground",
                      active &&
                        "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
                    )}
                    asChild
                  >
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon />
                      {label}
                    </Link>
                  </Button>
                );
              })}
            </nav>
          )}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {profile && (
              <>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                  <Flame className="size-3.5 text-primary" />
                  {profile.streak}
                </span>
                <ProfileMenu />
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>
      {profile && (
        <nav
          aria-label="Основная навигация"
          className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-2xl border border-border/70 bg-background/90 p-1.5 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[0.65rem] font-medium text-muted-foreground transition-colors",
                  active && "bg-primary text-primary-foreground",
                )}
              >
                <Icon className="size-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}

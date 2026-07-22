"use client";

import { useEffect, useRef, useState } from "react";
import { LogOut, UserRound } from "lucide-react";

import { useProfile } from "@/components/profile-provider";
import { Button } from "@/components/ui/button";

export function ProfileMenu() {
  const { profile, select } = useProfile();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!profile) return null;

  return (
    <div className="relative" ref={container}>
      <Button
        variant="ghost"
        className="h-10 rounded-full px-2 sm:px-3"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Профиль ${profile.name}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="grid size-7 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <UserRound className="size-3.5" />
        </span>
        <span className="max-w-24 truncate text-xs font-semibold sm:max-w-none">
          {profile.name}
        </span>
      </Button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-border/70 bg-popover p-2 shadow-xl"
        >
          <p className="px-3 py-2 text-xs text-muted-foreground">
            {profile.level ?? "уровень не выбран"} · серия {profile.streak}
          </p>
          <Button
            role="menuitem"
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              setOpen(false);
              select(null);
            }}
          >
            <LogOut />
            Сменить профиль
          </Button>
        </div>
      )}
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { CefrLevel } from "@/content/types";
import { profileFetch } from "@/lib/client-api";

export interface FamilyProfile {
  id: string;
  name: string;
  level: CefrLevel | null;
  placementDone: boolean;
  streak: number;
}

type ProfileContextValue = {
  ready: boolean;
  profile: FamilyProfile | null;
  profiles: FamilyProfile[];
  refresh: () => Promise<void>;
  select: (profile: FamilyProfile | null) => void;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [profiles, setProfiles] = useState<FamilyProfile[]>([]);
  const [profile, setProfile] = useState<FamilyProfile | null>(null);

  const refresh = useCallback(async () => {
    const data = await profileFetch<{ profiles: FamilyProfile[] }>(
      "/api/profiles",
    );
    setProfiles(data.profiles);
    const selectedId = window.localStorage.getItem("espanolDiario.profileId");
    const selected =
      data.profiles.find((item) => item.id === selectedId) ?? null;
    if (!selected && selectedId)
      window.localStorage.removeItem("espanolDiario.profileId");
    setProfile(selected);
    setReady(true);
  }, []);

  useEffect(() => {
    let cancelled = false;
    profileFetch<{ profiles: FamilyProfile[] }>("/api/profiles")
      .then((data) => {
        if (cancelled) return;
        setProfiles(data.profiles);
        const selectedId = window.localStorage.getItem(
          "espanolDiario.profileId",
        );
        const selected =
          data.profiles.find((item) => item.id === selectedId) ?? null;
        if (!selected && selectedId)
          window.localStorage.removeItem("espanolDiario.profileId");
        setProfile(selected);
        setReady(true);
      })
      .catch(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const select = useCallback((value: FamilyProfile | null) => {
    if (value) window.localStorage.setItem("espanolDiario.profileId", value.id);
    else window.localStorage.removeItem("espanolDiario.profileId");
    setProfile(value);
  }, []);

  const value = useMemo(
    () => ({ ready, profile, profiles, refresh, select }),
    [ready, profile, profiles, refresh, select],
  );
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfile() {
  const value = useContext(ProfileContext);
  if (!value) throw new Error("useProfile must be used inside ProfileProvider");
  return value;
}

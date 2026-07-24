"use client";

import { useCallback, useEffect, useState } from "react";
import { syncOverallProgressCookie } from "@/lib/progress-sync";

type StepState = "done" | "skipped";
type PathProgress = Record<string, StepState>;

export const progressStorageKey = (pathSlug: string) => `telegraph-guide-progress:${pathSlug}`;
const storageKey = progressStorageKey;

export function useGuideProgress(pathSlug: string) {
  const [progress, setProgress] = useState<PathProgress>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let initial: PathProgress = {};
    try {
      const raw = localStorage.getItem(storageKey(pathSlug));
      initial = raw ? JSON.parse(raw) : {};
    } catch {
      initial = {};
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, not derivable at render time on the server
    setProgress(initial);
    setHydrated(true);
  }, [pathSlug]);

  const setStep = useCallback(
    (stepId: string, state: StepState) => {
      setProgress((prev) => {
        const next = { ...prev, [stepId]: state };
        localStorage.setItem(storageKey(pathSlug), JSON.stringify(next));
        syncOverallProgressCookie();
        return next;
      });
    },
    [pathSlug],
  );

  const reset = useCallback(() => {
    localStorage.removeItem(storageKey(pathSlug));
    syncOverallProgressCookie();
    setProgress({});
  }, [pathSlug]);

  return { progress, setStep, reset, hydrated };
}

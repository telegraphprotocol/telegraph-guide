"use client";

import { useCallback, useEffect, useState } from "react";

type StepState = "done" | "skipped";
type PathProgress = Record<string, StepState>;

const storageKey = (pathSlug: string) => `telegraph-guide-progress:${pathSlug}`;

export function useGuideProgress(pathSlug: string) {
  const [progress, setProgress] = useState<PathProgress>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(pathSlug));
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, not derivable at render time on the server
      setProgress(raw ? JSON.parse(raw) : {});
    } catch {
      setProgress({});
    }
    setHydrated(true);
  }, [pathSlug]);

  const setStep = useCallback(
    (stepId: string, state: StepState) => {
      setProgress((prev) => {
        const next = { ...prev, [stepId]: state };
        localStorage.setItem(storageKey(pathSlug), JSON.stringify(next));
        return next;
      });
    },
    [pathSlug],
  );

  const reset = useCallback(() => {
    localStorage.removeItem(storageKey(pathSlug));
    setProgress({});
  }, [pathSlug]);

  return { progress, setStep, reset, hydrated };
}

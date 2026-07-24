"use client";

import { useEffect, useState } from "react";
import { GUIDE_PATHS } from "@/lib/paths";
import { syncOverallProgressCookie } from "@/lib/progress-sync";

const TOTAL_STEPS = GUIDE_PATHS.reduce((sum, path) => sum + path.steps.length, 0);

export function useOverallProgress() {
  const [completed, setCompleted] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, not derivable at render time on the server
    setCompleted(syncOverallProgressCookie().completed);
    setHydrated(true);

    const onStorage = (e: StorageEvent) => {
      if (e.key?.startsWith("telegraph-guide-progress:")) setCompleted(syncOverallProgressCookie().completed);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { completed, total: TOTAL_STEPS, hydrated };
}

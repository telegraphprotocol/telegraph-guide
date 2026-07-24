"use client";

import { motion } from "framer-motion";
import { useOverallProgress } from "@/lib/hooks/use-overall-progress";

export function OverallProgress() {
  const { completed, total, hydrated } = useOverallProgress();
  if (!hydrated || completed === 0) return null;

  const pct = Math.round((completed / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto mt-8 w-full max-w-sm"
    >
      <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground-2">
        <span>Overall progress</span>
        <span>
          {completed} / {total} steps · {pct}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-card">
        <motion.div
          className="h-full rounded-full bg-foreground"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </motion.div>
  );
}

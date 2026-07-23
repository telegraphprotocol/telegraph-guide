"use client";

import { motion } from "framer-motion";
import type { Accent } from "@/lib/paths";

const BAR_COLOR: Record<Accent, string> = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

export function ProgressBar({
  accent,
  completed,
  total,
}: {
  accent: Accent;
  completed: number;
  total: number;
}) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground-2">
        <span>
          {completed} / {total} steps
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-card">
        <motion.div
          className={`h-full rounded-full ${BAR_COLOR[accent]}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, PartyPopper, RotateCcw } from "lucide-react";
import type { GuidePath } from "@/lib/paths";
import { useGuideProgress } from "@/lib/hooks/use-guide-progress";
import { StepCard } from "@/components/guide/step-card";
import { ProgressBar } from "@/components/guide/progress-bar";
import { ACCENT_CLASSES } from "@/lib/accent";
import { Button } from "@/components/ui/button";

export function GuideFlow({ path }: { path: GuidePath }) {
  const { progress, setStep, reset, hydrated } = useGuideProgress(path.slug);
  const [activeId, setActiveId] = useState<string | null>(null);

  const accent = ACCENT_CLASSES[path.accent];
  const completed = useMemo(
    () => path.steps.filter((s) => progress[s.id]).length,
    [path.steps, progress],
  );
  const allDone = completed === path.steps.length;

  const firstUnresolved = useMemo(
    () => path.steps.find((s) => !progress[s.id])?.id ?? null,
    [path.steps, progress],
  );
  const openId = activeId ?? firstUnresolved;

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:py-14">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground-2 hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        All paths
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="mb-1 flex items-center gap-2">
          <span className={`relative inline-flex size-2 rounded-full ${accent.dot}`}>
            <span className={`absolute inset-0 rounded-full ${accent.dot} glow-pulse`} />
          </span>
          <span className={`text-xs font-medium uppercase tracking-wide ${accent.text}`}>{path.tagline}</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{path.label}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{path.description}</p>
      </motion.div>

      <div className="mt-6">
        {hydrated && <ProgressBar accent={path.accent} completed={completed} total={path.steps.length} />}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {path.steps.map((step, i) => (
          <StepCard
            key={step.id}
            step={step}
            index={i}
            accent={path.accent}
            state={progress[step.id] as "done" | "skipped" | undefined}
            active={openId === step.id}
            onSelect={() => setActiveId(activeId === step.id ? null : step.id)}
            onComplete={() => {
              setStep(step.id, "done");
              const next = path.steps[i + 1];
              setActiveId(next ? next.id : null);
            }}
            onSkip={() => {
              setStep(step.id, "skipped");
              const next = path.steps[i + 1];
              setActiveId(next ? next.id : null);
            }}
          />
        ))}
      </div>

      {hydrated && allDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className={`glass-card mt-6 flex items-center gap-3 rounded-xl p-4 backdrop-blur-xl backdrop-saturate-150 ${accent.text}`}
        >
          <PartyPopper className="size-5 shrink-0" />
          <p className="text-sm text-foreground">
            You&apos;re all set on this path. Jump back in any time — or pick another path from the home screen.
          </p>
        </motion.div>
      )}

      {hydrated && completed > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={reset}
          className="mt-4 gap-1.5 text-muted-foreground-2"
        >
          <RotateCcw className="size-3.5" />
          Reset progress
        </Button>
      )}
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, SkipForward } from "lucide-react";
import type { Accent, Step } from "@/lib/paths";
import { Button, buttonVariants } from "@/components/ui/button";
import { ACCENT_CLASSES } from "@/lib/accent";
import { cn } from "@/lib/utils";

type StepState = "done" | "skipped" | undefined;

export function StepCard({
  step,
  index,
  accent,
  state,
  active,
  onSelect,
  onComplete,
  onSkip,
}: {
  step: Step;
  index: number;
  accent: Accent;
  state: StepState;
  active: boolean;
  onSelect: () => void;
  onComplete: () => void;
  onSkip: () => void;
}) {
  const accentClasses = ACCENT_CLASSES[accent];
  const isResolved = state === "done" || state === "skipped";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={cn(
        "glass-card overflow-hidden rounded-xl backdrop-blur-xl backdrop-saturate-150 transition-colors",
        active ? accentClasses.border : "",
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
      >
        <span
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
            state === "done" && "border-transparent bg-success-dim text-success",
            state === "skipped" && "border-transparent bg-muted text-muted-foreground-2",
            !isResolved && "border-border-subtle text-muted-foreground",
          )}
        >
          {state === "done" ? <Check className="size-3.5" /> : index + 1}
        </span>
        <span className="flex-1">
          <span
            className={cn(
              "block text-sm font-medium",
              isResolved ? "text-muted-foreground-2 line-through decoration-1" : "text-foreground",
            )}
          >
            {step.title}
          </span>
        </span>
        {step.skippable && !isResolved && (
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground-2">optional</span>
        )}
        <ChevronRight
          className={cn(
            "size-4 text-muted-foreground-2 transition-transform",
            active && "rotate-90",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-t border-border-subtle px-4 pb-4 pt-3.5">
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {step.hint && (
                <p className="mt-1.5 text-xs text-muted-foreground-2">{step.hint}</p>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {step.cta && (
                  <a
                    href={step.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onComplete}
                    className={cn(buttonVariants({ size: "sm" }))}
                  >
                    {step.cta.label}
                  </a>
                )}
                <Button variant="outline" size="sm" onClick={onComplete} className="gap-1.5">
                  <Check className="size-3.5" />
                  Mark done
                </Button>
                {step.skippable && (
                  <Button variant="ghost" size="sm" onClick={onSkip} className="gap-1.5 text-muted-foreground-2">
                    <SkipForward className="size-3.5" />
                    Skip
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

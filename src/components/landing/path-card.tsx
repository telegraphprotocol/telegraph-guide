"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { GuidePath } from "@/lib/paths";
import { ACCENT_CLASSES } from "@/lib/accent";

export function PathCard({ path, index }: { path: GuidePath; index: number }) {
  const accent = ACCENT_CLASSES[path.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="group relative"
    >
      <Link
        href={`/guide/${path.slug}`}
        className={`glass-card relative block h-full rounded-xl p-5 backdrop-blur-xl backdrop-saturate-150 transition-colors ${accent.border}`}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className={`relative inline-flex size-2 rounded-full ${accent.dot}`}>
            <span className={`absolute inset-0 rounded-full ${accent.dot} glow-pulse`} />
          </span>
          <span className={`text-xs font-medium uppercase tracking-wide ${accent.text}`}>
            {path.tagline}
          </span>
        </div>
        <h3 className="mb-1.5 flex items-center gap-1.5 text-lg font-semibold text-foreground">
          {path.label}
          <ArrowUpRight className="size-4 text-muted-foreground-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{path.description}</p>
        <p className="mt-3 text-xs text-muted-foreground-2">{path.steps.length} steps</p>
      </Link>
    </motion.div>
  );
}

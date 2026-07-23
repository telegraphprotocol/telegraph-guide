"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-3 py-1 text-xs text-muted-foreground"
      >
        <span className="relative inline-flex size-1.5 rounded-full bg-success">
          <span className="absolute inset-0 rounded-full bg-success glow-pulse" />
        </span>
        Telegraph Protocol is live
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Where do you want to start?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
      >
        Pick a path below and we&apos;ll walk you through it step by step — right up to the
        moment you&apos;re actually using the product. Skip anything you&apos;ve already done.
      </motion.p>
    </div>
  );
}

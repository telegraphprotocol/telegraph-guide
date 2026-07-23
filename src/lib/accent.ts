import type { Accent } from "@/lib/paths";

export const ACCENT_CLASSES: Record<
  Accent,
  { text: string; dot: string; ring: string; border: string; glowBg: string }
> = {
  info: {
    text: "text-info",
    dot: "bg-info",
    ring: "focus-visible:ring-info/40",
    border: "hover:border-info/50",
    glowBg: "bg-info/20",
  },
  success: {
    text: "text-success",
    dot: "bg-success",
    ring: "focus-visible:ring-success/40",
    border: "hover:border-success/50",
    glowBg: "bg-success/20",
  },
  warning: {
    text: "text-warning",
    dot: "bg-warning",
    ring: "focus-visible:ring-warning/40",
    border: "hover:border-warning/50",
    glowBg: "bg-warning/20",
  },
  danger: {
    text: "text-danger",
    dot: "bg-danger",
    ring: "focus-visible:ring-danger/40",
    border: "hover:border-danger/50",
    glowBg: "bg-danger/20",
  },
};

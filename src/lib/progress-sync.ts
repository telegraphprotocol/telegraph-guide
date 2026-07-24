import { GUIDE_PATHS } from "@/lib/paths";
import { progressStorageKey } from "@/lib/hooks/use-guide-progress";
import { setCookie } from "@/lib/cookies";

// Single combined cookie, scoped to .telegraphprotocol.com, so other subdomains
// (e.g. alexandria.telegraphprotocol.com) can read a user's overall guide progress
// without needing per-path detail.
const OVERALL_COOKIE_NAME = "tg_guide_overall_progress";

export function syncOverallProgressCookie() {
  let completed = 0;
  const total = GUIDE_PATHS.reduce((sum, path) => sum + path.steps.length, 0);

  for (const path of GUIDE_PATHS) {
    try {
      const raw = localStorage.getItem(progressStorageKey(path.slug));
      const progress = raw ? (JSON.parse(raw) as Record<string, string>) : {};
      completed += path.steps.filter((s) => progress[s.id]).length;
    } catch {
      // ignore malformed storage for this path
    }
  }

  setCookie(OVERALL_COOKIE_NAME, JSON.stringify({ completed, total }));
  return { completed, total };
}

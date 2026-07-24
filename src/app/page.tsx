import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/landing/hero";
import { PathCard } from "@/components/landing/path-card";
import { OverallProgress } from "@/components/landing/overall-progress";
import { DiscordLogo, XLogo } from "@/components/icons";
import { GUIDE_PATHS } from "@/lib/paths";
import { SITE_URLS } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-dot-grid">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-16 sm:py-20">
        <Hero />
        <OverallProgress />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GUIDE_PATHS.map((path, i) => (
            <PathCard key={path.slug} path={path} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground-2">
          <a href={SITE_URLS.whitepaper} className="hover:text-foreground">
            Read the whitepaper
          </a>
          <a href={SITE_URLS.docs} className="hover:text-foreground">
            Read the docs
          </a>
          <a href={SITE_URLS.explorer} className="hover:text-foreground">
            Explore the network
          </a>
          <a href={SITE_URLS.useCases} className="hover:text-foreground">
            Browse use cases
          </a>
          <a href={SITE_URLS.twitter} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <XLogo className="size-3.5" />
            Follow on X
          </a>
          <a href={SITE_URLS.discord} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <DiscordLogo className="size-3.5" />
            Join Discord
          </a>
        </div>
      </main>
      <footer className="border-t border-border-subtle bg-background/85 px-4 py-6 text-center text-xs text-muted-foreground-2 backdrop-blur-xl backdrop-saturate-150">
        Not sure where to start? <Link href="/guide/ask" className="text-foreground hover:underline">Just ask Alexandria</Link>.
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <Image src="/logo.png" alt="" width={20} height={20} className="rounded-sm" priority />
          Telegraph Guide
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

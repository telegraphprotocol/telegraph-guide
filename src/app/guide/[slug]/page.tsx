import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { GuideFlow } from "@/components/guide/guide-flow";
import { GUIDE_PATHS, getPath } from "@/lib/paths";

export function generateStaticParams() {
  return GUIDE_PATHS.map((p) => ({ slug: p.slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) notFound();

  return (
    <div className="flex flex-1 flex-col bg-dot-grid">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <GuideFlow path={path} />
      </main>
    </div>
  );
}

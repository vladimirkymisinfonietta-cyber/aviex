import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoSite } from "@/components/demo-site";
import { demos, getDemo, siteUrl } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};

  return {
    title: `${demo.name} — demo`,
    description: demo.description,
    alternates: { canonical: `${siteUrl}/demo/${demo.slug}` },
  };
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();

  return <DemoSite demo={demo} />;
}

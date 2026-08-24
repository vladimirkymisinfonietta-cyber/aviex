import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/sections/cta";
import { DemosSection } from "@/components/sections/demos";
import { ProcessSection } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Prosessi",
  description:
    "Näin verkkosivuprojekti etenee AVIEXilla: keskustelu, suunnittelu, toteutus ja julkaisu.",
};

export default function ProsessiPage() {
  return (
    <>
      <PageHero
        eyebrow="Prosessi"
        title="Näin se toimii."
        description="Prosessi on suunniteltu kevyeksi. Sinun tehtäväsi on kertoa yrityksestäsi — me hoidamme toteutuksen."
      />
      <ProcessSection showHeading={false} />
      <DemosSection />
      <CtaSection />
    </>
  );
}

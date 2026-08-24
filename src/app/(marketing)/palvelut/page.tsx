import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/sections/cta";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Palvelut",
  description:
    "Verkkosivut, design, hakukoneoptimointi ja ylläpito suomalaisille pienyrityksille.",
};

export default function PalvelutPage() {
  return (
    <>
      <PageHero
        eyebrow="Palvelut"
        title="Kaikki mitä tarvitset moderniin verkkoläsnäoloon."
        description="Suunnittelemme ja rakennamme moderneja verkkosivuja suomalaisille yrityksille nopeasti ja ilman tarpeettoman suurta verkkosivuprojektia."
      />
      <ServicesSection showHeading={false} />
      <ProcessSection />
      <CtaSection />
    </>
  );
}

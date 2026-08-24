import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Usein kysyttyä",
  description:
    "Vastauksia yleisimpiin kysymyksiin verkkosivujen aikataulusta, ylläpidosta ja muutoksista.",
};

export default function UseinKysyttyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Usein kysyttyä"
        title="Selkeät vastaukset ennen projektin aloitusta."
        description="Alla yleisimmät kysymykset. Voit myös kysyä suoraan tarjouspyynnön yhteydessä."
      />
      <FaqSection />
      <CtaSection />
    </>
  );
}

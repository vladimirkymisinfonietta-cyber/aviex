import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { PricingSection } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Hinnoittelu",
  description:
    "Kiinteähintaiset verkkosivupaketit 299 eurosta alkaen. Jatkuva kuukausipalvelu sisältyy jokaiseen pakettiin.",
};

export default function HinnoitteluPage() {
  return (
    <>
      <PageHero
        eyebrow="Hinnoittelu"
        title="Valitse yrityksellesi sopiva paketti."
        description="Hinnat ovat kiinteitä ja sisältö on kuvattu selkeästi. Laajemmat toteutukset hinnoitellaan erillisen tarjouksen perusteella."
      />
      <PricingSection showHeading={false} />
      <FaqSection />
      <CtaSection />
    </>
  );
}

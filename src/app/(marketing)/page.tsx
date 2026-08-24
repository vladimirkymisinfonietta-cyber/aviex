import { CtaSection } from "@/components/sections/cta";
import { DemosSection } from "@/components/sections/demos";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { TrustSection } from "@/components/sections/trust";
import { WhySection } from "@/components/sections/why";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <DemosSection />
      <WhySection />
      <TrustSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

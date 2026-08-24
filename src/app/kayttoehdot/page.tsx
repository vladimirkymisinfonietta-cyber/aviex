import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Käyttöehdot",
  description: "AVIEXin verkkosivujen ja palveluiden käyttöehdot.",
};

export default function KayttoehdotPage() {
  return (
    <>
      <PageHero eyebrow="Käyttöehdot" title="Palveluiden käyttöehdot." />
      <section className="section-y bg-background">
        <div className="container-page max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl text-foreground">Palvelun sisältö</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Palvelun sisältö, aikataulu ja hinta sovitaan aina kirjallisesti
              ennen työn aloittamista. Verkkosivuilla esitetyt paketit ovat
              kuvauksia palvelujen sisällöstä.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-foreground">Aineistot ja vastuut</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Asiakas vastaa toimittamiensa tekstien, kuvien ja logojen
              käyttöoikeuksista. AVIEX vastaa sovitun toteutuksen teknisestä
              laadusta.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-foreground">Demo-konseptit</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sivustolla esitetyt esimerkkiprojektit ovat AVIEXin omia
              demo-konsepteja, eivät toteutuneita asiakasprojekteja.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

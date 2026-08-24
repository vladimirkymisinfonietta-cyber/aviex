import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Tietosuoja",
  description: "Miten AVIEX käsittelee verkkosivujen kautta kerättyjä tietoja.",
};

export default function TietosuojaPage() {
  return (
    <>
      <PageHero eyebrow="Tietosuoja" title="Tietosuojaseloste." />
      <section className="section-y bg-background">
        <div className="container-page max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl text-foreground">Kerättävät tiedot</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Keräämme vain ne tiedot, jotka annat tarjouspyyntölomakkeella:
              nimi, yritys, sähköposti, puhelinnumero sekä projektiin liittyvät
              tiedot.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-foreground">Tietojen käyttö</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tietoja käytetään yhteydenottoon, tarjouksen laatimiseen ja
              mahdollisen projektin toteuttamiseen. Tietoja ei myydä eikä
              luovuteta markkinointitarkoituksiin.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-foreground">Säilytys ja oikeudet</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Säilytämme tietoja niin kauan kuin se on tarpeen yhteydenoton ja
              asiakassuhteen hoitamiseksi. Voit pyytää tietojesi tarkastamista
              tai poistamista lähettämällä viestin osoitteeseen info@aviex.fi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

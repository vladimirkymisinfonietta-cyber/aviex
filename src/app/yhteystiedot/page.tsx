import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Pyydä arvio verkkosivuprojektista. Kerro lyhyesti yrityksestäsi ja tarpeistasi.",
};

export default function YhteystiedotPage() {
  return (
    <>
      <PageHero
        eyebrow="Yhteystiedot"
        title="Valmis tekemään yrityksesi verkkosivusta paremman?"
        description="Kerro meille lyhyesti yrityksestäsi ja tarpeistasi. Saat arvion projektista ilman sitoutumista."
      />
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl text-foreground sm:text-3xl">
              Tarjouspyyntö
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Täytä lomake, niin palaamme asiaan sähköpostitse. Vastaamme yleensä
              saman tai seuraavan arkipäivän aikana.
            </p>
            <dl className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <dt className="eyebrow">Sähköposti</dt>
                <dd className="mt-2 text-sm text-foreground">info@aviex.fi</dd>
              </div>
              <div>
                <dt className="eyebrow">Alue</dt>
                <dd className="mt-2 text-sm text-foreground">
                  Suomi — työskentelemme etänä
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Kielet</dt>
                <dd className="mt-2 text-sm text-foreground">Suomi, englanti</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

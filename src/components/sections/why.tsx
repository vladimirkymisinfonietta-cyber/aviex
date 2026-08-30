import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { whyItems } from "@/lib/content";

export function WhySection() {
  return (
    <section className="section-y border-t border-border bg-background">
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Tietoa meistä"
            title="Miksi AVIEX?"
            description="AVIEX yhdistää modernin designin, teknologian ja tehokkaan tuotantoprosessin. Jokainen verkkosivu tarkistetaan ja viimeistellään ennen julkaisua."
          />
        </div>
        <div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {whyItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="group h-full bg-card p-8">
                  <span className="block h-px w-8 bg-accent-brand transition-all duration-500 group-hover:w-16" />
                  <h3 className="mt-6 text-lg text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="relative mt-6 overflow-hidden border border-ink bg-ink px-8 py-16 shadow-luxury md:px-16 md:py-24">
              <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
              <div
                className="ambient-glow right-0 top-0 h-48 w-48 bg-accent-brand/20"
                aria-hidden
              />
              <p className="relative font-display text-3xl leading-[1.08] tracking-[-0.04em] text-ink-foreground sm:text-4xl lg:text-5xl">
                AI nopeuttaa työtä.
                <br />
                Laatu ratkaisee.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { trustItems } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="section-y border-t border-border bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Luotettavuus"
          title="Suunniteltu pienyrityksille."
          description="AVIEX rakentuu vaiheittain oikeiden projektien ja asiakaskokemusten ympärille. Siksi kerromme avoimesti mitä palvelu sisältää ja mitä se maksaa."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {trustItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="border-t border-foreground/15 pt-6">
                <h3 className="font-display text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

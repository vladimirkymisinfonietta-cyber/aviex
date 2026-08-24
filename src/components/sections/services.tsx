import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

type ServicesSectionProps = {
  showHeading?: boolean;
};

export function ServicesSection({ showHeading = true }: ServicesSectionProps) {
  return (
    <section className="section-y border-t border-border bg-background">
      <div className="container-page">
        {showHeading ? (
          <SectionHeading
            eyebrow="Palvelut"
            title="Kaikki mitä tarvitset moderniin verkkoläsnäoloon."
          />
        ) : null}
        <div
          className={`grid gap-px border border-border bg-border sm:grid-cols-2 ${showHeading ? "mt-14" : ""}`}
        >
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 80}>
              <article className="group relative h-full bg-card p-8 transition-colors duration-300 hover:bg-secondary/60 lg:p-10">
                <p className="font-display text-xs tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-accent-brand">
                  {service.number}
                </p>
                <h3 className="mt-6 text-xl text-foreground transition-transform duration-300 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-8 block h-px w-10 bg-foreground/20 transition-all duration-500 group-hover:w-20 group-hover:bg-accent-brand" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/content";

type ProcessSectionProps = {
  showHeading?: boolean;
};

export function ProcessSection({ showHeading = true }: ProcessSectionProps) {
  return (
    <section className="section-y border-t border-ink-border bg-ink">
      <div className="container-page">
        {showHeading ? (
          <SectionHeading
            eyebrow="Prosessi"
            title="Näin projekti etenee."
            description="Selkeä nelivaiheinen prosessi ensimmäisestä keskustelusta julkaisuun."
            tone="dark"
          />
        ) : null}
        <ol
          className={`grid gap-px bg-ink-border md:grid-cols-2 lg:grid-cols-4 ${showHeading ? "mt-14" : ""}`}
        >
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} as="li">
              <article className="group relative h-full bg-ink p-8 lg:p-9">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm tracking-[0.2em] text-accent-brand">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-ink-border" />
                </div>
                <span className="mt-5 block h-px bg-accent-brand/70" />
                <h3 className="mt-6 text-xl text-ink-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

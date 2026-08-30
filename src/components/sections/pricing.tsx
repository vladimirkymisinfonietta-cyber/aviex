import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { pricingPlans } from "@/lib/content";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  showHeading?: boolean;
  description?: string;
};

export function PricingSection({
  showHeading = true,
  description = "Kiinteä hinta, selkeä sisältö. Kaikki paketit sisältävät mobiiliystävällisen toteutuksen.",
}: PricingSectionProps) {
  return (
    <section className="section-y relative overflow-hidden border-t border-border bg-secondary/40">
      <div
        className="ambient-glow -right-32 top-1/4 h-96 w-96 bg-accent-brand/8"
        aria-hidden
      />
      <div className="container-page relative">
        {showHeading ? (
          <SectionHeading
            eyebrow="Hinnoittelu"
            title="Valitse yrityksellesi sopiva paketti."
            description={description}
          />
        ) : null}
        <div
          className={`grid items-stretch gap-6 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}
        >
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90}>
              <article
                className={cn(
                  "flex h-full flex-col border p-8 transition-all duration-300 lg:p-10",
                  plan.featured
                    ? "border-ink bg-ink text-ink-foreground shadow-luxury lg:-mt-6 lg:mb-6"
                    : "luxury-surface border-border hover:-translate-y-1 hover:border-foreground/25 hover:shadow-elevated",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={cn(
                      "text-sm font-semibold tracking-[0.18em] uppercase",
                      plan.featured ? "text-ink-foreground" : "text-foreground",
                    )}
                  >
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <span className="bg-accent-brand px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.16em] text-accent-brand-foreground uppercase">
                      Suosituin
                    </span>
                  ) : null}
                </div>
                <div className="mt-6">
                  <p className="flex flex-wrap items-baseline gap-x-2 font-display text-[2.5rem] leading-none tracking-[-0.03em] sm:text-[2.75rem]">
                    {plan.price}
                    <span
                      className={cn(
                        "font-sans text-xl font-medium tracking-normal",
                        plan.featured ? "text-ink-muted" : "text-muted-foreground",
                      )}
                    >
                      + {plan.monthly}
                    </span>
                  </p>
                  <p
                    className={cn(
                      "mt-3 text-xs tracking-[0.08em] uppercase",
                      plan.featured ? "text-ink-muted" : "text-muted-foreground",
                    )}
                  >
                    Aloitusmaksu + pakollinen kuukausipalvelu
                  </p>
                  <p
                    className={cn(
                      "mt-5 min-h-[3.5rem] text-sm leading-relaxed",
                      plan.featured ? "text-ink-muted" : "text-muted-foreground",
                    )}
                  >
                    {plan.tagline}
                  </p>
                </div>
                <ul
                  className={cn(
                    "mt-8 space-y-3.5 border-t pt-8",
                    plan.featured ? "border-ink-border" : "border-border",
                  )}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.featured
                            ? "text-accent-brand"
                            : "text-foreground/70",
                        )}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-ink-foreground/90"
                            : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/yhteystiedot"
                  className={cn(
                    "btn-base mt-10 w-full",
                    plan.featured ? "btn-outline-light" : "btn-solid",
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl border-t border-border pt-8 text-center text-sm leading-relaxed text-muted-foreground">
          Kaikkiin paketteihin kuuluu jatkuva kuukausipalvelu, joka kattaa
          hostingin, SSL-suojauksen ja teknisen ylläpidon.
        </p>
      </div>
    </section>
  );
}

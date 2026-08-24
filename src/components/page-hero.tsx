import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-border bg-ink pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow text-accent-brand">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.07] tracking-[-0.03em] text-balance text-ink-foreground sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

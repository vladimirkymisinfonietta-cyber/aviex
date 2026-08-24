import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { heroHighlights } from "@/lib/content";

function HeroMockup() {
  return (
    <div
      aria-hidden
      className="relative aspect-[4/3.4] w-full overflow-hidden border border-ink-border bg-ink"
    >
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-accent-brand/70"
        style={{ animation: "aviex-scan 6.5s cubic-bezier(0.4,0,0.2,1) infinite" }}
      />
      <div className="absolute inset-6 flex flex-col border border-ink-border bg-ink/60 backdrop-blur-[2px] sm:inset-8">
        <div className="flex items-center gap-1.5 border-b border-ink-border px-4 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent-brand/70" />
          <span className="ml-3 h-1.5 w-24 bg-ink-muted/20" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-7">
          <div className="space-y-3">
            {[70, 45].map((width, i) => (
              <div
                key={width}
                className="h-3 bg-ink-foreground/85 sm:h-4"
                style={{
                  width: `${width}%`,
                  transformOrigin: "left",
                  animation: `aviex-bar 1.1s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s both`,
                }}
              />
            ))}
            <div
              className="h-2 w-2/5 bg-accent-brand"
              style={{
                transformOrigin: "left",
                animation:
                  "aviex-bar 1.1s cubic-bezier(0.22,1,0.36,1) 0.5s both",
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-end gap-2 sm:gap-3">
            {[88, 64, 100, 46].map((height, i) => (
              <div
                key={height}
                className="border border-ink-border bg-ink-foreground/[0.06]"
                style={{
                  height: `${height}px`,
                  animation: `aviex-rise 0.8s cubic-bezier(0.22,1,0.36,1) ${0.6 + i * 0.12}s both`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute -right-3 bottom-10 hidden w-40 border border-ink-border bg-background p-4 shadow-elevated md:block"
        style={{ animation: "aviex-drift 7s ease-in-out infinite" }}
      >
        <p className="text-[0.625rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Julkaistu
        </p>
        <p className="mt-1 font-display text-sm text-foreground">www.aviex.fi</p>
        <div className="mt-3 h-1 w-full bg-border">
          <div className="h-1 w-full bg-accent-brand" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Moderni verkkosivu. Enemmän asiakkaita.</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] tracking-[-0.03em] text-balance text-foreground sm:text-5xl lg:text-[4rem]">
              Moderni verkkosivu.
              <br />
              <span className="text-muted-foreground">Rakennettu kasvamaan.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              AVIEX suunnittelee ja rakentaa moderneja verkkosivuja suomalaisille
              pienyrityksille. Saat ammattimaisen, mobiiliystävällisen ja
              helposti ylläpidettävän verkkosivun ilman tarpeettoman suurta
              verkkosivuprojektia.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/yhteystiedot" className="btn-base btn-solid">
                Pyydä ilmainen arvio
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#esimerkit" className="btn-base btn-outline">
                Katso esimerkit
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-12 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:gap-8">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-accent-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={200} className="lg:pl-4">
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}

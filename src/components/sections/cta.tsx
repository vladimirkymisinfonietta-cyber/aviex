import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="section-y relative overflow-hidden border-t border-ink-border bg-ink">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent-brand/12 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow text-accent-brand before:bg-accent-brand">
            Aloitetaan
          </p>
          <h2 className="mt-8 font-display text-3xl leading-[1.04] tracking-[-0.03em] text-balance text-ink-foreground sm:text-4xl lg:text-[3.5rem]">
            Yrityksesi ansaitsee paremman verkkosivun.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-[1.75] text-ink-muted">
            Kerro meille lyhyesti mitä tarvitset. Saat selkeän arvion ilman
            sitoutumista.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/yhteystiedot"
              className="btn-base bg-ink-foreground text-ink shadow-[0_12px_32px_-12px_rgba(255,255,255,0.25)] hover:bg-accent-brand hover:text-accent-brand-foreground"
            >
              Pyydä ilmainen arvio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/palvelut" className="btn-base btn-outline-light">
              Katso palvelut
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

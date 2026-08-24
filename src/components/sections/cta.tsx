import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="section-y relative overflow-hidden border-t border-ink-border bg-ink">
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute -top-24 right-0 h-64 w-64 bg-accent-brand/10 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow text-accent-brand">Aloitetaan</p>
          <h2 className="mt-5 text-3xl leading-[1.05] text-balance text-ink-foreground sm:text-4xl lg:text-[3.25rem]">
            Yrityksesi ansaitsee paremman verkkosivun.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            Kerro meille lyhyesti mitä tarvitset. Saat selkeän arvion ilman
            sitoutumista.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/yhteystiedot"
              className="btn-base bg-ink-foreground text-ink hover:bg-accent-brand hover:text-accent-brand-foreground"
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

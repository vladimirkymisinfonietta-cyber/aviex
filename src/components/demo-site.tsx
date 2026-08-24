import Image from "next/image";
import Link from "next/link";
import type { DemoConcept } from "@/lib/content";
import { cn } from "@/lib/utils";

const themes = {
  warm: {
    page: "bg-[#1a0f0c] text-[#f6ebe3]",
    muted: "text-[#d4b8a8]",
    accent: "bg-[#e85d04] text-white hover:bg-[#f48c06]",
    chip: "border-[#e85d04]/40 text-[#f4a261]",
    panel: "border-[#ffffff14] bg-[#241612]",
    soft: "bg-[#2a1812]",
    line: "bg-[#e85d04]",
  },
  dark: {
    page: "bg-[#0b0b0c] text-[#f2f2f0]",
    muted: "text-[#a8a8a3]",
    accent: "bg-[#c4f542] text-[#111] hover:bg-[#d4ff6a]",
    chip: "border-[#c4f542]/30 text-[#c4f542]",
    panel: "border-[#ffffff12] bg-[#141416]",
    soft: "bg-[#1a1a1d]",
    line: "bg-[#c4f542]",
  },
  steel: {
    page: "bg-[#0f1419] text-[#eef3f7]",
    muted: "text-[#9aafbf]",
    accent: "bg-[#3d8bfd] text-white hover:bg-[#5a9fff]",
    chip: "border-[#3d8bfd]/35 text-[#8bbcff]",
    panel: "border-[#ffffff12] bg-[#151b22]",
    soft: "bg-[#1a222b]",
    line: "bg-[#3d8bfd]",
  },
} as const;

type DemoSiteProps = {
  demo: DemoConcept;
};

export function DemoSite({ demo }: DemoSiteProps) {
  const t = themes[demo.theme];

  return (
    <div className={cn("min-h-screen", t.page)}>
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 text-xs sm:px-8">
          <p className="text-white/70">
            Demo-konsepti AVIEXilta ·{" "}
            <span className="text-white">{demo.name}</span>
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/#esimerkit"
              className="text-white/70 transition hover:text-white"
            >
              ← Takaisin
            </Link>
            <Link
              href="/yhteystiedot"
              className="hidden border border-white/20 px-3 py-1.5 text-white transition hover:border-white/50 sm:inline-flex"
            >
              Pyydä oma
            </Link>
          </div>
        </div>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.18em] uppercase">
            {demo.name}
          </p>
          <p className={cn("mt-1 text-xs tracking-[0.16em] uppercase", t.muted)}>
            {demo.category}
          </p>
        </div>
        <a href="#yhteys" className={cn("px-5 py-2.5 text-sm font-medium transition", t.accent)}>
          {demo.cta}
        </a>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14 lg:px-8 lg:pb-24 lg:pt-10">
          <div>
            <p
              className={cn(
                "inline-flex border px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.16em] uppercase",
                t.chip,
              )}
            >
              Demo-konsepti
            </p>
            <h1 className="mt-6 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              {demo.tagline}
            </h1>
            <p className={cn("mt-6 max-w-lg text-base leading-relaxed sm:text-lg", t.muted)}>
              {demo.description}
            </p>
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {demo.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <span className={cn("h-1.5 w-1.5 shrink-0", t.line)} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#palvelut" className={cn("inline-flex justify-center px-6 py-3.5 text-sm font-medium transition", t.accent)}>
                Katso palvelut
              </a>
              <a
                href="#yhteys"
                className="inline-flex justify-center border border-white/20 px-6 py-3.5 text-sm font-medium transition hover:border-white/45"
              >
                {demo.cta}
              </a>
            </div>
          </div>
          <div className={cn("relative aspect-[4/3] overflow-hidden border", t.panel)}>
            <Image
              src={demo.image}
              alt={demo.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="palvelut" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className={cn("text-[0.6875rem] font-semibold tracking-[0.18em] uppercase", t.muted)}>
              {demo.category === "Ravintola" ? "Menu" : "Palvelut"}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] sm:text-4xl">
              {demo.category === "Ravintola"
                ? "Suosikit listalla."
                : "Selkeät hinnat ja palvelut."}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {demo.menuOrServices.map((item) => (
              <article
                key={item.title}
                className={cn("flex items-start justify-between gap-6 border p-6", t.panel)}
              >
                <div>
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className={cn("mt-2 text-sm", t.muted)}>{item.detail}</p>
                </div>
                {item.price ? (
                  <p className="shrink-0 text-sm font-semibold tracking-wide">
                    {item.price}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("border-t border-white/10", t.soft)}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.02em] sm:text-4xl">
              Rakennettu kasvamaan.
            </h2>
            <p className={cn("mt-5 max-w-md text-sm leading-relaxed sm:text-base", t.muted)}>
              Tämä on AVIEXin demo-konsepti. Oikea asiakassivusto rakennetaan
              yrityksesi brändillä, sisällöillä ja tavoitteilla — samaan
              selkeään rakenteeseen.
            </p>
          </div>
          <div className={cn("border p-8", t.panel)}>
            <p className={cn("text-[0.6875rem] font-semibold tracking-[0.16em] uppercase", t.muted)}>
              Mitä konsepti näyttää
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="border-b border-white/10 pb-4">
                Vahva etusivu yhdellä selkeällä viestillä
              </li>
              <li className="border-b border-white/10 pb-4">
                Palvelut ja hinnat heti löydettävissä
              </li>
              <li>Yhteydenotto tai varaus ilman turhia klikkauksia</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="yhteys" className="scroll-mt-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className={cn("relative overflow-hidden border px-8 py-14 sm:px-12 sm:py-16", t.panel)}>
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  demo.theme === "warm"
                    ? "#e85d04"
                    : demo.theme === "dark"
                      ? "#c4f542"
                      : "#3d8bfd",
              }}
            />
            <p className={cn("relative text-[0.6875rem] font-semibold tracking-[0.18em] uppercase", t.muted)}>
              Seuraava askel
            </p>
            <h2 className="relative mt-4 max-w-2xl font-display text-3xl tracking-[-0.02em] sm:text-4xl">
              Haluatko samanlaisen sivuston omalle yrityksellesi?
            </h2>
            <p className={cn("relative mt-5 max-w-xl text-sm leading-relaxed sm:text-base", t.muted)}>
              Kerro lyhyesti toimialasta ja tarpeista — saat selkeän arvion
              ilman sitoutumista.
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/yhteystiedot"
                className={cn("inline-flex justify-center px-6 py-3.5 text-sm font-medium transition", t.accent)}
              >
                Pyydä ilmainen arvio
              </Link>
              <Link
                href="/"
                className="inline-flex justify-center border border-white/20 px-6 py-3.5 text-sm font-medium transition hover:border-white/45"
              >
                www.aviex.fi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className={t.muted}>
            © 2026 {demo.name} · Demo AVIEXilta
          </p>
          <p className={t.muted}>www.aviex.fi</p>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { DemoBanner } from "@/components/demos/demo-banner";

export function ParturiDemo() {
  return (
    <div className="min-h-screen bg-[#050506] text-[#f5f4f0]">
      <DemoBanner name="Keskus Parturi" tone="dark" />

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-6 sm:px-8">
        <div>
          <p className="font-display text-[0.65rem] font-medium tracking-[0.38em] text-white/45 uppercase">
            Keskus
          </p>
          <p className="font-display text-sm font-semibold tracking-[0.32em] text-white uppercase">
            Parturi
          </p>
        </div>
        <nav className="hidden items-center gap-8 text-[0.65rem] tracking-[0.24em] text-white/45 uppercase md:flex">
          {["Home", "About", "Gallery", "Contact"].map((item, i) => (
            <a
              key={item}
              href={item === "Contact" ? "#contact" : "#"}
              className={
                i === 0
                  ? "text-white transition hover:text-[#7dd3ea]"
                  : "transition hover:text-white"
              }
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="tel:+358401234567"
          className="hidden items-center gap-2.5 text-xs tracking-wide text-white/60 transition hover:text-white sm:inline-flex"
        >
          <Phone className="h-3.5 w-3.5 text-[#7dd3ea]" />
          +358 40 123 4567
        </a>
      </header>

      <section className="relative mx-auto grid max-w-7xl lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(125,211,234,0.08),transparent)]" />

        <div className="flex flex-col justify-between px-5 py-12 sm:px-8 lg:py-20">
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-[#7dd3ea]/80 uppercase">
              Premium grooming
            </p>
            <h1 className="mt-8 max-w-md font-serif text-[2.75rem] leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem]">
              Precision.
              <br />
              Craft.
              <br />
              <span className="text-white/75">Confidence.</span>
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-[#7dd3ea] to-transparent" />
              <span className="text-[0.65rem] tracking-[0.28em] text-white/35 uppercase">
                Est. 2026
              </span>
            </div>
            <p className="mt-8 max-w-md text-[0.95rem] leading-[1.8] text-white/55">
              Keskus Parturi on moderni parturi, jossa leikkaus on tarkkaa ja
              tunnelma rauhallinen. Clean cuts. Sharp fades. Timeless style.
            </p>
          </div>

          <div id="contact" className="mt-16 space-y-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-[#7dd3ea]/40 bg-[#7dd3ea]/[0.04] px-7 py-4 text-[0.68rem] font-semibold tracking-[0.22em] text-white uppercase backdrop-blur-sm transition hover:border-[#7dd3ea]/70 hover:bg-[#7dd3ea]/10"
            >
              <CalendarDays className="h-4 w-4 text-[#7dd3ea] transition group-hover:scale-110" />
              Book your appointment
            </a>
            <div className="flex flex-wrap gap-8 text-xs tracking-wide text-white/40">
              <span className="inline-flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-[#7dd3ea]/80" />
                Keskuskatu 12
              </span>
              <span>ma–pe 10–19 · la 10–15</span>
            </div>
            <Link
              href="/yhteystiedot"
              className="inline-block text-xs tracking-wide text-white/40 underline-offset-4 transition hover:text-[#7dd3ea] hover:underline"
            >
              Haluatko samanlaisen sivuston? → AVIEX
            </Link>
          </div>
        </div>

        <div className="relative min-h-[480px] overflow-hidden border-t border-white/[0.06] lg:min-h-full lg:border-t-0 lg:border-l">
          <Image
            src="/demos/assets/barber-hero.jpg"
            alt="Parturi leikkaa asiakkaan hiuksia"
            fill
            priority
            className="object-cover object-[center_20%] contrast-[1.05] saturate-[0.85]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/20 to-[#050506]/30 lg:bg-gradient-to-l lg:from-transparent lg:via-[#050506]/10 lg:to-[#050506]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent_0%,rgba(5,5,6,0.4)_100%)]" />
          <div className="absolute bottom-8 left-8 right-8 hidden border border-white/10 bg-black/40 p-5 backdrop-blur-md lg:block">
            <p className="text-[0.65rem] tracking-[0.24em] text-[#7dd3ea]/80 uppercase">
              Experience
            </p>
            <p className="mt-2 font-serif text-lg text-white/90">
              A calm space. A precise cut. Nothing extra.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[0.68rem] tracking-wide text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Keskus Parturi · Demo-konsepti AVIEXilta</p>
          <p>Instagram · Facebook · Google</p>
        </div>
      </footer>
    </div>
  );
}

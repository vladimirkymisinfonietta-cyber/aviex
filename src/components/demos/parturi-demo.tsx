import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { DemoBanner } from "@/components/demos/demo-banner";

const services = [
  { name: "Haircut", price: "32 €" },
  { name: "Beard trim", price: "22 €" },
  { name: "Cut + beard", price: "48 €" },
  { name: "Kids cut", price: "24 €" },
];

export function ParturiDemo() {
  return (
    <div className="min-h-screen bg-[#070708] text-[#f3f2ef]">
      <DemoBanner name="Keskus Parturi" tone="dark" />

      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <div>
          <p className="font-display text-[0.7rem] font-semibold tracking-[0.32em] uppercase">
            Keskus
          </p>
          <p className="font-display text-sm font-semibold tracking-[0.28em] uppercase">
            Parturi
          </p>
        </div>
        <nav className="hidden items-center gap-7 text-[0.68rem] tracking-[0.2em] text-white/55 uppercase md:flex">
          {["Home", "Services", "About", "Gallery", "Contact"].map((item, i) => (
            <a
              key={item}
              href={item === "Services" ? "#services" : item === "Contact" ? "#contact" : "#"}
              className={
                i === 0
                  ? "border-b border-[#5ec8e8] pb-1 text-white"
                  : "transition hover:text-white"
              }
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="tel:+358401234567"
          className="hidden items-center gap-2 text-xs text-white/70 sm:inline-flex"
        >
          <Phone className="h-3.5 w-3.5 text-[#5ec8e8]" />
          +358 40 123 4567
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-between px-5 py-10 sm:px-8 lg:py-16">
          <div>
            <h1 className="max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.6rem]">
              Precision.
              <br />
              Craft.
              <br />
              Confidence.
            </h1>
            <div className="mt-6 h-px w-12 bg-[#5ec8e8]" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              Keskus Parturi on moderni parturi, jossa leikkaus on tarkkaa ja
              tunnelma rauhallinen. Clean cuts. Sharp fades. Timeless style.
            </p>

            <div id="services" className="mt-12 max-w-sm">
              <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-[#5ec8e8] uppercase">
                Services
              </p>
              <ul className="mt-5 space-y-3.5 border-t border-white/10 pt-5">
                {services.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center justify-between gap-4 border-b border-white/8 pb-3.5 text-sm"
                  >
                    <span className="text-white/85">{service.name}</span>
                    <span className="tabular-nums text-white/55">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="contact" className="mt-12 space-y-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[#5ec8e8]/70 px-6 py-3.5 text-[0.7rem] font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-[#5ec8e8]/10"
            >
              <CalendarDays className="h-4 w-4 text-[#5ec8e8]" />
              Book your appointment
            </a>
            <div className="flex flex-wrap gap-6 text-xs text-white/45">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#5ec8e8]" />
                Keskuskatu 12
              </span>
              <span>ma–pe 10–19 · la 10–15</span>
            </div>
            <Link
              href="/yhteystiedot"
              className="inline-block text-xs text-white/50 underline-offset-4 hover:text-white hover:underline"
            >
              Haluatko samanlaisen sivuston? → AVIEX
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border-t border-white/10 lg:min-h-full lg:border-t-0 lg:border-l">
          <Image
            src="/demos/assets/barber-hero.jpg"
            alt="Parturi leikkaa asiakkaan hiuksia"
            fill
            priority
            className="object-cover object-center grayscale contrast-110"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#070708]/40" />
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[0.7rem] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Keskus Parturi · Demo-konsepti AVIEXilta</p>
          <p>Instagram · Facebook · Google</p>
        </div>
      </footer>
    </div>
  );
}

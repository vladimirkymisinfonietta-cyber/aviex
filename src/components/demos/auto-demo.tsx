import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  Phone,
  Snowflake,
  Wrench,
} from "lucide-react";
import { DemoBanner } from "@/components/demos/demo-banner";

const services = [
  {
    title: "Määräaikaishuollot",
    detail:
      "Öljyt, suodattimet ja tarkastukset merkkikohtaisesti — kaikki automerkit.",
    image: "/demos/assets/auto-engine.jpg",
    icon: Wrench,
  },
  {
    title: "Korjaamopalvelut",
    detail:
      "Jarrut, jousitus, diagnostiikka ja korjaukset ilman turhaa odottelua.",
    image: "/demos/assets/auto-brakes.jpg",
    icon: Cog,
  },
  {
    title: "Rengaspalvelut",
    detail:
      "Vaihto, tasapainotus ja säilytys. Kesä- ja talvirenkaat samasta paikasta.",
    image: "/demos/assets/auto-tires.jpg",
    icon: Snowflake,
  },
];

export function AutoDemo() {
  return (
    <div className="min-h-screen bg-white text-[#1c2430]">
      <DemoBanner name="Paikallinen Auto" tone="light" />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-[#0088c7] text-white">
              <Cog className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-[#0088c7] uppercase">
                Paikallinen
              </p>
              <p className="font-display text-base font-semibold tracking-wide">
                AUTO
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-[0.72rem] font-semibold tracking-[0.14em] text-slate-500 uppercase lg:flex">
            {["Palvelut", "Ajanvaraus", "Yritys", "Yhteystiedot"].map(
              (item, i) => (
                <a
                  key={item}
                  href={
                    item === "Palvelut"
                      ? "#palvelut"
                      : item === "Yhteystiedot"
                        ? "#yhteys"
                        : "#ajanvaraus"
                  }
                  className={
                    i === 0
                      ? "border-b-2 border-[#0088c7] pb-1 text-[#0088c7]"
                      : "transition hover:text-[#0088c7]"
                  }
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <a
            href="tel:+358501234567"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0088c7]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">050 123 4567</span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/demos/assets/auto-hero.jpg"
            alt="Auto korjaamossa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/35" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-[#0088c7] uppercase">
              Luotettavaa palvelua paikallisesti
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Autoasi parhaissa käsissä.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              Monipuoliset huolto- ja korjauspalvelut kaikille automerkeille.
              Ammattitaitoista työtä, selkeä hinnoittelu ja reilu palvelu —
              ilman yllätyksiä.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#yhteys"
                className="inline-flex items-center justify-center bg-[#0088c7] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#0074aa]"
              >
                Ota yhteyttä
              </a>
              <a
                href="#palvelut"
                className="inline-flex items-center justify-center border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-[#0088c7] hover:text-[#0088c7]"
              >
                Katso palvelut
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden border border-slate-200 shadow-[0_24px_60px_-30px_rgba(15,40,70,0.45)]">
            <Image
              src="/demos/assets/auto-car.jpg"
              alt="Huollettu auto"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section id="palvelut" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-[#0088c7] uppercase">
              Palvelumme
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Kaikki mitä autosi tarvitsee.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center bg-[#0088c7]/10 text-[#0088c7]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="ajanvaraus"
        className="border-t border-slate-200 bg-[#e8f5fb]"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#0088c7]" />
            <div>
              <p className="font-semibold text-slate-900">
                Tarvitsetko apua? Ota yhteyttä!
              </p>
              <p className="mt-1 text-sm text-slate-600">
                050 123 4567 · ma–pe 8–17 · info@paikallinenauto.fi
              </p>
            </div>
          </div>
          <a
            href="#yhteys"
            className="inline-flex items-center justify-center border-2 border-[#0088c7] bg-white px-6 py-3 text-sm font-semibold text-[#0088c7] transition hover:bg-[#0088c7] hover:text-white"
          >
            Yhteystiedot
          </a>
        </div>
      </section>

      <section id="yhteys" className="scroll-mt-24 border-t border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-slate-900">
              Varaa huoltoaika
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Kerro automerkki, malli ja tarve — palaamme asiaan saman päivän
              aikana. Tämä on AVIEXin demo-konsepti: oikealla sivustolla lomake
              ohjaisi suoraan korjaamolle.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="border-l-2 border-[#0088c7] pl-4">
                Kaikki automerkit ja -mallit
              </li>
              <li className="border-l-2 border-[#0088c7] pl-4">
                Renkaat, tuulilasit ja lisävarusteasennukset
              </li>
              <li className="border-l-2 border-[#0088c7] pl-4">
                Selkeä hinta ennen työn aloitusta
              </li>
            </ul>
          </div>
          <form className="border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <label className="block text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
              Nimi
              <input
                name="nimi"
                className="mt-2 w-full border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0088c7]"
                placeholder="Etunimi Sukunimi"
              />
            </label>
            <label className="mt-4 block text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
              Puhelin
              <input
                name="puhelin"
                className="mt-2 w-full border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0088c7]"
                placeholder="050 123 4567"
              />
            </label>
            <label className="mt-4 block text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
              Viesti
              <textarea
                name="viesti"
                rows={4}
                className="mt-2 w-full resize-y border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0088c7]"
                placeholder="Esim. VW Golf 2018, määräaikaishuolto"
              />
            </label>
            <button
              type="button"
              className="mt-5 w-full bg-[#0088c7] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0074aa]"
            >
              Lähetä pyyntö
            </button>
            <Link
              href="/yhteystiedot"
              className="mt-4 inline-block text-xs text-slate-500 underline-offset-4 hover:text-[#0088c7] hover:underline"
            >
              Haluatko samanlaisen sivuston yrityksellesi? → AVIEX
            </Link>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Paikallinen Auto · Demo-konsepti AVIEXilta</p>
          <p>www.aviex.fi</p>
        </div>
      </footer>
    </div>
  );
}

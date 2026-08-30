import Image from "next/image";
import Link from "next/link";
import { Cog, Phone, Snowflake, Wrench } from "lucide-react";
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
    <div className="min-h-screen bg-[#f8fafc] text-[#1a2332]">
      <DemoBanner name="Paikallinen Auto" tone="light" />

      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 items-center justify-center bg-[#0c4a6e] text-white shadow-[0_8px_24px_-8px_rgba(12,74,110,0.5)]">
              <Cog className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-[#0c4a6e] uppercase">
                Paikallinen
              </p>
              <p className="font-display text-base font-semibold tracking-[0.08em] text-slate-900">
                AUTO
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-[0.68rem] font-medium tracking-[0.16em] text-slate-500 uppercase lg:flex">
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
                      ? "text-[#0c4a6e]"
                      : "transition hover:text-[#0c4a6e]"
                  }
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <a
            href="tel:+358501234567"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c4a6e]"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/95 to-[#f8fafc]/40" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-[#0c4a6e] uppercase">
              Luotettavaa palvelua paikallisesti
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.06] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Autoasi parhaissa käsissä.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-[1.75] text-slate-600">
              Monipuoliset huolto- ja korjauspalvelut kaikille automerkeille.
              Ammattitaitoista työtä, selkeä hinnoittelu ja reilu palvelu —
              ilman yllätyksiä.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#yhteys"
                className="inline-flex items-center justify-center bg-[#0c4a6e] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_12px_32px_-12px_rgba(12,74,110,0.55)] transition hover:bg-[#0a3d5c]"
              >
                Ota yhteyttä
              </a>
              <a
                href="#palvelut"
                className="inline-flex items-center justify-center border border-slate-300/80 bg-white/70 px-8 py-4 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-[#0c4a6e] hover:text-[#0c4a6e]"
              >
                Katso palvelut
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden border border-white/60 shadow-[0_32px_64px_-32px_rgba(15,40,70,0.35)] ring-1 ring-slate-200/80">
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

      <section
        id="palvelut"
        className="scroll-mt-24 border-t border-slate-200/80 bg-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-[#0c4a6e] uppercase">
              Palvelumme
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Kaikki mitä autosi tarvitsee.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group overflow-hidden border border-slate-200/80 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,40,70,0.25)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="p-7">
                    <span className="inline-flex h-10 w-10 items-center justify-center bg-[#0c4a6e]/8 text-[#0c4a6e]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-5 font-display text-lg text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
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
        className="border-t border-slate-200/80 bg-gradient-to-r from-[#e0f2fe] to-[#f0f9ff]"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#0c4a6e] shadow-sm">
              <Phone className="h-5 w-5" />
            </span>
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
            className="inline-flex items-center justify-center border-2 border-[#0c4a6e] bg-white px-7 py-3.5 text-sm font-semibold text-[#0c4a6e] transition hover:bg-[#0c4a6e] hover:text-white"
          >
            Yhteystiedot
          </a>
        </div>
      </section>

      <section id="yhteys" className="scroll-mt-24 border-t border-slate-200/80 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.03em] text-slate-900">
              Varaa huoltoaika
            </h2>
            <p className="mt-5 text-sm leading-[1.75] text-slate-600">
              Kerro automerkki, malli ja tarve — palaamme asiaan saman päivän
              aikana. Tämä on AVIEXin demo-konsepti: oikealla sivustolla lomake
              ohjaisi suoraan korjaamolle.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              {[
                "Kaikki automerkit ja -mallit",
                "Renkaat, tuulilasit ja lisävarusteasennukset",
                "Selkeä hinta ennen työn aloitusta",
              ].map((item) => (
                <li
                  key={item}
                  className="border-l border-[#0c4a6e]/40 pl-4 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <form className="border border-slate-200/80 bg-white p-7 shadow-[0_24px_48px_-32px_rgba(15,40,70,0.12)] sm:p-9">
            <label className="block text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Nimi
              <input
                name="nimi"
                className="mt-2 w-full border border-slate-200 bg-[#fafbfc] px-4 py-3 text-sm outline-none transition focus:border-[#0c4a6e] focus:bg-white"
                placeholder="Etunimi Sukunimi"
              />
            </label>
            <label className="mt-5 block text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Puhelin
              <input
                name="puhelin"
                className="mt-2 w-full border border-slate-200 bg-[#fafbfc] px-4 py-3 text-sm outline-none transition focus:border-[#0c4a6e] focus:bg-white"
                placeholder="050 123 4567"
              />
            </label>
            <label className="mt-5 block text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
              Viesti
              <textarea
                name="viesti"
                rows={4}
                className="mt-2 w-full resize-y border border-slate-200 bg-[#fafbfc] px-4 py-3 text-sm outline-none transition focus:border-[#0c4a6e] focus:bg-white"
                placeholder="Esim. VW Golf 2018, määräaikaishuolto"
              />
            </label>
            <button
              type="button"
              className="mt-6 w-full bg-[#0c4a6e] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0a3d5c]"
            >
              Lähetä pyyntö
            </button>
            <Link
              href="/yhteystiedot"
              className="mt-5 inline-block text-xs text-slate-500 underline-offset-4 transition hover:text-[#0c4a6e] hover:underline"
            >
              Haluatko samanlaisen sivuston yrityksellesi? → AVIEX
            </Link>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#0f172a] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-9 text-xs tracking-wide sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Paikallinen Auto · Demo-konsepti AVIEXilta</p>
          <p className="text-slate-500">www.aviex.fi</p>
        </div>
      </footer>
    </div>
  );
}

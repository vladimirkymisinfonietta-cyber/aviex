import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import { DemoBanner } from "@/components/demos/demo-banner";

const pizzas = [
  {
    name: "San Daniele",
    price: "15,90 €",
    detail: "Tomaatti, mozzarella, prosciutto, rucola, parmesaani",
  },
  {
    name: "Bufala",
    price: "14,90 €",
    detail: "Tomaatti, bufala-mozzarella, basilika, oliiviöljy",
  },
  {
    name: "Salsiccia",
    price: "14,50 €",
    detail: "Tomaatti, mozzarella, italialainen makkara, sipuli",
  },
  {
    name: "Funghi",
    price: "13,90 €",
    detail: "Tomaatti, mozzarella, metsäsienet, valkosipuli",
  },
];

export function PizzeriaDemo() {
  return (
    <div className="min-h-screen bg-[#0f0b09] text-[#f6ebe3]">
      <DemoBanner name="Paikallinen Pizzeria" tone="dark" />

      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/[0.06] px-5 py-6 sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af6a]/30 bg-[#d4af6a]/5 text-[#d4af6a]">
            <Flame className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[0.62rem] font-medium tracking-[0.32em] text-[#d4af6a]/80 uppercase">
              Paikallinen
            </p>
            <p className="font-display text-sm font-semibold tracking-[0.24em] text-white uppercase">
              Pizzeria
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-[0.65rem] tracking-[0.22em] text-white/50 uppercase md:flex">
          {["Etusivu", "Menu", "Meistä", "Ajankohtaista", "Yhteystiedot"].map(
            (item, i) => (
              <a
                key={item}
                href={
                  item === "Menu"
                    ? "#menu"
                    : item === "Yhteystiedot"
                      ? "#yhteys"
                      : "#"
                }
                className={
                  i === 0
                    ? "text-[#d4af6a] transition hover:text-[#e8c98a]"
                    : "transition hover:text-white"
                }
              >
                {item}
              </a>
            ),
          )}
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
        <div className="relative min-h-[460px] overflow-hidden lg:min-h-[780px]">
          <Image
            src="/demos/assets/pizza-oven.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b09] via-[#0f0b09]/50 to-[#0f0b09]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,106,0.12),transparent_55%)]" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10 lg:max-w-xl lg:pb-24 lg:pl-10">
            <p className="text-[0.65rem] font-medium tracking-[0.28em] text-[#d4af6a] uppercase">
              Aitoa makua puuliedeltä
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.75rem]">
              Paikallinen
              <br />
              <span className="text-white/80">Pizzeria</span>
            </h1>
            <p className="mt-6 max-w-md text-[0.95rem] leading-[1.8] text-white/60">
              Napolilainen perinne, suomalaiset raaka-aineet. Pizza nousee
              puuliedessä — rapea reunus, pehmeä keskusta, rehellinen maku.
            </p>
            <div className="relative mt-10 aspect-[4/3] w-full max-w-md overflow-hidden border border-white/10 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)]">
              <Image
                src="/demos/assets/pizza-close.jpg"
                alt="Puuliedessä paistettu pizza"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>

        <div
          id="menu"
          className="flex flex-col justify-between border-t border-white/[0.06] bg-[#14100d] px-6 py-12 sm:px-10 lg:border-t-0 lg:border-l lg:py-20"
        >
          <div>
            <p className="text-[0.65rem] font-medium tracking-[0.28em] text-[#d4af6a] uppercase">
              Suositut pizzat
            </p>
            <ul className="mt-10 space-y-0">
              {pizzas.map((pizza) => (
                <li
                  key={pizza.name}
                  className="group border-b border-white/[0.06] py-7 last:border-0"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h2 className="font-serif text-xl text-white transition group-hover:text-[#d4af6a] sm:text-2xl">
                      {pizza.name}
                    </h2>
                    <span className="shrink-0 font-display text-sm tracking-wide text-[#d4af6a]/90">
                      {pizza.price}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/45">
                    {pizza.detail}
                  </p>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-[#d4af6a] transition hover:text-[#e8c98a]"
            >
              Katso koko menu
              <span aria-hidden>→</span>
            </a>
          </div>

          <div id="yhteys" className="mt-14 space-y-5">
            <a
              href="#yhteys"
              className="inline-flex w-full items-center justify-center bg-[#d4af6a] px-8 py-4 text-[0.72rem] font-semibold tracking-[0.18em] text-[#14100d] uppercase transition hover:bg-[#e0bf7a] sm:w-auto"
            >
              Varaa pöytä
            </a>
            <p className="text-xs tracking-wide text-white/35">
              Demo-konsepti · Aukiolo ma–su 11–21 · Keskusta
            </p>
            <Link
              href="/yhteystiedot"
              className="inline-block text-xs tracking-wide text-white/45 underline-offset-4 transition hover:text-[#d4af6a] hover:underline"
            >
              Haluatko samanlaisen sivuston? → AVIEX
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

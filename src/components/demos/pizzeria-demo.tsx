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
    <div className="min-h-screen bg-[#120e0c] text-[#f4ebe3]">
      <DemoBanner name="Paikallinen Pizzeria" tone="dark" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c4a574]/40 text-[#c4a574]">
            <Flame className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-[#c4a574] uppercase">
              Paikallinen
            </p>
            <p className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
              Pizzeria
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-[0.7rem] tracking-[0.18em] text-white/65 uppercase md:flex">
          {["Etusivu", "Menu", "Meistä", "Ajankohtaista", "Yhteystiedot"].map(
            (item, i) => (
              <a
                key={item}
                href={item === "Menu" ? "#menu" : item === "Yhteystiedot" ? "#yhteys" : "#"}
                className={
                  i === 0
                    ? "border-b border-[#c4a574] pb-1 text-white"
                    : "transition hover:text-white"
                }
              >
                {item}
              </a>
            ),
          )}
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-0 px-5 pb-16 lg:grid-cols-2 lg:px-8 lg:pb-0">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]">
          <Image
            src="/demos/assets/pizza-oven.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120e0c] via-[#120e0c]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120e0c]/80 to-transparent lg:from-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10 lg:max-w-xl lg:pb-20">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-[#c4a574] uppercase">
              Aitoa makua puuliedeltä
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.4rem]">
              Paikallinen
              <br />
              Pizzeria
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Napolilainen perinne, suomalaiset raaka-aineet. Pizza nousee
              puuliedessä — rapea reunus, pehmeä keskusta, rehellinen maku.
            </p>
            <div className="relative mt-8 aspect-[4/3] w-full max-w-md overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/demos/assets/pizza-close.jpg"
                alt="Puuliedessä paistettu pizza"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>
        </div>

        <div
          id="menu"
          className="flex flex-col justify-between border-t border-white/10 bg-[#16110e] px-6 py-10 sm:px-10 lg:border-t-0 lg:border-l lg:py-16"
        >
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-[#c4a574] uppercase">
              Suositut pizzat
            </p>
            <ul className="mt-8 space-y-7">
              {pizzas.map((pizza) => (
                <li
                  key={pizza.name}
                  className="border-b border-white/10 pb-6 last:border-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-serif text-xl text-white sm:text-2xl">
                      {pizza.name}
                    </h2>
                    <span className="shrink-0 text-sm font-medium tracking-wide text-[#c4a574]">
                      {pizza.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/55">{pizza.detail}</p>
                </li>
              ))}
            </ul>
            <a
              href="#menu"
              className="mt-6 inline-flex text-sm tracking-wide text-[#c4a574] transition hover:text-[#e0c38a]"
            >
              Katso koko menu →
            </a>
          </div>

          <div id="yhteys" className="mt-12 space-y-4">
            <a
              href="#yhteys"
              className="inline-flex w-full items-center justify-center bg-[#c4a574] px-8 py-4 text-sm font-semibold tracking-[0.14em] text-[#1a120c] uppercase transition hover:bg-[#d4b784] sm:w-auto"
            >
              Varaa pöytä
            </a>
            <p className="text-xs text-white/45">
              Demo-konsepti · Aukiolo: ma–su 11–21 · Keskusta
            </p>
            <Link
              href="/yhteystiedot"
              className="inline-block text-xs text-white/55 underline-offset-4 hover:text-white hover:underline"
            >
              Haluatko samanlaisen sivuston? → AVIEX
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

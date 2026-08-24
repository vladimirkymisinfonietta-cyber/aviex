# AVIEX

Markkinointisivusto suomalaiselle digitoimistolle **AVIEX** — modernit verkkosivut pienyrityksille kiinteällä hinnalla.

Uudelleenrakennettu Next.js-sovellus alkuperäisen Lovable-sivuston pohjalta: [aviex-digi-rakentaja.lovable.app](https://aviex-digi-rakentaja.lovable.app/).

## Mitä sisältyy

- Etusivu (hero, palvelut, prosessi, hinnoittelu, demot, FAQ, CTA)
- Sivut: `/palvelut`, `/hinnoittelu`, `/prosessi`, `/usein-kysyttya`, `/yhteystiedot`, `/tietosuoja`, `/kayttoehdot`
- Tarjouspyyntölomake (lokaali mock — ei taustapalvelua)
- Suomi UI, Sora + Manrope, teal-aksentti

## Käynnistys

```bash
npm install
npm run dev -- --port 43123
```

Avaa [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Skriptit

| Komento | Kuvaus |
| --- | --- |
| `npm run dev` | Kehityspalvelin |
| `npm run build` | Tuotantobuild |
| `npm run start` | Käynnistä tuotantobuild |
| `npm run lint` | ESLint |

## Teknologia

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.

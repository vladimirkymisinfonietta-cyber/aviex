# AVIEX — www.aviex.fi

Markkinointisivusto suomalaiselle digitoimistolle **AVIEX**: modernit verkkosivut pienyrityksille kiinteällä hinnalla.

## Mitä sisältyy

- Etusivu (hero, palvelut, prosessi, hinnoittelu, demot, FAQ, CTA)
- Sivut: `/palvelut`, `/hinnoittelu`, `/prosessi`, `/usein-kysyttya`, `/yhteystiedot`, `/tietosuoja`, `/kayttoehdot`
- Avattavat demo-konseptit (neutraalit nimet):
  - [/demo/paikallinen-pizzeria](/demo/paikallinen-pizzeria)
  - [/demo/keskus-parturi](/demo/keskus-parturi)
  - [/demo/paikallinen-auto](/demo/paikallinen-auto)
- Tarjouspyyntölomake (lokaali mock — ei taustapalvelua)
- Brändi: **www.aviex.fi**

## Käynnistys paikallisesti

```bash
npm install
npm run dev
```

Avaa [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Julkaisu osoitteeseen www.aviex.fi

Helpoin tapa on **Vercel** (Next.js:n tekijät):

1. Vie tämä repo GitHubiin / GitLabiin / Bitiin (jos ei ole jo).
2. Mene [vercel.com](https://vercel.com) → **Add New Project** → valitse repo.
3. Framework: **Next.js** (tunnistuu automaattisesti). Deploy.
4. Saat väliaikaisen osoitteen, esim. `aviex.vercel.app`.
5. Liitä oma domain:
   - Vercel → Project → **Settings → Domains**
   - Lisää `aviex.fi` ja `www.aviex.fi`
6. DNS (domainin tarjoajalla, esim. Cloudflare / Louhi / Google Domains):
   - `www` → CNAME → `cname.vercel-dns.com` (Vercel näyttää tarkan arvon)
   - juuridomain `aviex.fi` → A-record Vercelin ohjeen mukaan, tai redirect `www`:ään
7. Odota DNS-propagaatio (usein minuutteja, joskus tunteja). SSL tulee automaattisesti.

### Vaihtoehdot

| Alusta | Sopii kun |
| --- | --- |
| **Vercel** | Suositus Next.js:lle, helpoin domain + SSL |
| **Netlify** | Sama idea, Next-adapter |
| **Oma VPS** | `npm run build && npm run start` + Nginx/Caddy reverse proxy + Let's Encrypt |

### Domain-vinkki

Osta/siirrä `aviex.fi` suomalaiselta tai kansainväliseltä rekisteröijältä, osoita DNS Verceliin, ja aseta ensisijaiseksi osoitteeksi **https://www.aviex.fi** (redirect ilman www → www).

Lomake tallentaa nyt vain selaimen konsoliin. Julkaisun jälkeen kytke esim. Formspree, Resend tai oma API-reitti `/api/contact`.

## Skriptit

| Komento | Kuvaus |
| --- | --- |
| `npm run dev` | Kehityspalvelin (portti 43123) |
| `npm run build` | Tuotantobuild |
| `npm run start` | Käynnistä tuotantobuild |
| `npm run lint` | ESLint |

## Teknologia

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.

export const navLinks = [
  { label: "Etusivu", href: "/" },
  { label: "Palvelut", href: "/palvelut" },
  { label: "Hinnoittelu", href: "/hinnoittelu" },
  { label: "Prosessi", href: "/prosessi" },
  { label: "Usein kysyttyä", href: "/usein-kysyttya" },
  { label: "Yhteystiedot", href: "/yhteystiedot" },
] as const;

export const footerGroups = [
  {
    title: "Sivusto",
    links: [
      { label: "Etusivu", href: "/" },
      { label: "Palvelut", href: "/palvelut" },
      { label: "Hinnoittelu", href: "/hinnoittelu" },
      { label: "Prosessi", href: "/prosessi" },
    ],
  },
  {
    title: "Tietoa",
    links: [
      { label: "Usein kysyttyä", href: "/usein-kysyttya" },
      { label: "Yhteystiedot", href: "/yhteystiedot" },
      { label: "Demot", href: "/#esimerkit" },
    ],
  },
  {
    title: "Ehdot",
    links: [
      { label: "Tietosuoja", href: "/tietosuoja" },
      { label: "Käyttöehdot", href: "/kayttoehdot" },
    ],
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Verkkosivut",
    description:
      "Moderni ja responsiivinen verkkosivu, joka tekee yrityksestäsi ammattimaisen näköisen kaikilla laitteilla.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Selkeä visuaalinen ilme, joka tukee yrityksesi brändiä ja tekee tärkeistä asioista helppoja löytää.",
  },
  {
    number: "03",
    title: "SEO",
    description:
      "Perus-SEO ja selkeä rakenne, jotka auttavat asiakkaita löytämään yrityksesi helpommin.",
  },
  {
    number: "04",
    title: "Ylläpito",
    description:
      "Tekninen ylläpito ja sovitut päivitykset, jotta sinun ei tarvitse käyttää aikaa sivuston hoitamiseen.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Keskustellaan",
    description:
      "Käymme läpi yrityksesi tavoitteet, tarpeet ja tärkeimmät asiakkaat.",
  },
  {
    number: "02",
    title: "Suunnittelemme",
    description:
      "Rakennamme sivustolle selkeän rakenteen ja yrityksellesi sopivan visuaalisen ilmeen.",
  },
  {
    number: "03",
    title: "Rakennamme",
    description:
      "Toteutamme nopean, responsiivisen ja viimeistellyn verkkosivun.",
  },
  {
    number: "04",
    title: "Julkaisemme",
    description: "Viimeistelemme kaiken ja viemme sivuston verkkoon.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "299 €",
    monthly: "29 €/kk",
    tagline: "Yksinkertainen ja ammattimainen verkkosivu pienelle yritykselle.",
    features: [
      "1–3 sivua",
      "Moderni design",
      "Mobiilioptimointi",
      "AI-avusteinen sisällöntuotanto",
      "Yhteydenottolomake",
      "Perus-SEO",
      "Hosting",
      "SSL",
      "Tekninen ylläpito",
    ],
    cta: "Pyydä tarjous Starterista",
    featured: false,
  },
  {
    name: "Business",
    price: "499 €",
    monthly: "39 €/kk",
    tagline: "Paras vaihtoehto useimmille pienyrityksille.",
    features: [
      "4–6 sivua",
      "Räätälöity design",
      "Mobiilioptimointi",
      "AI-avusteinen sisällöntuotanto",
      "Yhteydenottolomake",
      "Google Maps",
      "Perus-SEO",
      "Hosting",
      "SSL",
      "Tekninen ylläpito",
      "Pienet sisältöpäivitykset",
    ],
    cta: "Pyydä tarjous Businessista",
    featured: true,
  },
  {
    name: "Premium",
    price: "799 €",
    monthly: "69 €/kk",
    tagline:
      "Kun haluat verkkosivulta enemmän ominaisuuksia ja enemmän joustavuutta.",
    features: [
      "7–10 sivua",
      "Räätälöity premium-design",
      "Mobiilioptimointi",
      "Edistynyt SEO",
      "Ajanvaraus",
      "Monikielisyys",
      "Kehittyneemmät ominaisuudet",
      "Hosting",
      "SSL",
      "Tekninen ylläpito",
      "Priorisoitu asiakaspalvelu",
    ],
    cta: "Pyydä tarjous Premiumista",
    featured: false,
  },
] as const;

export type DemoSlug =
  | "paikallinen-pizzeria"
  | "keskus-parturi"
  | "paikallinen-auto";

export type DemoConcept = {
  slug: DemoSlug;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  theme: "warm" | "dark" | "steel";
  tagline: string;
  highlights: string[];
  menuOrServices: { title: string; detail: string; price?: string }[];
  cta: string;
};

export const demos: DemoConcept[] = [
  {
    slug: "paikallinen-pizzeria",
    name: "Paikallinen Pizzeria",
    category: "Ravintola",
    description:
      "Ruoka edellä rakennettu konsepti: menu, tunnelma ja pöytävaraus heti etusivulla.",
    image: "/demos/demo-pizzeria.jpg",
    alt: "Demo-konsepti: ravintolan verkkosivun etusivu, jossa pizzakuva ja menu.",
    theme: "warm",
    tagline: "Uunituoretta pizzaa. Auki joka päivä.",
    highlights: ["Menu heti etusivulla", "Pöytävaraus", "Mobiiliystävällinen"],
    menuOrServices: [
      {
        title: "Margherita",
        detail: "Tomaatti, mozzarella, basilika",
        price: "12 €",
      },
      {
        title: "Diavola",
        detail: "Tomaatti, mozzarella, salami, chili",
        price: "14 €",
      },
      {
        title: "Quattro Formaggi",
        detail: "Neljä juustoa, hunaja",
        price: "15 €",
      },
      {
        title: "Paikallinen",
        detail: "Talon erikoisuus, sesonkiraaka-aineet",
        price: "16 €",
      },
    ],
    cta: "Varaa pöytä",
  },
  {
    slug: "keskus-parturi",
    name: "Keskus Parturi",
    category: "Parturi",
    description:
      "Tumma ja pelkistetty konsepti, jossa palvelut ja ajanvaraus ovat keskiössä.",
    image: "/demos/demo-barber.jpg",
    alt: "Demo-konsepti: parturin verkkosivun etusivu, jossa palveluhinnasto ja ajanvaraus.",
    theme: "dark",
    tagline: "Siisti leikkaus. Selkeä ajanvaraus.",
    highlights: ["Hinnasto näkyvillä", "Ajanvaraus", "Minimalistinen ilme"],
    menuOrServices: [
      { title: "Hiustenleikkaus", detail: "Pesu + leikkaus", price: "32 €" },
      { title: "Parta", detail: "Muotoilu ja hoito", price: "22 €" },
      {
        title: "Leikkaus + parta",
        detail: "Kokonaisuus yhdessä käynnissä",
        price: "48 €",
      },
      { title: "Lasten leikkaus", detail: "Alle 12 v.", price: "24 €" },
    ],
    cta: "Varaa aika",
  },
  {
    slug: "paikallinen-auto",
    name: "Paikallinen Auto",
    category: "Autohuolto",
    description:
      "Selkeä palvelurakenne, huoltokategoriat ja matalan kynnyksen yhteydenotto.",
    image: "/demos/demo-auto.jpg",
    alt: "Demo-konsepti: autohuollon verkkosivun etusivu, jossa palvelukategoriat.",
    theme: "steel",
    tagline: "Huolto, renkaat ja korjaus — ilman turhaa odottelua.",
    highlights: ["Selkeät palvelut", "Nopea yhteydenotto", "Luottamus edellä"],
    menuOrServices: [
      {
        title: "Määräaikaishuolto",
        detail: "Öljyt, suodattimet, tarkastus",
        price: "alk. 149 €",
      },
      {
        title: "Rengasvaihto",
        detail: "Vaihto + tasapainotus",
        price: "alk. 49 €",
      },
      {
        title: "Ilmastointihuolto",
        detail: "Täyttö ja diagnostiikka",
        price: "alk. 89 €",
      },
      {
        title: "Jarruhuolto",
        detail: "Tarkastus ja korjaus",
        price: "tarjous",
      },
    ],
    cta: "Pyydä huoltoaika",
  },
] as const;

export function getDemo(slug: string): DemoConcept | undefined {
  return demos.find((demo) => demo.slug === slug);
}

export const whyItems = [
  {
    title: "Moderni toteutus",
    description:
      "Rakennamme sivustoja, jotka näyttävät nykyaikaisilta ja toimivat kaikilla laitteilla.",
  },
  {
    title: "Tehokas tuotanto",
    description:
      "AI-avusteinen työskentely nopeuttaa tuotantoa ilman että lopputuloksen laadusta tingitään.",
  },
  {
    title: "Selkeä hinnoittelu",
    description:
      "Ei turhaa monimutkaisuutta. Näet heti mitä saat ja mitä palvelu maksaa.",
  },
  {
    title: "Kasvua ajatellen",
    description:
      "Sivusto voidaan myöhemmin laajentaa uusiin toimintoihin tarpeidesi kasvaessa.",
  },
] as const;

export const trustItems = [
  {
    title: "Selkeä prosessi",
    description:
      "Tiedät koko ajan missä vaiheessa projekti on ja mitä seuraavaksi tapahtuu.",
  },
  {
    title: "Selkeä hinnoittelu",
    description:
      "Kiinteä aloitushinta ja kiinteä kuukausimaksu. Ei yllätyksiä laskussa.",
  },
  {
    title: "Suomalaisille yrityksille",
    description:
      "Suomenkielinen palvelu ja sisältö, joka on kirjoitettu suomalaiselle asiakkaalle.",
  },
] as const;

export const faqs = [
  {
    question: "Kuinka nopeasti verkkosivu valmistuu?",
    answer:
      "Useimmat pienemmät projektit voidaan toteuttaa muutamassa päivässä, kun tarvittavat tiedot ja materiaalit ovat saatavilla.",
  },
  {
    question: "Tarvitsenko itse teknistä osaamista?",
    answer: "Et. AVIEX hoitaa sovitun verkkosivuprojektin teknisen toteutuksen.",
  },
  {
    question: "Voinko muuttaa sivustoa myöhemmin?",
    answer: "Kyllä. Sivustoa voidaan päivittää ja laajentaa myöhemmin.",
  },
  {
    question: "Onko kuukausimaksu pakollinen?",
    answer:
      "Kyllä. Kaikkiin AVIEX-verkkosivupaketteihin kuuluu jatkuva kuukausipalvelu, joka kattaa hostingin, SSL-suojauksen ja teknisen ylläpidon.",
  },
  {
    question: "Voiko AVIEX tehdä verkkokaupan?",
    answer:
      "Kyllä. Verkkokaupat ja muut laajemmat toteutukset voidaan suunnitella erillisen tarjouksen perusteella.",
  },
] as const;

export const heroHighlights = [
  "Selkeä hinnoittelu",
  "Nopea toteutus",
  "Mobiilioptimointi",
] as const;

export const siteUrl = "https://www.aviex.fi";

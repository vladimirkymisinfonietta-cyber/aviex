import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AVIEX — Moderni verkkosivu. Enemmän asiakkaita.",
    template: "%s — AVIEX",
  },
  description:
    "AVIEX suunnittelee ja rakentaa moderneja verkkosivuja suomalaisille pienyrityksille nopeasti ja kiinteällä hinnalla. www.aviex.fi",
  authors: [{ name: "AVIEX" }],
  openGraph: {
    siteName: "AVIEX",
    locale: "fi_FI",
    type: "website",
    url: siteUrl,
    title: "AVIEX — Moderni verkkosivu. Enemmän asiakkaita.",
    description:
      "AVIEX suunnittelee ja rakentaa moderneja verkkosivuja suomalaisille pienyrityksille nopeasti ja kiinteällä hinnalla.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIEX — Moderni verkkosivu. Enemmän asiakkaita.",
    description:
      "Modernit verkkosivut suomalaisille yrityksille. www.aviex.fi",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fi"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}

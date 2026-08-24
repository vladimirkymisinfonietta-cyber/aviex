import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  title: {
    default: "AVIEX — Moderni verkkosivu. Enemmän asiakkaita.",
    template: "%s — AVIEX",
  },
  description:
    "AVIEX suunnittelee ja rakentaa moderneja verkkosivuja suomalaisille pienyrityksille nopeasti ja kiinteällä hinnalla.",
  authors: [{ name: "AVIEX" }],
  openGraph: {
    siteName: "AVIEX",
    locale: "fi_FI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fi"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

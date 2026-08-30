import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { demos } from "@/lib/content";

export function DemosSection() {
  return (
    <section
      id="esimerkit"
      className="section-y scroll-mt-24 border-t border-border/80 bg-background"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Työt"
          title="Esimerkkejä toteutuksista."
          description="Demo-konsepteja, joilla näytämme millaisia moderneja verkkosivuja AVIEX voi rakentaa eri toimialoille. Avaa konsepti ja selaa sitä kuten oikeaa sivustoa."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <Reveal key={demo.slug} delay={index * 90}>
              <Link
                href={`/demo/${demo.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-border/80 bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/15 hover:shadow-luxury focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-brand"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={demo.image}
                    alt={demo.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-end bg-ink/60 p-6 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 border-b border-accent-brand pb-1 text-sm tracking-wide text-ink-foreground">
                      Katso konsepti
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 border border-white/10 bg-ink/80 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.16em] text-ink-foreground uppercase backdrop-blur-md">
                    Demo-konsepti
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8 lg:p-9">
                  <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {demo.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent-brand">
                    {demo.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {demo.description}
                  </p>
                  <span className="mt-8 block h-px w-8 bg-foreground/15 transition-all duration-500 group-hover:w-16 group-hover:bg-accent-brand" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-sm text-muted-foreground">
            Esimerkit ovat AVIEXin omia demo-konsepteja, eivät asiakastöitä.{" "}
            <Link
              href="/yhteystiedot"
              className="border-b border-accent-brand pb-0.5 text-foreground transition-colors duration-200 hover:text-accent-brand"
            >
              Pyydä oma konsepti
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

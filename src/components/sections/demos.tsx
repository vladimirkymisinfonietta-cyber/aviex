import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { demos } from "@/lib/content";

export function DemosSection() {
  return (
    <section
      id="esimerkit"
      className="section-y scroll-mt-24 border-t border-border bg-background"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Työt"
          title="Esimerkkejä toteutuksista."
          description="Demo-konsepteja, joilla näytämme millaisia moderneja verkkosivuja AVIEX voi rakentaa eri toimialoille."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <Reveal key={demo.name} delay={index * 90}>
              <article className="group flex h-full flex-col border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-elevated">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-ink">
                  <Image
                    src={demo.image}
                    alt={demo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-ink/70 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="border-b border-accent-brand pb-1 text-sm text-ink-foreground">
                      Katso konsepti
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 bg-ink/90 px-2 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-ink-foreground uppercase backdrop-blur-sm">
                    Demo-konsepti
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {demo.category}
                  </p>
                  <h3 className="mt-3 text-lg text-foreground">{demo.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {demo.description}
                  </p>
                  <span className="mt-6 block h-px w-10 bg-foreground/20 transition-all duration-500 group-hover:w-20 group-hover:bg-accent-brand" />
                </div>
              </article>
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

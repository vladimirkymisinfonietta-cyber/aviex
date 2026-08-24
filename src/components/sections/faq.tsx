import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/content";

type FaqSectionProps = {
  showHeading?: boolean;
};

export function FaqSection({ showHeading = true }: FaqSectionProps) {
  return (
    <section className="section-y border-t border-border bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {showHeading ? (
          <SectionHeading
            eyebrow="Usein kysyttyä"
            title="Kysymyksiä ja vastauksia."
            description="Jos et löydä vastausta, voit kysyä suoraan tarjouspyynnön yhteydessä."
          />
        ) : (
          <div />
        )}
        <Reveal delay={80}>
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="rounded-none py-6 text-left font-display text-base text-foreground hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

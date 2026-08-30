import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-ink-muted" : "text-muted-foreground";
  const titleColor = tone === "dark" ? "text-ink-foreground" : "text-foreground";

  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "dark" && "text-accent-brand")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.08] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.85rem]",
          titleColor,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-relaxed", muted)}>{description}</p>
      ) : null}
    </Reveal>
  );
}

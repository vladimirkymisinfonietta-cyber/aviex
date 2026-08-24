import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="AVIEX etusivu"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative block h-4 w-4 rotate-45 border transition-colors duration-300",
          tone === "dark" ? "border-foreground" : "border-ink-foreground",
        )}
      >
        <span className="absolute inset-[3px] bg-accent-brand transition-transform duration-500 group-hover:scale-75" />
      </span>
      <span
        className={cn(
          "font-display text-[1.0625rem] font-semibold tracking-[0.22em]",
          tone === "dark" ? "text-foreground" : "text-ink-foreground",
        )}
      >
        AVIEX
      </span>
    </Link>
  );
}

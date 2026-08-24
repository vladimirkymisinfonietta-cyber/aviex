import Link from "next/link";
import { cn } from "@/lib/utils";

type DemoBannerProps = {
  name: string;
  tone?: "dark" | "light";
};

export function DemoBanner({ name, tone = "dark" }: DemoBannerProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl",
        dark
          ? "border-white/10 bg-black/60 text-white"
          : "border-slate-200 bg-white/90 text-slate-700",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-xs sm:px-8">
        <p className={dark ? "text-white/65" : "text-slate-500"}>
          Demo-konsepti AVIEXilta ·{" "}
          <span className={dark ? "text-white" : "text-slate-900 font-medium"}>
            {name}
          </span>
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/#esimerkit"
            className={cn(
              "transition",
              dark ? "text-white/65 hover:text-white" : "hover:text-[#0088c7]",
            )}
          >
            ← Takaisin
          </Link>
          <Link
            href="/yhteystiedot"
            className={cn(
              "hidden px-3 py-1.5 transition sm:inline-flex",
              dark
                ? "border border-white/20 hover:border-white/50"
                : "border border-slate-300 hover:border-[#0088c7] hover:text-[#0088c7]",
            )}
          >
            Pyydä oma
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-background/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/80 shadow-[0_1px_0_oklch(100%_0_0_/_0.04)_inset]"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Päävalikko">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-1 text-sm transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-brand",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent-brand transition-transform duration-300 group-hover:scale-x-100",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1">
          <Link
            href="/yhteystiedot"
            className="btn-base btn-solid hidden min-h-0 px-5 py-2.5 sm:inline-flex"
          >
            Pyydä tarjous
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Sulje valikko" : "Avaa valikko"}
            aria-expanded={open}
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-foreground transition-colors duration-200 hover:text-accent-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden border-t bg-background transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open
            ? "max-h-[85vh] border-border opacity-100"
            : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav
          className="container-page flex flex-col py-2"
          aria-label="Mobiilivalikko"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-4 font-display text-lg text-foreground transition-colors duration-200 hover:text-accent-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/yhteystiedot"
            onClick={() => setOpen(false)}
            className="btn-base btn-solid mt-4 mb-4 w-full"
          >
            Pyydä tarjous
          </Link>
        </nav>
      </div>
    </header>
  );
}

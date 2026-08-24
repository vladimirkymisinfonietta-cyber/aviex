import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerGroups } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)] md:py-20">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Modernit verkkosivut suomalaisille yrityksille.
          </p>
          <a
            href="mailto:info@aviex.fi"
            className="mt-6 inline-block border-b border-ink-border pb-0.5 text-sm text-ink-foreground transition-colors duration-200 hover:border-accent-brand hover:text-accent-brand"
          >
            info@aviex.fi
          </a>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-ink-muted uppercase">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-foreground/80 transition-colors duration-200 hover:text-accent-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page flex flex-col gap-3 border-t border-ink-border py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AVIEX</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/tietosuoja"
            className="transition-colors duration-200 hover:text-accent-brand"
          >
            Tietosuoja
          </Link>
          <Link
            href="/kayttoehdot"
            className="transition-colors duration-200 hover:text-accent-brand"
          >
            Käyttöehdot
          </Link>
          <span>Suomi</span>
        </div>
      </div>
    </footer>
  );
}

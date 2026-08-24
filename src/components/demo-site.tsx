import { AutoDemo } from "@/components/demos/auto-demo";
import { ParturiDemo } from "@/components/demos/parturi-demo";
import { PizzeriaDemo } from "@/components/demos/pizzeria-demo";
import type { DemoSlug } from "@/lib/content";

export function DemoSite({ slug }: { slug: DemoSlug }) {
  switch (slug) {
    case "paikallinen-pizzeria":
      return <PizzeriaDemo />;
    case "keskus-parturi":
      return <ParturiDemo />;
    case "paikallinen-auto":
      return <AutoDemo />;
    default:
      return null;
  }
}

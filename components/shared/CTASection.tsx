import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection({
  title,
  description,
  ctaLabel,
  href,
  className
}: {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl bg-cta-gradient px-6 py-10 text-white shadow-glow md:px-12 md:py-14",
        className
      )}
    >
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h3>
          <p className="max-w-2xl text-white/80">{description}</p>
        </div>
        <Button asChild variant="secondary" size="lg">
          <Link href={href}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}

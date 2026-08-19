import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  subtitle,
  location,
  date,
  imageSrc,
  imageAlt,
  className
}: {
  title: string;
  subtitle?: string;
  location?: string;
  date?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-12 text-white shadow-glow md:px-12", className)}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || "Event highlight"}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      ) : null}
      {imageSrc ? (
        <div className="absolute inset-0 bg-slate-950/40" />
      ) : (
        <div className="absolute inset-0 bg-mesh opacity-70" />
      )}
      {imageSrc ? <div className="absolute inset-0 bg-hero-gradient opacity-60" /> : null}
      <div className="relative z-10 space-y-4">
        <h1 className="font-display text-3xl font-semibold text-white md:text-5xl">
          <span className="heading-backdrop-super">{title}</span>
        </h1>
        {subtitle ? <p className="max-w-2xl text-white/80 md:text-lg">{subtitle}</p> : null}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          {location ? (
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {location}
            </span>
          ) : null}
          {date ? (
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}

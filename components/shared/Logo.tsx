import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showPartnerLogo?: boolean;
};

export function Logo({ className, showPartnerLogo = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex min-w-0 items-center gap-2 sm:gap-3", className)}>
      <Image
        src="/faith-impact-logo-main.png"
        alt="Faith Impact Forum logo"
        width={320}
        height={96}
        className="h-9 w-auto max-w-[150px] shrink-0 object-contain sm:h-10 md:h-12 md:max-w-none"
        priority
      />
      {showPartnerLogo ? (
        <>
          <span aria-hidden="true" className="h-8 w-px shrink-0 bg-slate-300 sm:h-10 md:h-12" />
          <Image
            src="/PU-LOGO.svg"
            alt="Pentecost University logo"
            width={1705}
            height={394}
            unoptimized
            className="h-10 w-auto shrink-0 object-contain sm:h-11 md:h-12"
          />
        </>
      ) : null}
    </Link>
  );
}

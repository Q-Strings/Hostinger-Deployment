import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

import { eventNavItems } from "@/lib/data/events-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center">
            <Link href="/" className="inline-flex shrink-0 items-center">
              <Image
                src="/faith-impact-logo-main.png"
                alt="Faith Impact Forum logo"
                width={320}
                height={96}
                className="h-10 w-auto object-contain md:h-16"
              />
            </Link>
          </div>
          <p className="text-sm text-slate-600">
            Faith Impact Forum elevates faith-based philanthropy and social investment
            as strategic co-creators of sustainable development across Africa and the Globe.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Mail className="h-4 w-4" />
            cespsi@pentvars.edu.gh
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[10px] font-semibold text-slate-500">
              T
            </span>
            (+233)-0302417057
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            Accra, Ghana
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/register">Register</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/sponsor/become-sponsor">Sponsor & Exhibit</Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Events</p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            {eventNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-4 text-slate-500">
            <Linkedin className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © 2026 Faith Impact Forum. All rights reserved.
      </div>
    </footer>
  );
}

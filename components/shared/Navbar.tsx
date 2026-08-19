"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { eventNavItems } from "@/lib/data/events-data";
import { cn } from "@/lib/utils";

const sponsorLinks = [
  { title: "Meet our Sponsors & Exhibitors", href: "/sponsor/meet-sponsors" },
  { title: "Meet our Partners", href: "/sponsor/partners" },
  { title: "Sponsor us / Partner with us", href: "/sponsor/become-sponsor" }
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Contact Us", href: "/contact" },
  { title: "FAQ", href: "/faq" }
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll;

      if (current <= 0) {
        setIsVisible(true);
        lastScroll = current;
        return;
      }

      if (Math.abs(delta) < 6) return;

      if (delta > 0) {
        // Scrolling down: hide header.
        setIsVisible(false);
      } else if (delta < 0) {
        // Scrolling up: show header.
        setIsVisible(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <Logo showPartnerLogo />
        <nav className="hidden items-center gap-6 lg:flex">
          <Link className="text-sm font-semibold text-slate-700 hover:text-brand-deep" href="/">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-deep">
                Events
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {eventNavItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-deep">
                Sponsor & Exhibit
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {sponsorLinks.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks
            .filter((link) => link.title !== "Home")
            .map((link) => (
              <Link
                key={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-brand-deep"
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          <Button asChild variant="dark">
            <Link href="/register">Register Now</Link>
          </Button>
        </nav>
        <div className="lg:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={12}
              className="w-[min(92vw,360px)] rounded-3xl p-4"
            >
              <div className="flex items-center justify-end">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Menu
                </span>
              </div>
              <div className="mt-5 space-y-4">
                <Link className={navLinkClass()} href="/" onClick={handleClose}>
                  Home
                </Link>
                <Accordion type="single" collapsible className="rounded-2xl border border-slate-200">
                  <AccordionItem value="events" className="border-none">
                    <AccordionTrigger className="px-4">Events</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 px-4 pb-4">
                        {eventNavItems.map((item) => (
                          <Link
                            className={navLinkClass("text-sm")}
                            href={item.href}
                            key={item.href}
                            onClick={handleClose}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="rounded-2xl border border-slate-200">
                  <AccordionItem value="sponsor" className="border-none">
                    <AccordionTrigger className="px-4">Sponsor & Exhibit</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 px-4 pb-4">
                        {sponsorLinks.map((item) => (
                          <Link
                            className={navLinkClass("text-sm")}
                            href={item.href}
                            key={item.href}
                            onClick={handleClose}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {navLinks
                  .filter((link) => link.title !== "Home")
                  .map((link) => (
                    <Link
                      className={navLinkClass()}
                      href={link.href}
                      key={link.href}
                      onClick={handleClose}
                    >
                      {link.title}
                    </Link>
                  ))}
                <Button className="w-full" variant="dark" asChild>
                  <Link href="/register" onClick={handleClose}>
                    Register Now
                  </Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function navLinkClass(extra?: string) {
  return cn(
    "flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700",
    extra
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Gavel,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Sparkles,
  Users
} from "lucide-react";

import { HomeHero } from "@/components/sections/HomeHero";
import { FocusTabs } from "@/components/sections/FocusTabs";
import { CTASection } from "@/components/shared/CTASection";
import { ContactForm } from "@/components/shared/ContactForm";
import { EventCard } from "@/components/shared/EventCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/data/events-data";
import { siteImages } from "@/lib/data/images";

const attendees = [
  { label: "FBO Leaders and Managers", icon: HeartHandshake },
  { label: "Philanthropy Support Organisations", icon: Sparkles },
  { label: "Researchers", icon: GraduationCap },
  { label: "Church networks", icon: Landmark },
  { label: "Development partners and funders", icon: Building2 },
  { label: "Academic institutions", icon: Users },
  { label: "Private sector", icon: Briefcase },
  { label: "Policymakers", icon: Gavel }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HomeHero />

      <Reveal>
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Overview"
              title="FBOs are pillars of hope, healing, education, health, and crisis response."
              description="Faith Impact Forum elevates FBOs as strategic co-creators of development, aligning philanthropic capital with measurable social impact."
            />
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="dark">
                <Link href="/register">Register Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-56 overflow-hidden rounded-3xl shadow-soft md:h-64">
              <Image
                src={siteImages.homeOverview.src}
                alt={siteImages.homeOverview.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
                  The Forum Value
                </p>
              <h3 className="font-display text-2xl font-semibold text-slate-900">
                A premium convening that aligns faith, philanthropy, and investment for
                sustainable outcomes.
              </h3>
                <p className="text-sm text-slate-600">
                  Together we build evidence, policy alignment, and catalytic funding
                  mechanisms that strengthen community systems.
                </p>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                Four convenings, one shared agenda, and a growing ecosystem of faith-led
                impact partners.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="events" className="space-y-8">
          <SectionHeading
            eyebrow="Events"
            title="Explore the Forum Series"
            description="Join the global forum or select a regional convening."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Who Can Attend"
            title="A curated, multi-sector audience"
            description="The forum is designed for leaders shaping philanthropic and social investment ecosystems."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {attendees.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-brand-deep">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Forum Pillars"
            title="What we focus on"
            description="From evidence and capital to partnership and delivery, the forum accelerates tangible outcomes."
          />
          <FocusTabs />
        </section>
      </Reveal>

      <Reveal>
        <CTASection
          title="Ready to join the next forum?"
          description="Secure your seat and connect with leading faith-based organizations, investors, and development partners."
          ctaLabel="Register Now"
          href="/register"
        />
      </Reveal>

      <Reveal>
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact Us"
              title="Connect with the organizing team"
              description="Email us at cespsi@pentvars.edu.gh or send a message below."
            />
            <div className="relative h-52 overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={siteImages.homeContact.src}
                alt={siteImages.homeContact.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft">
              <p className="text-sm text-slate-600">
                We will respond with event details, partnership opportunities, and
                registration support within 48 hours.
              </p>
            </div>
          </div>
          <ContactForm />
        </section>
      </Reveal>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { events } from "@/lib/data/events-data";
import {
  buildBreadcrumbSchema,
  buildEventSchema,
  createMetadata
} from "@/lib/seo";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) {
    return {
      title: "Event Not Found | Faith Impact Forum",
      description: "The requested Faith Impact Forum event could not be found."
    };
  }

  return createMetadata({
    title: `${event.title} | Faith Impact Forum`,
    description: event.summary,
    path: `/events/${event.slug}`,
    keywords: [
      event.shortTitle,
      event.location,
      event.slug,
      "faith impact forum event",
      "faith-based organizations",
      "social investment"
    ],
    image: event.image.card,
    imageAlt: event.image.alt
  });
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) {
    notFound();
  }

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: event.title, path: `/events/${event.slug}` }
    ]),
    buildEventSchema(event)
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-16">
        <PageHeader
          title={event.title}
          subtitle={event.summary}
          location={event.location}
          date={event.date}
          imageSrc={event.image.hero}
          imageAlt={event.image.alt}
        />

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Event Overview"
            title="A strategic convening for faith-based social investment"
            description={event.overview}
          />
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
              Location
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{event.location}</p>
            <p className="mt-4 text-sm text-slate-600">
              Engage with leaders, funders, and innovators shaping faith-led
              development.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Forum Objectives"
            title="What this forum will deliver"
            description="Focused outcomes designed to elevate FBOs as co-creators of sustainable development."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {event.objectives.map((objective) => (
              <Card key={objective}>
                <CardHeader>
                  <CardTitle>{objective}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Strategic focus to strengthen partnerships and measurable
                    impact.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Strategic Working Groups"
            title="Collaborative tracks for focused action"
          />
          <Accordion type="single" collapsible className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft">
            {event.workingGroups.map((group) => (
              <AccordionItem key={group.title} value={group.title} className="border-b border-slate-200 last:border-none">
                <AccordionTrigger>{group.title}</AccordionTrigger>
                <AccordionContent>{group.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Key Partners"
            title="Institutions and networks collaborating on this forum"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.partners.map((partner) => (
              <div key={partner} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm font-semibold text-slate-700 shadow-soft">
                {partner}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Expected Outcomes"
            title="What participants can expect"
          />
          <div className="grid gap-3">
            {event.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm text-slate-600 shadow-soft">
                {outcome}
              </div>
            ))}
          </div>
        </section>

        <CTASection
          title="Reserve your place at this forum"
          description="Register now to connect with faith-based leaders, funders, and development partners."
          ctaLabel="Register Now"
          href="/register"
        />
      </div>
    </>
  );
}

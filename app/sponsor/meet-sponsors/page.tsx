import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StructuredData } from "@/components/shared/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sponsors } from "@/lib/data/sponsors";
import { CTASection } from "@/components/shared/CTASection";
import { siteImages } from "@/lib/data/images";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createMetadata
} from "@/lib/seo";

const title = "Faith Impact Forum Sponsors & Exhibitors";
const description =
  "Discover the sponsors and exhibitors supporting Faith Impact Forum and advancing faith-based philanthropy and social investment.";

export const metadata = createMetadata({
  title,
  description,
  path: "/sponsor/meet-sponsors",
  keywords: [
    "faith impact forum sponsors",
    "event exhibitors",
    "conference sponsors",
    "philanthropy event supporters"
  ]
});

export default function MeetSponsorsPage() {
  const structuredData = [
    buildWebPageSchema({
      title,
      description,
      path: "/sponsor/meet-sponsors"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Sponsors", path: "/sponsor/meet-sponsors" }
    ])
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-12">
        <PageHeader
          title="Meet our Sponsors & Exhibitors"
          subtitle="A premium community of supporters accelerating faith-based philanthropy and social investment."
          imageSrc={siteImages.sponsorHero.src}
          imageAlt={siteImages.sponsorHero.alt}
        />
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Sponsors"
            title="Partners powering the forum"
            description="We are grateful for our sponsors and exhibitors championing innovation and impact."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name}>
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
                    {sponsor.tier}
                  </p>
                  <CardTitle>{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <CTASection
          title="Showcase your impact"
          description="Join as a sponsor or exhibitor to connect with faith-based leaders and development partners."
          ctaLabel="Sponsor Us"
          href="/sponsor/become-sponsor"
        />
      </div>
    </>
  );
}

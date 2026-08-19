import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StructuredData } from "@/components/shared/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { partners } from "@/lib/data/sponsors";
import { CTASection } from "@/components/shared/CTASection";
import { siteImages } from "@/lib/data/images";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createMetadata
} from "@/lib/seo";

const title = "Faith Impact Forum Partners";
const description =
  "Meet the strategic partners and collaborators helping Faith Impact Forum advance evidence-driven faith-based social investment.";

export const metadata = createMetadata({
  title,
  description,
  path: "/sponsor/partners",
  keywords: [
    "faith impact forum partners",
    "strategic partners",
    "conference collaborators",
    "faith-based social investment partners"
  ]
});

export default function PartnersPage() {
  const structuredData = [
    buildWebPageSchema({
      title,
      description,
      path: "/sponsor/partners"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Partners", path: "/sponsor/partners" }
    ])
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-12">
        <PageHeader
          title="Meet our Partners"
          subtitle="Strategic collaborators enabling evidence-driven faith-based social investment."
          imageSrc={siteImages.partnersHero.src}
          imageAlt={siteImages.partnersHero.alt}
        />
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Partners"
            title="Collaborators advancing the forum mission"
            description="Together we convene, learn, and mobilize resources for sustainable community impact."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <Card key={partner.name}>
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-sky">
                    {partner.focus}
                  </p>
                  <CardTitle>{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <CTASection
          title="Become a strategic partner"
          description="Collaborate with Faith Impact Forum to expand evidence, capital, and networks."
          ctaLabel="Partner With Us"
          href="/sponsor/become-sponsor"
        />
      </div>
    </>
  );
}

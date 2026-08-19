import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { StructuredData } from "@/components/shared/StructuredData";
import { SponsorForm } from "@/components/sections/SponsorForm";
import { siteImages } from "@/lib/data/images";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createMetadata
} from "@/lib/seo";

const title = "Sponsor Faith Impact Forum";
const description =
  "Become a sponsor, exhibitor, or strategic partner for Faith Impact Forum and connect with faith-based leaders, funders, and policymakers.";

export const metadata = createMetadata({
  title,
  description,
  path: "/sponsor/become-sponsor",
  keywords: [
    "sponsor faith impact forum",
    "conference sponsorship",
    "event exhibitors",
    "strategic partnership opportunities"
  ]
});

export default function BecomeSponsorPage() {
  const structuredData = [
    buildWebPageSchema({
      title,
      description,
      path: "/sponsor/become-sponsor"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Sponsor", path: "/sponsor/become-sponsor" }
    ])
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-12">
        <PageHeader
          title="Sponsor Us / Partner with Us"
          subtitle="Join the premium ecosystem of organizations supporting faith-based social investment."
          imageSrc={siteImages.sponsorHero.src}
          imageAlt={siteImages.sponsorHero.alt}
        />
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Sponsorship"
            title="Become a sponsor or partner"
            description="Showcase your organization and connect with FBO leaders, funders, and policymakers."
          />
          <SponsorForm />
        </section>
        <CTASection
          title="Explore sponsorship opportunities"
          description="We offer tailored packages for sponsors, exhibitors, and strategic partners."
          ctaLabel="Meet our Sponsors"
          href="/sponsor/meet-sponsors"
        />
      </div>
    </>
  );
}

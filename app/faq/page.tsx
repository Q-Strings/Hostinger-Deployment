import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StructuredData } from "@/components/shared/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faq";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebPageSchema,
  createMetadata
} from "@/lib/seo";

const title = "Faith Impact Forum FAQ";
const description =
  "Find answers about Faith Impact Forum registration, attendance, sponsorship, partnerships, and event participation.";

export const metadata = createMetadata({
  title,
  description,
  path: "/faq",
  keywords: [
    "faith impact forum faq",
    "event questions",
    "registration help",
    "sponsorship questions"
  ]
});

export default function FaqPage() {
  const structuredData = [
    buildWebPageSchema({
      title,
      description,
      path: "/faq"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-12">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about participating in the Faith Impact Forum."
        />
        <section className="space-y-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to common questions"
            description="Reach out if you need more information about registration, participation, or partnerships."
          />
          <Accordion type="single" collapsible className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="border-b border-slate-200 last:border-none">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </>
  );
}

import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import Image from "next/image";

import { ContactForm } from "@/components/shared/ContactForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteImages } from "@/lib/data/images";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createMetadata,
  siteConfig
} from "@/lib/seo";

const title = "Contact Faith Impact Forum";
const description =
  "Contact the Faith Impact Forum organizing team for partnerships, sponsorships, registration support, and media enquiries.";

export const metadata = createMetadata({
  title,
  description,
  path: "/contact",
  keywords: [
    "contact faith impact forum",
    "event enquiries",
    "partnership enquiries",
    "conference contact"
  ]
});

export default function ContactPage() {
  const structuredData = [
    buildWebPageSchema({
      title,
      description,
      path: "/contact",
      type: "ContactPage",
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone
      }
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ])
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-12">
        <PageHeader
          title="Contact Us"
          subtitle="Reach the organizing team for partnership, registration, and media inquiries."
          imageSrc={siteImages.contactHero.src}
          imageAlt={siteImages.contactHero.alt}
        />

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Get in Touch"
              title="We would love to hear from you"
              description="Email us at cespsi@pentvars.edu.gh or send a message through the form."
            />
            <div className="relative h-52 overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={siteImages.contactHero.src}
                alt={siteImages.contactHero.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
            </div>
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-4 w-4" />
                cespsi@pentvars.edu.gh
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-4 w-4" />
                (+233)-0302417057
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                Accra, Ghana
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              <iframe
                title="Pentecost University, Sowutuom, Ghana"
                src="https://www.google.com/maps?q=Pentecost%20University%2C%20Sowutuom%2C%20Ghana&output=embed"
                className="h-64 w-full md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <Linkedin className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
            </div>
          </div>
          <ContactForm />
        </section>
      </div>
    </>
  );
}

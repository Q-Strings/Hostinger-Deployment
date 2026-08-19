import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StructuredData } from "@/components/shared/StructuredData";
import { RegisterForm } from "@/components/sections/RegisterForm";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  createMetadata
} from "@/lib/seo";

const title = "Register for Faith Impact Forum";
const description =
  "Register for upcoming Faith Impact Forum events and connect with faith-based organizations, funders, and development partners across Africa and beyond.";

export const metadata = createMetadata({
  title,
  description,
  path: "/register",
  keywords: [
    "event registration",
    "conference registration",
    "faith-based conference",
    "philanthropy event registration"
  ]
});

export default function RegisterPage() {
  const structuredData = [
    buildWebPageSchema({
      title,
      description,
      path: "/register"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Register", path: "/register" }
    ])
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="space-y-12">
        <PageHeader
          title="Register for Faith Impact Forum"
          subtitle="Secure your seat for the forum series and connect with leaders shaping faith-based philanthropy and social investment."
        />
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Registration"
            title="Complete your registration"
            description="Please provide your details and select your preferred event and attendance type."
          />
          <RegisterForm />
        </section>
      </div>
    </>
  );
}

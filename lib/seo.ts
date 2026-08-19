import type { Metadata } from "next";

import type { EventData } from "@/lib/data/events-data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type WebPageSchemaInput = {
  title: string;
  description: string;
  path: string;
  type?: string;
  mainEntity?: Record<string, unknown>;
};

export const siteConfig = {
  name: "Faith Impact Forum",
  defaultTitle: "Faith Impact Forum | Global Philanthropy & Social Investment",
  description:
    "Faith Impact Forum convenes faith-based organizations, funders, researchers, and development partners to align philanthropy and social investment for sustainable impact in Africa and beyond.",
  url: "https://faithimpactforum.org",
  defaultImage: "/images/home-hero.jpg",
  email: "cespsi@pentvars.edu.gh",
  phone: "+233302417057",
  locality: "Accra",
  country: "Ghana",
  locale: "en_US",
  keywords: [
    "faith impact forum",
    "faith-based organizations",
    "faith-based philanthropy",
    "social investment",
    "philanthropy conference",
    "development partners",
    "Africa philanthropy",
    "sustainable development"
  ]
} as const;

function normalizePublicPath(path: string) {
  if (path === "/") {
    return path;
  }

  if (path.endsWith("/")) {
    return path;
  }

  const lastSegment = path.split("/").pop() ?? "";

  if (lastSegment.includes(".")) {
    return path;
  }

  return `${path}/`;
}

const monthNumbers: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12"
};

function unique(values: string[]) {
  return Array.from(new Set(values));
}

function parseEventDateRange(date: string) {
  const match = date
    .trim()
    .match(/^([A-Za-z]+)\s+(\d{1,2})(?:-(\d{1,2}))?,\s*(\d{4})$/);

  if (!match) {
    return null;
  }

  const [, monthName, startDay, endDay, year] = match;
  const month = monthNumbers[monthName.toLowerCase()];

  if (!month) {
    return null;
  }

  return {
    startDate: `${year}-${month}-${startDay.padStart(2, "0")}`,
    endDate: `${year}-${month}-${(endDay ?? startDay).padStart(2, "0")}`
  };
}

export function absoluteUrl(path = "/") {
  if (!path || path === "/") {
    return siteConfig.url;
  }

  const normalizedPath = normalizePublicPath(
    path.startsWith("/") ? path : `/${path}`
  );
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteConfig.defaultImage,
  imageAlt,
  type = "website"
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords: unique([...siteConfig.keywords, ...keywords]),
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/faith-impact-logo-main.png"),
    image: absoluteUrl(siteConfig.defaultImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressCountry: siteConfig.country
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["English"]
      }
    ]
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    inLanguage: "en"
  };
}

export function buildWebPageSchema({
  title,
  description,
  path,
  type = "WebPage",
  mainEntity
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    },
    ...(mainEntity ? { mainEntity } : {})
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildFaqSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function buildEventsCollectionSchema(events: EventData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Faith Impact Forum Events",
    description:
      "Explore upcoming Faith Impact Forum events across global and regional locations.",
    url: absoluteUrl("/events"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: events.map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: event.title,
        url: absoluteUrl(`/events/${event.slug}`),
        description: event.summary
      }))
    }
  };
}

export function buildEventSchema(event: EventData) {
  const dates = parseEventDateRange(event.date);

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.overview,
    url: absoluteUrl(`/events/${event.slug}`),
    image: [absoluteUrl(event.image.card)],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: event.location
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email
    },
    ...(dates ?? {})
  };
}

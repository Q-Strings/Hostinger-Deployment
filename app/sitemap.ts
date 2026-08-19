import { MetadataRoute } from "next";

import { events } from "@/lib/data/events-data";
import { absoluteUrl } from "@/lib/seo";

const staticPageLastModified: Record<string, string> = {
  "/": "2026-03-24",
  "/register": "2026-03-24",
  "/contact": "2026-03-24",
  "/faq": "2026-03-24",
  "/sponsor/become-sponsor": "2026-03-24",
  "/sponsor/partners": "2026-03-24",
  "/sponsor/meet-sponsors": "2026-03-24"
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: staticPageLastModified["/"],
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/register"),
      lastModified: staticPageLastModified["/register"],
      changeFrequency: "daily",
      priority: 0.95
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: staticPageLastModified["/contact"],
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/faq"),
      lastModified: staticPageLastModified["/faq"],
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/sponsor/become-sponsor"),
      lastModified: staticPageLastModified["/sponsor/become-sponsor"],
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/sponsor/partners"),
      lastModified: staticPageLastModified["/sponsor/partners"],
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/sponsor/meet-sponsors"),
      lastModified: staticPageLastModified["/sponsor/meet-sponsors"],
      changeFrequency: "monthly",
      priority: 0.75
    }
  ];

  const eventPages: MetadataRoute.Sitemap = events.map((event) => ({
    url: absoluteUrl(`/events/${event.slug}`),
    lastModified: event.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  return [...staticPages, ...eventPages];
}

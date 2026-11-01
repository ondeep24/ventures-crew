import type { MetadataRoute } from "next";
import { getPublicRadioSessions } from "@/lib/radio/sessions";

const siteUrl = "https://www.venturescrew.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/radio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/stories`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/lifestyle/clothing`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const publishedSessions: MetadataRoute.Sitemap = getPublicRadioSessions().map(
    (session) => ({
      url: `${siteUrl}/radio/${session.slug}`,
      changeFrequency: "yearly",
      priority: 0.7,
    }),
  );

  return [...staticRoutes, ...publishedSessions];
}

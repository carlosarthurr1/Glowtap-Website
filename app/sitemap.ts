import { MetadataRoute } from "next";
import { getAllSEOPageSlugs } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const seoPages = getAllSEOPageSlugs().map((slug) => ({
    url: `https://glowtap.app/seo/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const mainPages = [
    {
      url: "https://glowtap.app",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: "https://glowtap.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://glowtap.app/termos-de-uso",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: "https://glowtap.app/politica-de-privacidade",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [...mainPages, ...seoPages];
}

import { reviews } from "@/data/reviews";
import type { MetadataRoute } from "next";

const BASE_URL = "https://betrx.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/sportsbooks`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/bonuses`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/casino`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const reviewPages = reviews.map((r) => ({
    url: `${BASE_URL}/review/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...reviewPages];
}

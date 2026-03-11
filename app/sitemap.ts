import { MetadataRoute } from "next";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://your-domain.ru";

  const categoryUrls = categories.flatMap((cat) => [
    { url: `${base}/catalog/${cat.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...cat.subcategories.map((sub) => ({
      url: `${base}/catalog/${cat.slug}/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]);

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/catalog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/kontakty`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...categoryUrls,
  ];
}

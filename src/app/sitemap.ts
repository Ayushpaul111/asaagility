import { MetadataRoute } from "next";

const baseUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.asaagility.com").replace(
    /\/$/,
    ""
  );

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    url: `${baseUrl}/products`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/stores`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/about-us`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
];

const productSlugs = [
  "e-rickshaw-battery",
  "e-loader-battery",
  "e-bike-scooty-battery",
];

const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
  url: `${baseUrl}/products/${slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.85,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...productRoutes];
}

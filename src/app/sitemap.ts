import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://elsje.codes";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resume/`,
      lastModified: new Date(),
    },
  ];
}

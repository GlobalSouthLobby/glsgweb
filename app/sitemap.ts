import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gslgusa.org",
      lastModified: new Date(),
    },
    {
      url: "https://gslgusa.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://gslgusa.org/contact",
      lastModified: new Date(),
    },
    {
      url: "https://gslgusa.org/atwork",
      lastModified: new Date(),
    },
    {
      url: "https://gslgusa.org/profile/ezeh",
      lastModified: new Date(),
    },
    {
      url: "https://gslgusa.org/profile/katherine",
      lastModified: new Date(),
    },
  ];
}
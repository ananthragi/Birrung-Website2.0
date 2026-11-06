import type { MetadataRoute } from "next";
import { posts } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-24");
  const pages = [
    "",
    "/privacy",
    "/terms",
    "/cookies",
    "/careers",
    "/blog",
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.6 : 0.7,
  }));
}

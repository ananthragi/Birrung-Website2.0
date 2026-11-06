import type { MetadataRoute } from "next";
import { description, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} | Digital Signage Made Easy`,
    short_name: siteName,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff8f4",
    theme_color: "#14110f",
    lang: "en-AU",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}

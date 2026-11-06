export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://birrung.com.au";

export const siteName = "Birrung";

export const description =
  "Digital signage software to create, schedule, and manage content on every screen you own, from one place.";

export const email = "info@birrung.com.au";

// export const phoneDisplay = "+1 (555) 000-1234";
export const phoneDisplay = "";

export const phoneHref = "tel:+15550001234";

export const address = "New location Coming Soon";

export const states = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"] as const;

export const nav = [
  { href: "home", label: "Home" },
  { href: "solution", label: "Solution" },
  { href: "reviews", label: "Reviews" },
  { href: "pricing", label: "Pricing" },
] as const;

export type ModalName = "demo" | "trial";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://birrung.com.au";

export const siteName = "Birrung";

export const description =
  "Digital signage software to create, schedule, and manage content on every screen you own, from one place.";

export const email = "info@birrung.com.au";

// export const phoneDisplay = "+1 (555) 000-1234";
export const phoneDisplay = "";

export const phoneHref = "tel:+15550001234";

export const address = "New location Coming Soon";

export const states = [
  "NSW",
  "VIC",
  "QLD",
  "WA",
  "SA",
  "TAS",
  "ACT",
  "NT",
] as const;

export const nav = [
  { href: "home", label: "Home" },
  { href: "solution", label: "Solution" },
  { href: "reviews", label: "Reviews" },
  { href: "pricing", label: "Pricing" },
] as const;

/** Set `show: false` to hide a solution from nav, footer, home, sitemap, and its page route. */
export type SolutionPage = {
  slug: string;
  href: string;
  label: string;
  show: boolean;
};

export const solutionPages: SolutionPage[] = [
  { slug: "retail", href: "/solution/retail", label: "Retail", show: true },
  {
    slug: "hospitality",
    href: "/solution/hospitality",
    label: "Hospitality",
    show: true,
  },
  {
    slug: "corporate",
    href: "/solution/corporate",
    label: "Corporate offices",
    show: true,
  },
  {
    slug: "healthcare",
    href: "/solution/healthcare",
    label: "Healthcare",
    show: true,
  },
  {
    slug: "education",
    href: "/solution/education",
    label: "Education",
    show: true,
  },
  {
    slug: "gyms",
    href: "/solution/gyms",
    label: "Gyms and fitness",
    show: true,
  },
  {
    slug: "worship",
    href: "/solution/worship",
    label: "Places of worship",
    show: true,
  },
];

export const visibleSolutionPages = solutionPages.filter((page) => page.show);

export function isSolutionShown(slug: string) {
  const page = solutionPages.find((entry) => entry.slug === slug);
  return page?.show === true;
}

export type ModalName = "demo" | "trial";

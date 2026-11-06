import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteProvider } from "@/components/site-provider";
import { Sprite } from "@/components/sprite";
import { JsonLd } from "@/lib/jsonld";
import { description, email, phoneHref, siteName, siteUrl, states } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Birrung | Digital Signage Made Easy",
    template: "%s | Birrung",
  },
  description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "digital signage",
    "digital signage software",
    "screen management",
    "video advertising",
    "playlist scheduling",
    "dayparting",
    "Birrung",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName,
    title: "Birrung | Digital Signage Made Easy",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Birrung | Digital Signage Made Easy",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#14110f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      email,
      telephone: phoneHref.replace("tel:", ""),
      description,
      logo: `${siteUrl}/icon.svg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "",
        addressRegion: "",
      },
      areaServed: states.map((code) => ({ "@type": "AdministrativeArea", name: code })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      inLanguage: "en-AU",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      offers: [
        {
          "@type": "Offer",
          name: "Broadcast",
          price: "10",
          priceCurrency: "AUD",
          description: "Broadcast plan, $10 per screen per month.",
          url: `${siteUrl}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "Spectrum",
          description: "Customised enterprise plan.",
          url: `${siteUrl}/#pricing`,
        },
      ],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <JsonLd data={organization} />
        <Sprite />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <SiteProvider>
          <Header />
          {children}
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}

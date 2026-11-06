import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { description } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Birrung | Digital Signage Made Easy" },
  description,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}

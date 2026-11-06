import type { Metadata } from "next";
import Link from "next/link";
import { Doc } from "@/components/doc";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the Birrung site.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Doc eyebrow="Missing page" title="Page not found" lede="That address is not on this site." path="/404">
      <p>
        <Link href="/">Back to the homepage</Link>
      </p>
    </Doc>
  );
}

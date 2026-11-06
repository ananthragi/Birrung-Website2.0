import type { Metadata } from "next";
import { Doc } from "@/components/doc";
import { email } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Send Birrung a short introduction and the work you want to do.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers", url: "/careers" },
};

export default function CareersPage() {
  return (
    <Doc eyebrow="Company" title="Careers" lede="We read every note. Send a short introduction and the work you want to do." path="/careers">
      <p>
        <a className="btn btn-gold" href={`mailto:${email}?subject=Careers`}>
          Email the team
        </a>
      </p>
    </Doc>
  );
}

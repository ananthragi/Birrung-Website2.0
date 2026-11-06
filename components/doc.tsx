import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/lib/jsonld";
import { siteUrl } from "@/lib/site";

export function Doc({
  eyebrow,
  title,
  lede,
  path,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  path: string;
  children: React.ReactNode;
}) {
  const url = `${siteUrl}${path}`;
  return (
    <main id="content" className="doc">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: title, item: url },
          ],
        }}
      />
      <div className="wrap">
        <Reveal as="article" className="doc-panel" immediate>
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">/ {title}</li>
            </ol>
          </nav>
          <p className="eyebrow">
            <i /> {eyebrow}
          </p>
          <h1>{title}</h1>
          {lede ? <p className="lede">{lede}</p> : null}
          <div className="prose">{children}</div>
        </Reveal>
      </div>
    </main>
  );
}

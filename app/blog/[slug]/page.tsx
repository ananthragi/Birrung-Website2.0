import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Doc } from "@/components/doc";
import { JsonLd } from "@/lib/jsonld";
import { getPost, posts } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.body,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.body, url: `/blog/${post.slug}`, type: "article" },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Doc eyebrow="Field notes" title={post.title} path={`/blog/${post.slug}`}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.body,
          mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
          author: { "@type": "Organization", name: "Birrung" },
          publisher: { "@type": "Organization", name: "Birrung" },
        }}
      />
      <p>{post.body}</p>
      <p>
        <Link href="/blog">All field notes</Link>
      </p>
    </Doc>
  );
}

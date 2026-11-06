import type { Metadata } from "next";
import Link from "next/link";
import { Doc } from "@/components/doc";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Field notes",
  description: "A few things customers already tell us, gathered in one place.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Field notes", url: "/blog" },
};

export default function BlogPage() {
  return (
    <Doc eyebrow="Journal" title="Field notes" lede="A few things customers already tell us, gathered in one place." path="/blog">
      <div className="journal">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </article>
        ))}
      </div>
    </Doc>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CountUp } from "@/components/count-up";
import { SolutionStage } from "@/components/solution-stage";
import { OpenButton } from "@/components/open-button";
import { Reveal } from "@/components/reveal";
import { Stars } from "@/components/sprite";
import { StepShow } from "@/components/step-show";
import { JsonLd } from "@/lib/jsonld";
import { WhyBirrung } from "@/components/why-birrung";
import { industries, industryBySlug } from "@/lib/industries";
import { siteUrl } from "@/lib/site";

const steps = [
  ["01", "Create Your Account", "Signup for a free trial and start accessing your dashboard.", ""],
  ["02", "Upload or Build Playlist", "Choose a local file or build a playlist of your choice or choose Youtube content instead. The choice is yours.", ""],
  ["03", "Generate Codes", "Once content is uploaded and activation codes are generated, Job is Done.", ""],
  ["04", "Publish to Screens", "Birrung app or non native application, start broadcasting your content.", ""],
];

const reviews = [
  ["Birrung has completely changed how we display our promotions. Our sales increased by 15% in the first month!", "Sarah Johnson", "Fashion Boutique Owner", "S"],
  ["Setting up the screens was a breeze. We didn't need any special hardware, just our existing TVs.", "Michael Chen", "Grocery Store Manager", "M"],
  ["The remote management is a lifesaver. I can update all 10 of our locations from home in minutes.", "Emma Wilson", "Retail Operations", "E"],
  ["Stunning templates and very easy to use. Highly recommend Birrung for any retail business.", "David Ross", "Electronics Store", "D"],
] as const;

function Copy({ text, className }: { text: string; className?: string }) {
  return text.split(/\n\n+/).map((part) => (
    <p className={className} key={part}>
      {part}
    </p>
  ));
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.pageTitle,
    description: industry.lede,
    alternates: { canonical: `/solution/${industry.slug}` },
    openGraph: {
      title: industry.pageTitle,
      description: industry.title,
      url: `/solution/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) notFound();

  return (
    <main id="content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: industry.label, item: `${siteUrl}/solution/${industry.slug}` },
          ],
        }}
      />

      <section className="hero sol-hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/#venues">Venues</Link>
                </li>
                <li aria-current="page">/ {industry.label}</li>
              </ol>
            </nav>
            <p className="eyebrow">
              <i /> {industry.eyebrow}
            </p>
            <h1 className={industry.title.length > 80 ? "is-long" : undefined}>{industry.title}</h1>
            <Copy text={industry.lede} className="hero-copy" />
            <div className="hero-actions">
              <OpenButton className="btn btn-gold" modal="trial">
                {industry.heroPrimary}
              </OpenButton>
              {industry.heroSecondary ? (
                industry.heroSecondary.toLowerCase().includes("demo") ? (
                  <OpenButton className="btn btn-line" modal="demo">
                    {industry.heroSecondary}
                  </OpenButton>
                ) : (
                  <Link className="btn btn-line" href="/#contact">
                    {industry.heroSecondary}
                  </Link>
                )
              ) : null}
            </div>
          </div>
          <SolutionStage industry={industry} />
        </div>
      </section>

      <Reveal as="section" className="section metrics" labelledBy={industry.statsHead ? `${industry.slug}-stats` : undefined}>
        <div className="wrap">
          {industry.statsHead ? (
            <div className="section-head">
              <div>
                <p className="eyebrow">
                  <i /> {industry.statsHead.eyebrow}
                </p>
                <h2 id={`${industry.slug}-stats`}>{industry.statsHead.title}</h2>
              </div>
              <p className="lede">{industry.statsHead.lede}</p>
            </div>
          ) : null}
          <div className="metric-list">
            {industry.stats.map((stat) => (
              <article className="metric" key={stat.text}>
                <p className="metric-num">
                  <CountUp to={stat.value} decimals={stat.decimals} />
                  <span className="metric-unit">%</span>
                </p>
                <div>
                  <p>{stat.text}</p>
                  {stat.source ? <p>{stat.source}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {industry.features.map((feature, index) => (
        <Reveal as="section" className="section" key={feature.title} style={index > 0 ? { paddingTop: 0 } : undefined}>
          <div className={index % 2 === 1 ? "wrap sol-split is-flip" : "wrap sol-split"}>
            <div className="sol-photo">
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                loading="lazy"
                placeholder="blur"
                quality={70}
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </div>
            <div>
              <p className="eyebrow">
                <i /> {feature.tag}
              </p>
              <h2 className="block-title">{feature.title}</h2>
              <Copy text={feature.text} className="lede" />
              {feature.button ? (
                <OpenButton className="btn btn-gold" modal="trial">
                  {feature.button}
                </OpenButton>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}

      {industry.templates ? (
        <Reveal as="section" className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <div>
                <h2>{industry.templates.title}</h2>
              </div>
              <p className="lede">{industry.templates.text}</p>
            </div>
          </div>
        </Reveal>
      ) : null}

      {industry.reviewsTitle ? (
        <Reveal as="section" className="section on-night">
          <div className="wrap">
            <div className="section-head">
              <div>
                <h2>{industry.reviewsTitle}</h2>
              </div>
              <p className="lede">Join businesses transforming their customer experience.</p>
            </div>
            <div className="review-grid">
              {reviews.map(([quote, name, role, initials]) => (
                <article className="review" key={name}>
                  <blockquote>“{quote}”</blockquote>
                  <div className="who">
                    <span className="avatar" aria-hidden="true">
                      {initials}
                    </span>
                    <div>
                      <strong>{name}</strong>
                      <span>{role}</span>
                    </div>
                    <Stars score={5} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      <Reveal as="section" className="section about sol-why">
        <div className="wrap">
          <WhyBirrung />
        </div>
      </Reveal>

      <Reveal as="section" className="section sol-how" id="how">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>How It Works</h2>
            </div>
            <p className="lede">Get your video ads live in just 4 simple steps</p>
          </div>
          <StepShow steps={steps} />
          <div className="after-steps">
            <p>14-day free trial. No credit card required.</p>
            <OpenButton className="btn btn-gold" modal="trial">
              Sign In Now to Create Account
            </OpenButton>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" style={{ paddingTop: 0 }}>
        <div className="wrap sol-close">
          <div>
            <div className="section-head">
              <div>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="sol-faq">
              {industry.faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    <span className="faq-q">
                      <span>{question}</span>
                      <span className="faq-hold">Open for the answer</span>
                    </span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="sol-cta on-night">
            <p className="eyebrow">
              <i /> Free Demo
            </p>
            <h2 className="block-title">{industry.ctaTitle}</h2>
            <p className="lede">{industry.ctaText}</p>
            <OpenButton className="btn btn-gold" modal="trial">
              {industry.ctaButton}
            </OpenButton>
          </aside>
        </div>
      </Reveal>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { CountUp } from "@/components/count-up";
import { FeatureCarousel } from "@/components/feature-carousel";
import { SolutionStage } from "@/components/solution-stage";
import { HardwareSection } from "@/components/hardware-section";
import { SolutionRest, SolutionSection } from "@/components/solution-section";
import { OpenButton } from "@/components/open-button";
import { Reveal } from "@/components/reveal";
import { ReviewSlider, type Review } from "@/components/review-slider";
import { EnquiryForm } from "@/components/forms";
import { Check } from "@/components/sprite";
import { StepShow } from "@/components/step-show";
import { JsonLd } from "@/lib/jsonld";
import { WhyBirrung } from "@/components/why-birrung";
import { industries, industryBySlug, type Industry } from "@/lib/industries";
import { address, email, isSolutionShown, phoneDisplay, phoneHref, siteUrl, visibleSolutionPages } from "@/lib/site";

const PeaceScene = dynamic(() => import("@/components/peace-scene").then((mod) => mod.PeaceScene));

const broadcast = [
  "Supports static or video content",
  "YouTube integration",
  "Full analytics",
  "Email and phone support",
  "Daypart or scheduling",
  "Playlist / bucketlist for content",
];

const spectrum = ["Everything in Broadcast", "Specialised integrations", "Dedicated account manager", "Custom SLA and support"];

const steps = [
  ["01", "Create Your Account", "Signup for a free trial and start accessing your dashboard.", ""],
  ["02", "Upload or Build Playlist", "Choose a local file or build a playlist of your choice or choose Youtube content instead. The choice is yours.", ""],
  ["03", "Generate Codes", "Once content is uploaded and activation codes are generated, Job is Done.", ""],
  ["04", "Publish to Screens", "Birrung app or non native application, start broadcasting your content.", ""],
];

const reviews: Review[] = [
  {
    quote: "Birrung has completely changed how we display our promotions. Our sales increased by 15% in the first month!",
    name: "Sarah Johnson",
    when: "Fashion Boutique Owner",
    initials: "SJ",
    score: 5,
  },
  {
    quote: "Setting up the screens was a breeze. We didn't need any special hardware, just our existing TVs.",
    name: "Michael Chen",
    when: "Grocery Store Manager",
    initials: "MC",
    score: 5,
  },
  {
    quote: "The remote management is a lifesaver. I can update all 10 of our locations from home in minutes.",
    name: "Emma Wilson",
    when: "Retail Operations",
    initials: "EW",
    score: 5,
  },
  {
    quote: "Stunning templates and very easy to use. Highly recommend Birrung for any retail business.",
    name: "David Ross",
    when: "Electronics Store",
    initials: "DR",
    score: 5,
  },
];

function richText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, index) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={index}>{chunk.slice(2, -2)}</strong>
    ) : (
      chunk
    ),
  );
}

function Copy({ text, className }: { text: string; className?: string }) {
  return text.split(/\n\n+/).map((part) => (
    <p className={className} key={part}>
      {richText(part)}
    </p>
  ));
}

function FeatureBlock({
  feature,
  flip,
  tight,
}: {
  feature: Industry["features"][number];
  flip?: boolean;
  tight?: boolean;
}) {
  const slides = feature.images?.length
    ? feature.images
    : [{ image: feature.image, alt: feature.alt }];

  return (
    <Reveal as="section" className="section" style={tight ? { paddingTop: 0 } : undefined}>
      <div className={flip ? "wrap sol-split is-flip" : "wrap sol-split"}>
        {slides.length > 1 ? (
          <FeatureCarousel slides={slides} />
        ) : (
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
        )}
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
  );
}

function HowItWorks() {
  return (
    <Reveal as="section" className="section sol-how" id="how">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <i /> How it works
            </p>
            <h2>Live in four steps.</h2>
          </div>
          <p className="lede">Get your video ads live in just 4 simple steps.</p>
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
  );
}

export function generateStaticParams() {
  return visibleSolutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry || !isSolutionShown(slug)) return {};
  return {
    title: industry.pageTitle,
    description: industry.lede.replace(/\*\*/g, ""),
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
  if (!industry || !isSolutionShown(slug)) notFound();

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

      {industry.useHardwareSection ? (
        <>
          <HardwareSection id={`${industry.slug}-hardware`} />
          <HowItWorks />
        </>
      ) : (
        <SolutionSection id={`${industry.slug}-solution`} showRest={!industry.offline} />
      )}

      {industry.features
        .filter((feature) => feature.beforeStats)
        .map((feature, index) => (
          <FeatureBlock key={feature.title} feature={feature} flip={index % 2 === 1} />
        ))}

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

      {industry.offline ? (
        <Reveal as="section" className="section sol-offline">
          <div className="wrap">
            <article className="sol-offline-card">
              <div className="sol-offline-visual">
                <PeaceScene />
              </div>
              <div className="sol-offline-copy">
                <p className="eyebrow">
                  <i /> Offline ready
                </p>
                <h2 className="block-title">{industry.offline.title}</h2>
                <p className="lede">{industry.offline.lede}</p>
                <Copy text={industry.offline.text} className="lede" />
                <p className="peace-note">*{industry.offline.note}</p>
              </div>
            </article>
          </div>
        </Reveal>
      ) : null}

      {industry.offline ? (
        <Reveal as="section" className="section sol-network">
          <div className="wrap">
            <SolutionRest />
          </div>
        </Reveal>
      ) : null}

      {industry.features
        .filter((feature) => !feature.beforeStats)
        .map((feature, index) => (
          <FeatureBlock key={feature.title} feature={feature} flip={index % 2 === 1} tight={index > 0} />
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

      {!industry.useHardwareSection ? <HowItWorks /> : null}

      {/* {industry.reviewsTitle ? (
        <Reveal as="section" className="section on-night">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">
                  <i /> What our clients say
                </p>
                <h2>{industry.reviewsTitle}</h2>
              </div>
              <p className="lede">Join businesses transforming their customer experience.</p>
            </div>
            <ReviewSlider reviews={reviews} />
          </div>
        </Reveal>
      ) : null} */}

      <Reveal as="section" className="section about sol-why">
        <div className="wrap">
          <WhyBirrung />
        </div>
      </Reveal>

      <Reveal as="section" className="section sol-faq-section">
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

      <Reveal as="section" className="section" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <i /> Simple, transparent pricing
              </p>
              <h2>Pay for the screens you use.</h2>
            </div>
            <p className="lede">Choose a plan that fits your advertising needs. Scale up or down anytime.</p>
          </div>
          <div className="plans">
            <article className="plan plan-pop">
              <p className="badge">Most popular</p>
              <h3>Broadcast</h3>
              <p className="price">
                $10 <small>/ screen / month</small>
              </p>
              <ul>
                {broadcast.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>
              <OpenButton className="btn btn-gold" modal="trial">
                Free Demo
              </OpenButton>
            </article>
            <article className="plan plan-ent">
              <h3>Spectrum</h3>
              <p className="price">Customised</p>
              <ul>
                {spectrum.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>
              <OpenButton className="btn btn-gold" modal="demo">
                Free Demo
              </OpenButton>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="contact" style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div className="contact-panel">
            <p className="eyebrow">
              <i /> Get in touch
            </p>
            <h2 className="block-title">Talk to someone who runs screens for a living.</h2>
            <p className="lede">Have questions about our enterprise features? Our team of signage experts is here to help you scale your network.</p>
            <div className="contact-links">
              <div>
                <span>Email</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div>
                <span>Contact</span>
                {phoneDisplay ? <a href={phoneHref}>{phoneDisplay}</a> : <span>{address}</span>}
              </div>
            </div>
            {phoneDisplay ? <p className="address">{address}</p> : null}
          </div>
          <div className="form-card">
            <EnquiryForm kind="contact" />
          </div>
        </div>
      </Reveal>
    </main>
  );
}

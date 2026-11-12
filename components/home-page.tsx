import dynamic from "next/dynamic";
import Image from "next/image";
import { EnquiryForm } from "@/components/forms";
import { HeroStage } from "@/components/hero-stage";
import { Reveal } from "@/components/reveal";
import { OpenButton } from "@/components/open-button";
import { WhyBirrung } from "@/components/why-birrung";
import { CountUp } from "@/components/count-up";
import { ReviewSlider } from "@/components/review-slider";
import { HardwareSection } from "@/components/hardware-section";
import { SolutionSection } from "@/components/solution-section";
import { Check } from "@/components/sprite";
import { venues } from "@/lib/media";
import { isSolutionShown } from "@/lib/site";
import { address, email, phoneDisplay, phoneHref } from "@/lib/site";

const StepShow = dynamic(() => import("@/components/step-show").then((mod) => mod.StepShow));

const proof = [
  ["3×", "Faster than traditional methods"],
  ["0", "Latency. Instant updates."],
  ["2 min", "Campaign setup"],
  ["24/7", "Controlled remote management"],
];

const metrics: ({ note: true; title: string; text: string } | { note?: false; value: string; title: string; text: string })[] = [
  {
    value: "400",
    title: "Higher engagement",
    text: "As per Digital Signage Today, digital signage displays can attract up to 400% more views compared to traditional static signage.",
  },
  {
    value: "90",
    title: "Faster content updates",
    text: "Manage all your video content in one centralised, easy-to-navigate library.",
  },
  {
    value: "75",
    title: "Boost in brand awareness",
    text: "Research by Nielsen indicates that digital signage can increase brand awareness by nearly 75%.",
  },
  {
    value: "35",
    title: "Decrease in waiting time",
    text: "A study conducted by Lavi Industries found that digital signage can reduce perceived customer wait times by up to 35%.",
  },
  {
    value: "32",
    title: "Cost efficiency and upsell",
    text: "Nielsen Research Highlights: digital signage enhances cost efficiency while also creating stronger upselling opportunities for businesses.",
  },
  {
    value: "30",
    title: "Increase in instant purchases",
    text: "According to WAND Digital Research, retail brands using digital signage experienced close to 30% more impulse purchases.",
  },
];

const steps = [
  ["01", "Create your account", "Sign up for a free trial and start accessing your dashboard.", "14-day trial. No credit card."],
  ["02", "Upload or build a playlist", "Choose a local file, build a playlist of your choice, or choose YouTube content instead. The choice is yours.", "A file, a playlist, or YouTube."],
  ["03", "Generate codes", "Once content is uploaded and activation codes are generated, the job is done.", "Codes generated. The job is done."],
  ["04", "Publish to screens", "Birrung app or a non-native application: start broadcasting your content.", "Live on the screens you own."],
];

const reviews: { quote: string; name: string; when: string; initials: string; score: 5 | 4.5 }[] = [
  {
    quote:
      "Birrung is incredibly easy to use. As a VR play zone, our screens are a big part of how we connect with customers. We use them to promote tickets, birthday party packages and our players’ high scores and achievements. Whenever we want to refresh the artwork, it’s done in a click and appears on screen straight away. No one has to touch the screens or fiddle with any hardware. Birrung takes care of it all, so we can focus on giving our customers a great experience.",
    name: "VR Madness Gaming Arena",
    when: "VR play zone",
    initials: "VR",
    score: 5,
  },
  {
    quote:
      "Our screens showcase our weekly specials, new product launches and the taste-testing sessions we hold regularly. Because Birrung is browser-based, we can upload and update everything from home, with no need to be in the store. It also keeps running offline. Even when our internet goes down, our screens stay on and our promotions keep showing, which gives us real peace of mind.",
    name: "Spice Corner",
    when: "Retail store",
    initials: "SC",
    score: 5,
  },
  {
    quote:
      "As a new startup, keeping costs down mattered to us, so we were glad Birrung works smoothly on our own TVs and we didn’t need expensive screens. The team designed our menu and is always there to help when we need changes. It is like having an in-house design team at a fraction of the cost. A great team and great software to work with.",
    name: "Active Bites",
    when: "Mexican Restaurant",
    initials: "AB",
    score: 5,
  },
  {
    quote:
      "We used to run our TV screens from USB sticks. It worked, but managing content was a pain. Every change meant wiping the old content and loading the new files onto the USB. We don’t have a laptop in the store, and our staff had to climb a ladder just to reach the screens and swap the sticks. With Birrung, it’s much easier. No ladders and no asking staff to swap USBs. We can update our screens from wherever we are. We love the convenience, and it saves me a lot of time and effort.",
    name: "Frost and Flavors Gelato",
    when: "Gelato shop",
    initials: "FF",
    score: 5,
  },
];

const broadcast = [
  "Supports static or video content",
  "YouTube integration",
  "Full analytics",
  "Email and phone support",
  "Daypart or scheduling",
  "Playlist / bucketlist for content",
];

const spectrum = ["Everything in Broadcast", "Specialised integrations", "Dedicated account manager", "Custom SLA and support"];

export function HomePage() {
  return (
    <main id="content">
      <section className="hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">
              <i /> Digital signage software
            </p>
            <h1>
              <span className="hero-line">Digital signage,</span>
              <em>simplified.</em>
            </h1>
            <p className="hero-copy">
              Digital Signage software to create, schedule and manage content on every screen you own, all from one place.
            </p>
            <p className="hero-aside">
              Imagine it is Monday morning and plans have changed. There is a new offer to promote or an announcement everyone needs to see or a message that is already out of date. All you need to do is to open one dashboard, make the change, and within seconds every screen in every location shows the update. It does not matter whether that is a shop window, a reception area, a classroom or a factory floor. There are no USB sticks to carry and nobody needs to go on site. The right message is on the right screen at the right time, and you are in control from wherever you are.
            </p>
            <div className="hero-actions">
              <OpenButton className="btn btn-gold" modal="trial">
                Free Demo
              </OpenButton>
              <OpenButton className="btn btn-line hero-cta-desktop" modal="demo">
                Request a demo
              </OpenButton>
              <a
                className="btn btn-line hero-cta-mobile"
                href="https://birrung.com.au/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
            </div>
            <p className="hero-note">
              14-day free trial. No credit card required. <a href="#how">See how it works</a>
            </p>
          </div>
          <HeroStage />
        </div>
      </section>

      <Reveal as="section" className="proof" label="Product proof">
        <div className="wrap">
          <ul className="proof-list">
            {proof.map(([value, label]) => (
              <li key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <HardwareSection />

      <SolutionSection />

      <Reveal as="section" className="section metrics" id="metrics" labelledBy="metrics-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <i /> Market metrics
              </p>
              <h2 id="metrics-title">What the research already shows.</h2>
            </div>
            <p className="lede">Data-driven proof of how digital signage transforms businesses. The figures below are from the studies cited, not a Birrung scoreboard.</p>
          </div>
          <div className="metric-list">
            {metrics.map((metric) =>
              metric.note ? (
                <article className="metric note" key={metric.title}>
                  <svg className="metric-mark" viewBox="0 0 20 20" aria-hidden="true">
                    <use href="#star" />
                  </svg>
                  <div>
                    <h3>{metric.title}</h3>
                    <p>{metric.text}</p>
                  </div>
                </article>
              ) : (
                <article className="metric" key={metric.title}>
                  <p className="metric-num">
                    <CountUp to={Number(metric.value)} />
                    <span className="metric-unit">%</span>
                  </p>
                  <div>
                    <h3>{metric.title}</h3>
                    <p>{metric.text}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="how">
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
              Sign in now to create an account
            </OpenButton>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="venues" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <i /> Premium venue categories
              </p>
              <h2>Built for every space that has something to say</h2>
            </div>
            <p className="lede">Retail stores, restaurants, corporate offices, stadiums and places of worship all use screens differently. Birrung adapts to how your venue works. Promote specials, welcome visitors or share service times, and schedule, update and manage it all remotely, from a browser.</p>
          </div>
          <div className="venue-grid">
            {venues.map((venue) => {
              const linked = isSolutionShown(venue.slug);
              const media = (
                <>
                  <Image
                    src={venue.image}
                    alt={venue.alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    quality={70}
                    sizes="(min-width: 900px) 380px, 100vw"
                  />
                  <div className="venue-copy">
                    <h3>
                      {venue.title}
                      {linked ? (
                        <span className="venue-go" aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M8 16 16 8M10 8h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      ) : null}
                    </h3>
                    <p>{venue.text}</p>
                  </div>
                </>
              );

              if (linked) {
                return (
                  <a className={`venue-card ${venue.className}`} href={venue.href} key={venue.slug}>
                    {media}
                  </a>
                );
              }

              return (
                <article className={`venue-card ${venue.className} is-static`} key={venue.slug}>
                  {media}
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section on-night" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <i /> What our clients say
              </p>
              <h2>Rooms that got simpler.</h2>
            </div>
            <p className="lede">Join thousands of satisfied businesses transforming their spaces.</p>
          </div>
          <ReviewSlider reviews={reviews} />
        </div>
      </Reveal>

      <Reveal as="section" className="section about" id="about">
        <div className="wrap">
          <WhyBirrung />
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
                <a href={phoneHref}>{phoneDisplay}</a>
              </div>
            </div>
            <p className="address">{address}</p>
          </div>
          <div className="form-card">
            <EnquiryForm kind="contact" />
          </div>
        </div>
      </Reveal>


    </main>
  );
}

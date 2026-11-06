import dynamic from "next/dynamic";
import Image from "next/image";
import { EnquiryForm } from "@/components/forms";
import { HeroStage } from "@/components/hero-stage";
import { Reveal } from "@/components/reveal";
import { OpenButton } from "@/components/open-button";
import { WhyBirrung } from "@/components/why-birrung";
import { CountUp } from "@/components/count-up";
import { ReviewSlider } from "@/components/review-slider";
import { Check } from "@/components/sprite";
import { screens, venues } from "@/lib/media";
import { address, email, phoneDisplay, phoneHref } from "@/lib/site";

const StepShow = dynamic(() => import("@/components/step-show").then((mod) => mod.StepShow));
const UploadSources = dynamic(() => import("@/components/upload-sources").then((mod) => mod.UploadSources));
const PeaceScene = dynamic(() => import("@/components/peace-scene").then((mod) => mod.PeaceScene));

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
              <OpenButton className="btn btn-line" modal="demo">
                Request a demo
              </OpenButton>
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

      <Reveal as="section" className="section" id="hardware">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <i /> Any screen you own
              </p>
              <h2>Hardware agnostic</h2>
            </div>
            {/* <p className="lede">Nothing new to buy. Nothing proprietary to install.</p> */}
          </div>
          <div className="feature-pair">
            <article className="tile tile-feature tile-hardware">
              <div className="device-stage" aria-hidden="true">
                <div className="device">
                  <div className="screen-face screen-menu">
                    <b>Lunch menu</b>
                    <span><i /><i /></span>
                    <span><i /><i /></span>
                    <span><i /><i /></span>
                  </div>
                  <span>TCL</span>
                  <em>On</em>
                </div>
                <div className="device">
                  <div className="screen-face screen-poster">
                    <i className="poster" />
                    <b>Today&apos;s special</b>
                    <i />
                  </div>
                  <span>Hisense</span>
                  <em>On</em>
                </div>
                <div className="device">
                  <div className="screen-face screen-agenda">
                    <b>Town hall</b>
                    <span><span className="tick" /><i /></span>
                    <span><span className="tick" /><i /></span>
                    <span><span className="tick" /><i /></span>
                  </div>
                  <span>Samsung</span>
                  <em>On</em>
                </div>
                <div className="device">
                  <div className="screen-face screen-player">
                    <i className="playhead" />
                    <b>Live match</b>
                    <i />
                  </div>
                  <span>LG</span>
                  <em>On</em>
                </div>
              </div>
              <ul className="feature-points">
                <li>Any screen you own</li>
                <li>Nothing expensive to buy</li>
              </ul>
              <div>
                <p className="tile-kicker">Already have TVs?</p>
                <h3>Works on any screen.</h3>
                <p>Birrung  lets you play the content on any smart TV or commercial screens. No need to purchase any specialised hardware. Of course we can provide media players if required and it has its advantages. However,  you can use what you already have and start  displaying  your content</p>
              </div>
            </article>
            <article className="tile tile-feature tile-peace">
              <PeaceScene />
              <div>
                <h3 className="peace-heading"><span>Works Offline, Peace of Mind</span></h3>
                <p className="peace-line">Set it once, leave it to Birrung</p>
                <p>
                  Poor Wi-Fi coverage, or no internet at all? No problem, because<b> Birrung works offline</b>.
                  <br />
                  Once your activation code is synced, leave the rest to Birrung. Your screens keep playing, even when your Wi-Fi takes a coffee break. And as soon as you’re back online, Birrung picks up the latest updates automatically.
                </p>
                <p className="peace-note">*Offline playback is subject to compatible screens or media players.</p>
              </div>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="solution">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <i /> Solution
              </p>
              <h2>Your campaign, your rules.</h2>
            </div>
            <p className="lede">Everything you need to manage, organize, and deploy video advertising campaigns. Launch when you are ready.</p>
          </div>
          <div className="bento bento-tools">
            <article className="tile tile-upload">
              <div>
                <h3>Upload your content</h3>
                <p>Upload your content, create a playlist, run a YouTube link, or publish a third-party website.</p>
              </div>
              <div className="tile-ui" aria-hidden="true">
                <div className="drop">
                  <div>
                    {/* <div className="drop-copy">
                      <strong>Add your images or videos from your local drive. Just drag and drop. Ready, set, go.</strong>
                    </div> */}
                    <UploadSources />
                  </div>
                </div>
              </div>

            </article>
          </div>
          <article className="tile tile-feature tile-analytics campaign-analytics" id="analytics">
            <div>
              <p className="tile-kicker">Realtime analytics</p>
              <h3>Know the moment a screen slips.</h3>
              <p>Live status for every display and every campaign. One clear alert when something needs a look.</p>
            </div>
            <div className="analytics-stage" aria-hidden="true">
              <div className="stat-row">
                <span>
                  <b>7</b> live
                </span>
                <span className="is-alert">
                  <b>1</b> alert
                </span>
                <span>
                  <b>0</b> delay
                </span>
              </div>
              <svg className="spark spark-lg" viewBox="0 0 320 110" preserveAspectRatio="none" fill="none">
                <path className="spark-fill" d="M4 82 48 74 86 76 128 46 176 54 214 28 262 36 316 14 V110 H4 Z" fill="rgba(245,134,52,0.18)" />
                <path className="spark-line" d="M4 82 48 74 86 76 128 46 176 54 214 28 262 36 316 14" stroke="#f58634" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle className="spark-dot" cx="316" cy="14" r="5" fill="#f58634" />
              </svg>
              <div className="alert-row alert-pop">
                <i /> Lobby screen needs a look <small>Just now</small>
              </div>
            </div>
          </article>
          <div className="bento bento-rest">
            <article className="tile tile-schedule">
              <ul className="slots" aria-hidden="true">
                <li>
                  <b>Breakfast</b>
                  <span>6:00</span>
                </li>
                <li>
                  <b>Lunch</b>
                  <span>11:00</span>
                </li>
                <li>
                  <b>Dinner</b>
                  <span>17:00</span>
                </li>
              </ul>
              <div>
                <h3>Schedule or day part</h3>
                <p>Schedule content the way you wish to publish. Automatically change from breakfast, lunch, and dinner without lifting a finger.</p>
              </div>
            </article>
            <article className="tile tile-central">
              <div>
                <h3>Centralised management</h3>
                <p>Monitor all your screens from a single dashboard. All at your fingertips.</p>
              </div>
              <div>
                <div className="dash-top">
                  <strong>Network</strong>
                  <span className="live">
                    <i /> 7 online · 1 offline
                  </span>
                </div>
                <ul className="net-board">
                  {screens.map((screen) => (
                    <li key={screen.name} className={screen.online ? "is-on" : "is-off"}>
                      <span className="net-face" aria-hidden="true">
                        <b />
                        <b />
                        <b />
                      </span>
                      <span className="net-copy">
                        <em>{screen.name}</em>
                        <small>{screen.playing}</small>
                      </span>
                      <span className="net-state">
                        <i />
                        {screen.online ? "Online" : "Offline"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Reveal>

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
            {venues.map((venue) => (
              <figure className={`venue-card ${venue.className}`} key={venue.title}>
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
                  <h3>{venue.title}</h3>
                  <p>{venue.text}</p>
                </div>
              </figure>
            ))}
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

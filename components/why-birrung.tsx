import { OpenButton } from "@/components/open-button";

const points: { icon: "upload" | "tv" | "clock" | "offline" | "grid" | "chart"; title: string; text: string }[] = [
  {
    icon: "upload",
    title: "Upload local or Youtube it",
    text: "Add your images or videos from local drive. Else play Youtube, choice is yours",
  },
  {
    icon: "offline",
    title: "Works Offline",
    text: "Unstable Wi-Fi or no internet? No problem. Birrung works offline, so your screens keep playing even when the connection takes a break.",
  },
  {
    icon: "tv",
    title: "Hardware Agnostic",
    text: "Play content on any smart device. No proprietary hardware or expensive media players required.",
  },
  {
    icon: "clock",
    title: "Schedule or Day Part",
    text: "Schedule content the way you wish to publish. Automatically change from breakfast-Lunch-Dinner without lifting your finger.",
  },
  {
    icon: "grid",
    title: "Centralised Management",
    text: "Monitor all your screens from a single dashboard. Everything’s at your fingertips, so you always know what’s playing, and when.",
  },
  {
    icon: "chart",
    title: "Realtime analytics",
    text: "Real-time insights into every screen. Get instant alerts when something needs your attention.",
  },
];

function AboutIcon({ name }: { name: (typeof points)[number]["icon"] }) {
  if (name === "upload") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3.2 7.6 7.6a1 1 0 1 0 1.4 1.4L11 7v7.2a1 1 0 1 0 2 0V7l2 2a1 1 0 0 0 1.4-1.4L12 3.2Z" />
        <path fill="currentColor" d="M5 14.5a1 1 0 0 1 1 1V18h12v-2.5a1 1 0 1 1 2 0V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1Z" />
      </svg>
    );
  }
  if (name === "tv") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4.5 6A2.5 2.5 0 0 1 7 3.5h10A2.5 2.5 0 0 1 19.5 6v8A2.5 2.5 0 0 1 17 16.5H7A2.5 2.5 0 0 1 4.5 14V6ZM8 18.2a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M12 2.4a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2Zm0 2.2a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8Z" />
        <path fill="currentColor" d="M11.1 7.2a1 1 0 0 1 1 1V12l2.4 1.5a1 1 0 1 1-1 1.7l-3-1.9a1 1 0 0 1-.4-.8V8.2a1 1 0 0 1 1-1Z" />
      </svg>
    );
  }
  if (name === "offline") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M2.2 10.6a14.2 14.2 0 0 1 19.6 0" />
        <path d="M5.5 13.6a9.4 9.4 0 0 1 13 0" />
        <path d="M8.5 16.4a5.1 5.1 0 0 1 7 0" />
        <circle cx="12" cy="19.7" r="1.55" fill="currentColor" stroke="none" />
        <path d="M4.6 3.6 19.6 21.2" strokeWidth="2.6" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 5.2c0-.7.5-1.2 1.2-1.2h4.1c.7 0 1.2.5 1.2 1.2v4.1c0 .7-.5 1.2-1.2 1.2H5.2C4.5 10.5 4 10 4 9.3V5.2Zm9.5 0c0-.7.5-1.2 1.2-1.2h4.1c.7 0 1.2.5 1.2 1.2v4.1c0 .7-.5 1.2-1.2 1.2h-4.1c-.7 0-1.2-.5-1.2-1.2V5.2ZM4 14.7c0-.7.5-1.2 1.2-1.2h4.1c.7 0 1.2.5 1.2 1.2v4.1c0 .7-.5 1.2-1.2 1.2H5.2c-.7 0-1.2-.5-1.2-1.2v-4.1Zm9.5 0c0-.7.5-1.2 1.2-1.2h4.1c.7 0 1.2.5 1.2 1.2v4.1c0 .7-.5 1.2-1.2 1.2h-4.1c-.7 0-1.2-.5-1.2-1.2v-4.1Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16.5 9 11.5l3.2 3L20 7" />
      <path d="M14 7h6v6" />
    </svg>
  );
}

export function WhyBirrung() {
  return (
    <div className="about-panel">
      <div className="about-copy">
        <h2 className="block-title">Why Birrung?</h2>
        <p>
          Digital signage software where everything you need to get your screens working in four easy steps.
          <br />
          <strong>No artwork? No problem.</strong> Upload your existing designs, or let our team create content tailored to your venue.
        </p>
        <div className="hero-actions">
          <OpenButton className="btn btn-gold" modal="trial">
            Free Demo
          </OpenButton>
          <a className="btn btn-line" href="https://birrung.com.au/login" target="_blank" rel="noopener noreferrer">
            Login
          </a>
        </div>
      </div>
      <ul className="about-points">
        {points.map((item) => (
          <li key={item.title}>
            <span className="about-icon" aria-hidden="true">
              <AboutIcon name={item.icon} />
            </span>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

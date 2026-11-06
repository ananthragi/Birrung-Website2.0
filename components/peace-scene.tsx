"use client";

import { useEffect, useState } from "react";

export function OfflineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <OfflineGlyph />
    </svg>
  );
}

function OfflineGlyph() {
  return (
    <g fill="none" stroke="#e4453a" strokeWidth="2.7" strokeLinecap="round">
      <path d="M2.2 10.6a14.2 14.2 0 0 1 19.6 0" />
      <path d="M5.5 13.6a9.4 9.4 0 0 1 13 0" />
      <path d="M8.5 16.4a5.1 5.1 0 0 1 7 0" />
      <circle cx="12" cy="19.7" r="1.7" fill="#e4453a" stroke="none" />
      <path d="M4.6 3.6 19.6 21.2" strokeWidth="2.9" />
    </g>
  );
}

const beats = [
  { id: "day", emoji: "😊" },
  { id: "dusk", emoji: "😌" },
  { id: "night", emoji: "😴" },
] as const;

export function PeaceScene() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % beats.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  const beat = beats[index];

  return (
    <div className={`peace-art is-${beat.id}`} aria-hidden="true">
      <svg viewBox="0 0 420 200" role="img">
        <circle className="peace-glow" cx="78" cy="112" r="46" fill="#ffe4cc" />
        <g className="peace-sun">
          <circle cx="346" cy="48" r="16" fill="#f58634" />
          <g stroke="#f58634" strokeWidth="3" strokeLinecap="round">
            <path d="M346 22v8M346 66v8M322 48h8M362 48h8M328 30l6 6M358 60l6 6M364 30l-6 6M334 60l-6 6" />
          </g>
        </g>
        <g className="peace-moon">
          <circle cx="346" cy="48" r="28" fill="#ffd7b0" />
          <path d="M338 28a20 20 0 1 0 0 38 14 14 0 1 1 0-38z" fill="#f58634" />
        </g>
        <g fill="#e7b48a">
          <circle cx="150" cy="36" r="2" />
          <circle cx="188" cy="54" r="1.6" />
          <circle cx="230" cy="30" r="2.2" />
          <circle cx="268" cy="64" r="1.5" />
        </g>
        <rect x="148" y="58" width="132" height="86" rx="14" fill="#fff" stroke="#f58634" strokeWidth="3" />
        <rect x="160" y="70" width="108" height="54" rx="8" fill="#fff4ea" />
        <svg x="192" y="74" width="44" height="44" viewBox="0 0 24 24">
          <OfflineGlyph />
        </svg>
        <rect x="198" y="144" width="32" height="6" rx="3" fill="#f58634" />
        <rect x="210" y="150" width="8" height="10" rx="2" fill="#f3c49a" />
        <g transform="translate(300 122)">
          <rect x="6" y="18" width="70" height="9" rx="3" fill="#f3c49a" />
          <rect x="12" y="4" width="58" height="16" rx="4" fill="#fff" stroke="#e7b48a" strokeWidth="3" />
        </g>
      </svg>
      {beats.map((item) => (
        <span key={item.id} className={item.id === beat.id ? "peace-emoji is-on" : "peace-emoji"}>
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

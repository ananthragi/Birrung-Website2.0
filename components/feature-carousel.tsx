"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export type FeatureSlide = {
  image: StaticImageData;
  alt: string;
};

export function FeatureCarousel({ slides, className }: { slides: FeatureSlide[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    let swap = 0;
    const timer = window.setInterval(() => {
      setLeaving(true);
      swap = window.setTimeout(() => {
        setIndex((current) => (current + 1) % slides.length);
        setLeaving(false);
      }, 420);
    }, 4200);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(swap);
    };
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div className={["sol-photo sol-carousel", className, leaving ? "is-leaving" : ""].filter(Boolean).join(" ")}>
      <Image
        key={`${slide.alt}-${index}`}
        src={slide.image}
        alt={slide.alt}
        fill
        loading="lazy"
        placeholder="blur"
        quality={70}
        sizes="(min-width: 900px) 50vw, 100vw"
      />
      {slides.length > 1 ? (
        <div className="sol-carousel-dots" aria-hidden="true">
          {slides.map((item, dot) => (
            <button
              key={item.alt}
              type="button"
              className={dot === index ? "is-on" : undefined}
              onClick={() => {
                setLeaving(false);
                setIndex(dot);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

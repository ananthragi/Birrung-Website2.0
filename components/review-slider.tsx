"use client";

import { useEffect, useState } from "react";
import { Stars } from "@/components/sprite";

export type Review = {
  quote: string;
  name: string;
  when: string;
  initials: string;
  score: 5 | 4.5;
};

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review">
      <blockquote>“{review.quote}”</blockquote>
      <div className="who">
        <span className="avatar" aria-hidden="true">
          {review.initials}
        </span>
        <div>
          <strong>{review.name}</strong>
          <span>{review.when}</span>
        </div>
        <Stars score={review.score} />
      </div>
    </article>
  );
}

export function ReviewSlider({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const pages = Math.max(1, reviews.length - perView + 1);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const sync = () => setPerView(media.matches ? 2 : 1);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(0, reviews.length - perView)));
  }, [perView, reviews.length]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || pages < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % pages);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [pages]);

  function go(next: number) {
    setIndex((next + pages) % pages);
  }

  return (
    <div className="review-slider" data-per={perView}>
      <div className="review-viewport">
        <div
          className="review-track"
          style={{ transform: `translate3d(-${(index * 100) / perView}%, 0, 0)` }}
        >
          {reviews.map((review) => (
            <div className="review-slide" key={review.name}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
      <div className="review-controls">
        <button className="review-nav" type="button" aria-label="Previous testimonials" onClick={() => go(index - 1)}>
          ‹
        </button>
        <div className="review-dots" role="tablist" aria-label="Testimonials">
          {Array.from({ length: pages }, (_, page) => (
            <button
              key={page}
              className={page === index ? "is-on" : undefined}
              type="button"
              role="tab"
              aria-selected={page === index}
              aria-label={`Show testimonials group ${page + 1}`}
              onClick={() => setIndex(page)}
            />
          ))}
        </div>
        <button className="review-nav" type="button" aria-label="Next testimonials" onClick={() => go(index + 1)}>
          ›
        </button>
      </div>
    </div>
  );
}

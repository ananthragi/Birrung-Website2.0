"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Industry } from "@/lib/industries";

export function SolutionStage({ industry }: { industry: Industry }) {
  const boards = industry.stage.boards;
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || boards.length < 2) return;
    let swapTimer = 0;
    const timer = window.setInterval(() => {
      setLeaving(true);
      swapTimer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % boards.length);
        setLeaving(false);
      }, 780);
    }, 5000);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(swapTimer);
    };
  }, [boards.length]);

  const board = boards[index];
  const mainImage = index % 2 === 0 ? industry.image : industry.stage.side;
  const sideImage = index % 2 === 0 ? industry.stage.side : industry.image;
  const active = Math.min(1, board.rows.length - 1);

  return (
    <div className={leaving ? "stage stage-live is-leaving" : "stage stage-live"} aria-hidden="true">
      <div key={`${industry.slug}-${index}`} className="bezel screen-main hero-card-main">
        <div className="bezel-bar">
          <span />
        </div>
        <div className="glass">
          <Image
            src={mainImage}
            alt=""
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            placeholder="blur"
            quality={70}
            sizes="(min-width: 900px) 300px, 92vw"
          />
          <div className="menu-ui">
            <p>
              <i className="live-dot" /> {board.menu}
            </p>
            <ul className="slots">
              {board.rows.map((item, row) => (
                <li key={item.name} className={row === active ? "on" : undefined}>
                  <b>{item.name}</b>
                  <span>{item.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div key={`${industry.slug}-${index}-side`} className="bezel screen-side hero-card-side">
        <div className="bezel-bar">
          <span />
        </div>
        <div className="glass">
          <Image
            src={sideImage}
            alt=""
            loading="lazy"
            placeholder="blur"
            quality={70}
            sizes="(min-width: 900px) 270px, 55vw"
          />
          <div className="promo">
            <p>Now playing</p>
            <strong>{board.playing}</strong>
          </div>
        </div>
      </div>
      <div key={`${industry.slug}-${index}-chip`} className="status-chip hero-card-chip">
        <i /> {board.chip}
      </div>
    </div>
  );
}

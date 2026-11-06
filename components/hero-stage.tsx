"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/lib/media";

type Row = [string, string, boolean?];

type Scene = {
  id: string;
  chip: string;
  mainImage: StaticImageData;
  menu: string;
  rows: Row[];
  sideImage: StaticImageData;
  playing: string;
};

const scenes: Scene[] = [
  {
    id: "cafe",
    chip: "Update sent, just now",
    mainImage: hero.coffee,
    menu: "House menu",
    rows: [
      ["Breakfast", "until 11"],
      ["Lunch", "until 4", true],
      ["Dinner", "from 5"],
    ],
    sideImage: hero.restaurant,
    playing: "Lunch service",
  },
  {
    id: "office",
    chip: "Town hall is live",
    mainImage: hero.office,
    menu: "Today's agenda",
    rows: [
      ["Standup", "9:00"],
      ["All-hands", "11:00", true],
      ["Town hall", "16:00"],
    ],
    sideImage: hero.office,
    playing: "Visitor welcome",
  },
  {
    id: "events",
    chip: "Doors open at 6",
    mainImage: hero.worship,
    menu: "Tonight",
    rows: [
      ["Doors", "6:00"],
      ["Service", "7:00", true],
      ["Reception", "8:30"],
    ],
    sideImage: hero.chapel,
    playing: "Evening service",
  },
  {
    id: "retail",
    chip: "Offer pushed to the floor",
    mainImage: hero.retail,
    menu: "Shop floor",
    rows: [
      ["New drop", "today"],
      ["Members", "20% off", true],
      ["Ends", "Sunday"],
    ],
    sideImage: hero.retail,
    playing: "Floor offer",
  },
  {
    id: "cinema",
    chip: "Listings updated",
    mainImage: hero.cinema,
    menu: "Now showing",
    rows: [
      ["Morning show", "1:30"],
      ["Evening show", "6:15", true],
      ["Night show", "9:00"],
    ],
    sideImage: hero.cinema,
    playing: "Screen 2",
  },
];

export function HeroStage() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    let swapTimer = 0;
    const timer = window.setInterval(() => {
      setLeaving(true);
      swapTimer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % scenes.length);
        setLeaving(false);
      }, 780);
    }, 5000);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(swapTimer);
    };
  }, []);

  const scene = scenes[index];

  return (
    <div className={leaving ? "stage is-leaving" : "stage"} aria-hidden="true">
      <div key={scene.id} className="bezel screen-main hero-card-main">
        <div className="bezel-bar">
          <span />
        </div>
        <div className="glass">
          <Image
            src={scene.mainImage}
            alt=""
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            placeholder="blur"
            quality={70}
            sizes="(min-width: 900px) 300px, 92vw"
          />
          <div className="menu-ui">
            <p>{scene.menu}</p>
            <ul className="slots">
              {scene.rows.map(([name, when, on]) => (
                <li key={name} className={on ? "on" : undefined}>
                  <b>{name}</b>
                  <span>{when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div key={`${scene.id}-side`} className="bezel screen-side hero-card-side">
        <div className="bezel-bar">
          <span />
        </div>
        <div className="glass">
          <Image
            src={scene.sideImage}
            alt=""
            loading="lazy"
            placeholder="blur"
            quality={70}
            sizes="(min-width: 900px) 270px, 55vw"
          />
          <div className="promo">
            <p>Now playing</p>
            <strong>{scene.playing}</strong>
          </div>
        </div>
      </div>
      <div key={`${scene.id}-chip`} className="status-chip hero-card-chip">
        <i /> {scene.chip}
      </div>
    </div>
  );
}

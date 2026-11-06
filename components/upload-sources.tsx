"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import cafe from "@/images/net-cafe.jpg";
import gym from "@/images/net-gym.jpg";
import lobby from "@/images/net-lobby.jpg";

const sets: {
  bucket: string;
  files: string[];
  url: string;
  site: string;
  film: StaticImageData;
  page: string;
}[] = [
  {
    bucket: "Lobby bucket",
    files: ["lobby-loop.mp4", "menu-board.png", "poster.jpg"],
    url: "https://youtube.com/watch?v=lobby",
    site: "https://venue.com/lobby",
    film: lobby,
    page: "Lobby",
  },
  {
    bucket: "Cafe bucket",
    files: ["cafe-loop.mp4", "lunch-board.png", "special.jpg"],
    url: "https://youtube.com/watch?v=lunch",
    site: "https://cafe.com/menu",
    film: cafe,
    page: "Cafe menu",
  },
  {
    bucket: "Gym bucket",
    files: ["gym-class.mp4", "timetable.png", "offer.jpg"],
    url: "https://youtube.com/watch?v=class",
    site: "https://gym.com/classes",
    film: gym,
    page: "Class timetable",
  },
];

function YtUrl({ typed, live }: { typed: string; live: boolean }) {
  const cut = typed.indexOf(".com");
  const caret = live ? <i className="yt-caret" /> : null;
  if (cut < 0) {
    return (
      <span className="yt-host">
        {typed}
        {caret}
      </span>
    );
  }
  const host = typed.slice(0, cut + 4);
  const path = typed.slice(cut + 4);
  return (
    <>
      <span className="yt-host">{host}</span>
      <span className="yt-path">
        {path}
        {caret}
      </span>
    </>
  );
}

function FileIcon({ video }: { video?: boolean }) {
  if (video) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9.5v5l5-2.5-5-2.5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="9" r="1.6" />
      <path d="M4 16.5 9 12l3.2 3 2.3-2 5.5 4.5" />
    </svg>
  );
}

const STEP_MS = 3400;

function shownCount(progress: number) {
  if (progress <= 0) return 0;
  return Math.min(3, Math.ceil(progress * 3));
}

export function UploadSources() {
  const [setIndex, setSetIndex] = useState(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const current = sets[setIndex];
  const atDrive = active === 0 ? shownCount(progress) : 0;
  const inBucket = active === 1 ? shownCount(progress) : 0;
  const typedUrl = active === 2 ? current.url.slice(0, Math.floor(Math.min(1, progress / 0.55) * current.url.length)) : "";
  const typedSite = active === 3 ? current.site.slice(0, Math.floor(Math.min(1, progress / 0.55) * current.site.length)) : "";
  const showFilm = active === 2 && progress > 0.55;
  const showSite = active === 3 && progress > 0.55;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setProgress(1);
      return;
    }

    setProgress(0);
    const started = performance.now();
    const tick = window.setInterval(() => {
      setProgress(Math.min(1, (performance.now() - started) / STEP_MS));
    }, 80);
    const next = window.setTimeout(() => {
      setActive((currentStep) => {
        if (currentStep === 3) {
          setSetIndex((index) => (index + 1) % sets.length);
          return 0;
        }
        return currentStep + 1;
      });
    }, STEP_MS);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(next);
    };
  }, [active]);

  return (
    <div className="xfer sources">
      <div className={active === 0 ? "source source-drive is-on" : "source source-drive"}>
        <div className="source-head">
          <p className="source-kicker">
            <b>1</b> Drop an image or video
          </p>
          <p className="xfer-status">From your local drive. Ready, set, go.</p>
        </div>
        <div className="drive-box">
          <span className="drive-pill">Local drive</span>
          <ul className="files">
            {current.files.map((name, index) =>
              index >= inBucket && index < atDrive ? (
                <li key={`${setIndex}-${name}`} className="file-icon is-in" aria-label={name}>
                  <FileIcon video={name.endsWith(".mp4")} />
                </li>
              ) : null,
            )}
          </ul>
        </div>
        <div className="unpack-bar" aria-hidden="true">
          <span style={{ width: `${active === 0 ? Math.round(progress * 100) : 0}%` }} />
        </div>
        <p className="unpack-label">Uploading files</p>
      </div>
      <div className={active === 1 ? "source source-playlist is-on" : "source source-playlist"}>
        <div className="source-head">
          <p className="source-kicker">
            <b>2</b> Create Playlist
          </p>
          <p className="xfer-status">Your local files, gathered in one bucket.</p>
        </div>
        <div className="bucket-stage">
          <div className={`bucket ${inBucket > 0 ? "is-built" : "is-building"}`} key={current.bucket}>
            <strong>{inBucket > 0 ? current.bucket : "Creating bucket"}</strong>
            <span>{inBucket > 0 ? "Built in the admin portal" : "Gathering local files"}</span>
            <ul className="files">
              {current.files.map((name, index) =>
                index < inBucket ? (
                  <li key={`${setIndex}-list-${name}`} className="file-icon is-in" aria-label={name}>
                    <FileIcon video={name.endsWith(".mp4")} />
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </div>
        <div className="unpack-bar" aria-hidden="true">
          <span style={{ width: `${active === 1 ? Math.round(progress * 100) : 0}%` }} />
        </div>
        <p className="unpack-label">Creating playlist</p>
      </div>
      <div className={active === 2 ? "source is-on" : "source"}>
        <div className="source-head">
          <p className="source-kicker">
            <b>3</b> YouTube
          </p>
          <p className="xfer-status">Copy the URL and paste it.</p>
        </div>
        <div className="yt-field">
          {showFilm ? (
            <div className="publish-screen">
              <Image src={current.film} alt="" fill loading="lazy" placeholder="blur" quality={65} sizes="240px" />
              <span className="publish-play" aria-hidden="true" />
              <em>Now playing</em>
            </div>
          ) : (
            <div className="yt-paste">
              <em>
                <YtUrl typed={typedUrl} live={active === 2 && !showFilm} />
              </em>
            </div>
          )}
          <span className={showFilm ? "yt-paste-btn is-ready" : "yt-paste-btn"}>Publish</span>
        </div>
      </div>
      <div className={active === 3 ? "source is-on" : "source"}>
        <div className="source-head">
          <p className="source-kicker">
            <b>4</b> Promote your website
          </p>
          <p className="xfer-status">Publish third party website.</p>
        </div>
        <div className="yt-field">
          {showSite ? (
            <div className="publish-screen is-web">
              <span className="publish-chrome">{current.site}</span>
              <strong>{current.page}</strong>
              <em>Published</em>
            </div>
          ) : (
            <div className="yt-paste">
              <em>
                <YtUrl typed={typedSite} live={active === 3 && !showSite} />
              </em>
            </div>
          )}
          <span className={showSite ? "yt-paste-btn is-ready" : "yt-paste-btn"}>Publish</span>
        </div>
      </div>
    </div>
  );
}

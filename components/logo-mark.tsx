"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { logo } from "@/lib/media";

const DRAW_HEIGHT = 96;

function clearWhite(data: Uint8ClampedArray) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min;
    if (sat < 36 && min > 170) data[i + 3] = 0;
    else if (sat < 70 && min > 140) data[i + 3] = Math.round(((sat - 36) / 34) * 255);
  }
}

export function LogoMark() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let skip = false;
    let alive = true;

    const paint = () => {
      if (!alive || video.readyState < 2 || !video.videoWidth) return false;
      const height = DRAW_HEIGHT;
      const width = Math.max(1, Math.round(video.videoWidth * (height / video.videoHeight)));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      ctx.drawImage(video, 0, 0, width, height);
      const pixels = ctx.getImageData(0, 0, width, height);
      clearWhite(pixels.data);
      ctx.putImageData(pixels, 0, 0);
      setReady(true);
      return true;
    };

    const loop = () => {
      if (!alive) return;
      skip = !skip;
      if (!skip) paint();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!alive) return;
      paint();
      if (reduced) {
        video.pause();
        return;
      }
      void video.play().catch(() => { });
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(loop);
    };

    const onReady = () => start();
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.load();
    if (video.readyState >= 2) start();

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.pause();
    };
  }, []);

  return (
    <span className={ready ? "logo-video is-ready" : "logo-video"}>
      <Image className="logo-fallback" src={logo} alt="Birrung" priority width={90} height={48} sizes="121px" />
      <video
        ref={videoRef}
        className="logo-video-src"
        src="/logo-video.mp4"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <canvas ref={canvasRef} aria-hidden={!ready} />
    </span>
  );
}

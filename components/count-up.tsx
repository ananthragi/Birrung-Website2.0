"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => {
    if (decimals <= 0) return String(Math.round(n));
    const factor = 10 ** decimals;
    return (Math.round(n * factor) / factor).toFixed(decimals);
  };
  const [value, setValue] = useState(() => format(0));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setValue(format(to));
      return;
    }

    let frame = 0;
    const start = () => {
      const begun = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - begun) / duration);
        const eased = 1 - (1 - progress) ** 3;
        setValue(format(eased * to));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [decimals, to]);

  return <span ref={ref}>{value}</span>;
}

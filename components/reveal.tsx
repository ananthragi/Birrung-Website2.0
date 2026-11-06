"use client";

import { useInView } from "motion/react";
import { useRef, type CSSProperties, type ReactNode } from "react";

export function Reveal({
  as = "div",
  children,
  className,
  id,
  delay = 0,
  style,
  label,
  labelledBy,
  immediate = false,
  hidden = false,
}: {
  as?: "div" | "section" | "article";
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  style?: CSSProperties;
  label?: string;
  labelledBy?: string;
  immediate?: boolean;
  hidden?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const Tag = as;
  const play = immediate || inView;

  return (
    <Tag
      ref={ref}
      className={[className, play ? "rise-in" : "reveal-pending"].filter(Boolean).join(" ")}
      id={id}
      style={play ? { ...style, animationDelay: `${delay}s` } : style}
      aria-label={label}
      aria-labelledby={labelledBy}
      aria-hidden={hidden || undefined}
    >
      {children}
    </Tag>
  );
}

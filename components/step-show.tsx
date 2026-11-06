"use client";

import { useEffect, useState } from "react";

const DWELL_MS = 3400;

export function StepShow({ steps }: { steps: readonly (readonly string[])[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionOk, setMotionOk] = useState(true);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!motionOk || paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, DWELL_MS);
    return () => window.clearInterval(id);
  }, [motionOk, paused, run, steps.length]);

  function choose(index: number) {
    setActive(index);
    setRun((value) => value + 1);
  }

  const current = steps[active];

  return (
    <div
      className="step-show"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ol className="steps">
        {steps.map((step, index) => {
          const on = index === active;
          return (
            <li
              key={step[0]}
              className={on ? "is-on" : undefined}
              aria-current={on ? "step" : undefined}
              tabIndex={0}
              onClick={() => choose(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  choose(index);
                }
              }}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div className="step-no">{step[0]}</div>
              <h3>{step[1]}</h3>
              <p>{step[2]}</p>
              <p className="step-meta">{step[3]}</p>
              {on && motionOk ? <span key={`${active}-${run}`} className="step-progress" /> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

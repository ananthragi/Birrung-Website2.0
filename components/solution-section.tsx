"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/reveal";
import { screens } from "@/lib/media";
import { isSolutionShown } from "@/lib/site";

const UploadSources = dynamic(() => import("@/components/upload-sources").then((mod) => mod.UploadSources));

export function SolutionRest() {
  return (
    <div className="bento bento-rest">
      <article className="tile tile-schedule">
        <ul className="slots" aria-hidden="true">
          <li>
            <b>Breakfast</b>
            <span>6:00</span>
          </li>
          <li>
            <b>Lunch</b>
            <span>11:00</span>
          </li>
          <li>
            <b>Dinner</b>
            <span>17:00</span>
          </li>
        </ul>
        <div>
          <h3>Schedule or day part</h3>
          <p>Schedule content the way you wish to publish. Automatically change from breakfast, lunch, and dinner without lifting a finger.</p>
        </div>
      </article>
      <article className="tile tile-central">
        <div>
          <h3>Centralised management</h3>
          <p>Monitor all your screens from a single dashboard. All at your fingertips.</p>
        </div>
        <div>
          <div className="dash-top">
            <strong>Network</strong>
            <span className="live">
              <i /> 7 online · 1 offline
            </span>
          </div>
          <ul className="net-board">
            {screens.map((screen) => {
              const linked = isSolutionShown(screen.slug);
              return (
              <li key={screen.name} className={screen.online ? "is-on" : "is-off"}>
                {linked ? (
                  <a className="net-hit" href={screen.href}>
                    {screen.name}
                  </a>
                ) : (
                  <span className="net-hit is-static">{screen.name}</span>
                )}
                <span className="net-face" aria-hidden="true">
                  <b />
                  <b />
                  <b />
                </span>
                <span className="net-copy">
                  <em>{screen.name}</em>
                  <small>{screen.playing}</small>
                </span>
                <span className="net-state">
                  <i />
                  {screen.online ? "Online" : "Offline"}
                </span>
              </li>
              );
            })}
          </ul>
        </div>
      </article>
    </div>
  );
}

export function SolutionSection({
  id = "solution",
  showRest = true,
}: {
  id?: string;
  showRest?: boolean;
}) {
  return (
    <Reveal as="section" className="section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <i /> Solution
            </p>
            <h2>Your campaign, your rules.</h2>
          </div>
          <p className="lede">Everything you need to manage, organize, and deploy video advertising campaigns. Launch when you are ready.</p>
        </div>
        <div className="bento bento-tools">
          <article className="tile tile-upload">
            <div>
              <h3>Upload your content</h3>
              <p>Upload your content, create a playlist, run a YouTube link, or publish a third-party website.</p>
            </div>
            <div className="tile-ui" aria-hidden="true">
              <div className="drop">
                <div>
                  <UploadSources />
                </div>
              </div>
            </div>
          </article>
        </div>
        <article className="tile tile-feature tile-analytics campaign-analytics" id="analytics">
          <div>
            <p className="tile-kicker">Realtime analytics</p>
            <h3>Know the moment a screen slips.</h3>
            <p>Live status for every display and every campaign. One clear alert when something needs a look.</p>
          </div>
          <div className="analytics-stage" aria-hidden="true">
            <div className="stat-row">
              <span>
                <b>7</b> live
              </span>
              <span className="is-alert">
                <b>1</b> alert
              </span>
              <span>
                <b>0</b> delay
              </span>
            </div>
            <svg className="spark spark-lg" viewBox="0 0 320 110" preserveAspectRatio="none" fill="none">
              <path className="spark-fill" d="M4 82 48 74 86 76 128 46 176 54 214 28 262 36 316 14 V110 H4 Z" fill="rgba(245,134,52,0.18)" />
              <path className="spark-line" d="M4 82 48 74 86 76 128 46 176 54 214 28 262 36 316 14" stroke="#f58634" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle className="spark-dot" cx="316" cy="14" r="5" fill="#f58634" />
            </svg>
            <div className="alert-row alert-pop">
              <i /> Lobby screen needs a look <small>Just now</small>
            </div>
          </div>
        </article>
        {showRest ? <SolutionRest /> : null}
      </div>
    </Reveal>
  );
}

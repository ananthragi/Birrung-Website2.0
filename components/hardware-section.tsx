"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/reveal";

const PeaceScene = dynamic(() => import("@/components/peace-scene").then((mod) => mod.PeaceScene));

export function HardwareSection({ id = "hardware" }: { id?: string }) {
  return (
    <Reveal as="section" className="section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <i /> Any screen you own
            </p>
            <h2>Hardware agnostic</h2>
          </div>
        </div>
        <div className="feature-pair">
          <article className="tile tile-feature tile-hardware">
            <div className="device-stage" aria-hidden="true">
              <div className="device">
                <div className="screen-face screen-menu">
                  <b>Lunch menu</b>
                  <span>
                    <i />
                    <i />
                  </span>
                  <span>
                    <i />
                    <i />
                  </span>
                  <span>
                    <i />
                    <i />
                  </span>
                </div>
                <span>TCL</span>
                <em>On</em>
              </div>
              <div className="device">
                <div className="screen-face screen-poster">
                  <i className="poster" />
                  <b>Today&apos;s special</b>
                  <i />
                </div>
                <span>Hisense</span>
                <em>On</em>
              </div>
              <div className="device">
                <div className="screen-face screen-agenda">
                  <b>Town hall</b>
                  <span>
                    <span className="tick" />
                    <i />
                  </span>
                  <span>
                    <span className="tick" />
                    <i />
                  </span>
                  <span>
                    <span className="tick" />
                    <i />
                  </span>
                </div>
                <span>Samsung</span>
                <em>On</em>
              </div>
              <div className="device">
                <div className="screen-face screen-player">
                  <i className="playhead" />
                  <b>Live match</b>
                  <i />
                </div>
                <span>LG</span>
                <em>On</em>
              </div>
            </div>
            <ul className="feature-points">
              <li>Any screen you own</li>
              <li>Nothing expensive to buy</li>
            </ul>
            <div>
              <p className="tile-kicker">Already have TVs?</p>
              <h3>Works on any screen.</h3>
              <p>
                Birrung lets you play the content on any smart TV or commercial screens. No need to purchase any specialised
                hardware. Of course we can provide media players if required and it has its advantages. However, you can use
                what you already have and start displaying your content
              </p>
            </div>
          </article>
          <article className="tile tile-feature tile-peace">
            <PeaceScene />
            <div>
              <h3 className="peace-heading">
                <span>Works Offline, Peace of Mind</span>
              </h3>
              <p className="peace-line">Set it once, leave it to Birrung</p>
              <p>
                Poor Wi-Fi coverage, or no internet at all? No problem, because
                <b> Birrung works offline</b>.
                <br />
                Once your activation code is synced, leave the rest to Birrung. Your screens keep playing, even when your Wi-Fi
                takes a coffee break. And as soon as you’re back online, Birrung picks up the latest updates automatically.
              </p>
              <p className="peace-note">*Offline playback is subject to compatible screens or media players.</p>
            </div>
          </article>
        </div>
      </div>
    </Reveal>
  );
}

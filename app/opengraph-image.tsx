import { ImageResponse } from "next/og";

export const alt = "Birrung. Digital signage, simplified.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14110f",
          color: "#fff8f4",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", color: "#f58634", fontSize: 26, letterSpacing: 4 }}>DIGITAL SIGNAGE SOFTWARE</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 0.95, letterSpacing: -2 }}>Digital signage, simplified.</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#ffe7d4", maxWidth: 860 }}>
            Create, schedule, and manage content on every screen you own.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#f58634" }}>Birrung</div>
      </div>
    ),
    { ...size },
  );
}

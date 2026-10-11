import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Sense - Your Wallet's Missing Half";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse can't use next/font, so fetch TTFs from Google Fonts directly, subset to the text drawn.
async function loadGoogleFont(family: string, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`
  ).then((res) => res.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`Could not load ${family} font for OG image`);
  return fetch(url).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const logo = readFileSync(join(process.cwd(), "src/app/icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  // Passing custom fonts replaces next/og's built-in Geist, so Geist is loaded explicitly for the headline.
  const [borel, geist] = await Promise.all([
    loadGoogleFont("Borel", "sense"),
    loadGoogleFont("Geist", "Your wallet's missing half."),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#101314",
          padding: "90px",
          fontFamily: "geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={56} height={56} alt="" />
          <span
            style={{
              display: "flex",
              position: "relative",
              top: 13,
              fontFamily: "Borel",
              fontSize: 48,
              lineHeight: 1,
              color: "#f4f3f1",
              opacity: 0.6,
            }}
          >
            sense
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 76,
            fontWeight: 700,
            color: "#f4f3f1",
            marginTop: 32,
            maxWidth: 980,
          }}
        >
          <span style={{ marginRight: 22 }}>Your</span>
          <span style={{ marginRight: 22 }}>wallet&apos;s</span>
          <span style={{ marginRight: 22, color: "#e8503a" }}>missing</span>
          <span>half.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "geist", data: geist, style: "normal", weight: 400 },
        { name: "Borel", data: borel, style: "normal", weight: 400 },
      ],
    }
  );
}

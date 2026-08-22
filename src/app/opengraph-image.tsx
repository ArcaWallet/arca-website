import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Arca Wallet - Your Wallet's Missing Half";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logo = readFileSync(join(process.cwd(), "src/app/icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={56} height={56} alt="" />
          <span style={{ display: "flex", fontSize: 40, color: "#f4f3f1", opacity: 0.6 }}>
            Arca Wallet
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
    { ...size }
  );
}

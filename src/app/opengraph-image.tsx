import { ImageResponse } from "next/og";

export const alt = "Arca Wallet - Your Wallet's Missing Half";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#101314",
          padding: "90px",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, color: "#f4f3f1", opacity: 0.6 }}>
          Arca Wallet
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 76,
            fontWeight: 700,
            color: "#f4f3f1",
            marginTop: 28,
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

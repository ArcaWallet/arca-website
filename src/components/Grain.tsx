export function Grain({ frequency, opacity }: { frequency: number; opacity: number }) {
  const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`;
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: `url("${svg}")`, opacity, mixBlendMode: "overlay" }}
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function CardStage({
  children,
  grayscale = false,
}: {
  children: React.ReactNode;
  grayscale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const s = Math.min(1, Math.max(0.55, (el.offsetWidth - 8) / 440));
      setScale(s);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative my-[14px] min-h-[290px] flex-1 ${grayscale ? "grayscale-[85%]" : ""}`}
      style={{ transform: `scale(${scale})`, transformOrigin: "50% 50%" }}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          timer = setTimeout(() => setRevealed(true), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[.8s] ease-[cubic-bezier(.16,1,.3,1)] ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-[28px] opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

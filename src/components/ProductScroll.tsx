"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    heading: "One capture. Every field.",
    body: "Launch the camera straight from the home screen. Front, back, barcode, brand - Sense compiles the whole card in a single click.",
    image: "/assets/screen-scan.png",
    alt: "Scanning a card",
  },
  {
    heading: "Two shelves, zero clutter.",
    body: "Gift Cards and Personal cards sit side by side, ordered by how close you are and how recently you used them. No brand silos, no ads, no lost cards.",
    image: "/assets/screen-giftcards.png",
    alt: "Gift cards shelf",
  },
  {
    heading: "Open, tap, scanned.",
    body: "The card you need is one tap from the lock screen, and the barcode fills the screen at full brightness for the scanner - with or without a signal.",
    image: "/assets/screen-notification.png",
    alt: "Lock screen notification",
  },
];

export function ProductScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = p >= 0.66 ? 2 : p >= 0.33 ? 1 : 0;
    setStep((prev) => (prev === next ? prev : next));
  });

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const ringY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div id="product" ref={sectionRef} className="relative">
      {/* Mobile: plain stacked steps, no sticky/scroll-jack */}
      <section className="bg-bone px-[5vw] py-[64px] text-ink md:hidden">
        <div className="mb-[32px] font-mono text-[11.5px] tracking-[0.18em] text-flame uppercase">
          Scan · Store · Access
        </div>
        <div className="flex flex-col gap-[48px]">
          {steps.map((s) => (
            <Reveal key={s.heading}>
              <h3 className="m-0 text-[clamp(28px,7vw,40px)] leading-[1.05] tracking-[-0.03em]">
                {s.heading}
              </h3>
              <p className="mt-[14px] text-[16px] leading-[1.55] text-ink/60">{s.body}</p>
              <div className="relative mx-auto mt-[24px] aspect-[1206/2622] w-[220px] overflow-hidden rounded-[36px] shadow-[0_30px_70px_rgba(16,19,20,.25),0_0_0_1px_rgba(16,19,20,.08)]">
                <Image src={s.image} alt={s.alt} fill sizes="220px" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Desktop / tablet: sticky scroll-driven walkthrough */}
      <section className="relative hidden h-[340vh] bg-bone text-ink md:block">
        <div className="sticky top-[88px] grid h-[calc(100vh-88px)] grid-cols-2 items-center gap-[4vw] overflow-hidden px-[6vw]">
          <motion.div
            className="absolute top-1/2 left-[-18vw] -mt-[35vw] h-[70vw] w-[70vw] rounded-full border-[28px] border-flame/10"
            style={{
              rotate: shouldReduceMotion ? 0 : ringRotate,
              y: shouldReduceMotion ? 0 : ringY,
            }}
          />

          <div className="relative">
            <div className="mb-[26px] font-mono text-[11.5px] tracking-[0.18em] text-flame uppercase">
              Scan · Store · Access
            </div>
            <div className="relative min-h-[300px]">
              {steps.map((s, i) => (
                <div
                  key={s.heading}
                  className={`absolute inset-0 transition-[opacity,transform] duration-[.5s] ${
                    step === i ? "opacity-100" : "translate-y-[18px] opacity-0"
                  }`}
                >
                  <h3 className="m-0 text-[clamp(30px,3.6vw,50px)] leading-[1.02] tracking-[-0.035em]">
                    {s.heading}
                  </h3>
                  <p className="mt-[18px] max-w-[440px] text-[18px] leading-[1.55] text-ink/60">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-[38px] flex gap-[8px]">
              {steps.map((s, i) => (
                <span
                  key={s.heading}
                  className={`h-[3px] w-[34px] rounded-[2px] transition-colors duration-[.4s] ${
                    step === i ? "bg-flame" : "bg-ink/16"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative aspect-[1206/2622] w-[min(330px,25vw)] justify-self-center overflow-hidden rounded-[44px] shadow-[0_40px_90px_rgba(16,19,20,.28),0_0_0_1px_rgba(16,19,20,.08)]">
            {steps.map((s, i) => (
              <div
                key={s.image}
                className={`absolute inset-0 overflow-hidden rounded-[44px] transition-[opacity,transform] duration-[.55s] ${
                  step === i ? "scale-100 opacity-100" : "scale-[.96] opacity-0"
                }`}
              >
                <Image src={s.image} alt={s.alt} fill sizes="330px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

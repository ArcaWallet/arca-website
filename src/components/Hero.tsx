"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { APP_STORE_URL } from "@/lib/constants";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

const rings = [
  { size: 1500, color: "border-flame/16", delay: ".2s" },
  { size: 1080, color: "border-sage/11", delay: ".4s" },
  { size: 700, color: "border-flame/9", delay: ".6s" },
];

const headlineWords = [
  { text: "Your", flame: false },
  { text: "wallet's", flame: false },
  { text: "missing", flame: true },
  { text: "half.", flame: false },
];

const punches = [true, true, true, true, true, true, true, false, false, false];

const spring: Transition = { type: "spring", stiffness: 120, damping: 16, mass: 0.9 };

const fanVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 1.45 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

function cardVariants(
  hidden: { x: number; y: number; rotate: number },
  visible: { x: number; y: number; rotate: number }
) {
  return {
    hidden: { ...hidden, opacity: 0 },
    visible: { ...visible, opacity: 1, transition: spring },
  };
}

function Grain({ frequency, opacity }: { frequency: number; opacity: number }) {
  const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`;
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: `url("${svg}")`, opacity, mixBlendMode: "overlay" }}
    />
  );
}

function Brushed({ angle, opacity }: { angle: number; opacity: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: `repeating-linear-gradient(${angle}deg, rgba(255,255,255,.05) 0 1px, transparent 1px 6px)`,
        opacity,
      }}
    />
  );
}

function HeroCard({
  hidden,
  visible,
  background,
  boxShadow,
  draggable = true,
  children,
}: {
  hidden: { x: number; y: number; rotate: number };
  visible: { x: number; y: number; rotate: number };
  background: string;
  boxShadow: string;
  draggable?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={cardVariants(hidden, visible)}
      className="absolute top-1/2 left-1/2 -mt-[75px] -ml-[120px] h-[150px] w-[240px]"
    >
      <motion.div
        drag={draggable}
        dragElastic={0.15}
        dragSnapToOrigin
        whileDrag={draggable ? { scale: 1.05, zIndex: 20 } : undefined}
        whileHover={{ scale: 1.02 }}
        className={`relative h-full w-full overflow-hidden rounded-[12px] ${
          draggable ? "cursor-grab active:cursor-grabbing" : ""
        }`}
        style={{ background, boxShadow }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <header
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-[5vw] pt-[92px] pb-[56px] text-bone"
    >
      {rings.map((ring) => (
        <div
          key={ring.size}
          className={`absolute top-1/2 left-1/2 rounded-full border-[30px] ${ring.color} animate-[fadein_1.4s_both]`}
          style={{
            width: ring.size,
            height: ring.size,
            marginTop: -ring.size / 2,
            marginLeft: -ring.size / 2,
            animationDelay: ring.delay,
          }}
        />
      ))}

      <motion.div
        className="relative mb-[10px] h-[190px] w-full max-w-[1100px] md:h-[252px]"
        variants={fanVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Blue Bottle Coffee */}
        <HeroCard
          hidden={isMobile ? { x: -120, y: -260, rotate: -18 } : { x: -330, y: -760, rotate: -38 }}
          visible={isMobile ? { x: -78, y: 6, rotate: -9 } : { x: -268, y: 26, rotate: -19 }}
          draggable={!isMobile}
          background="linear-gradient(155deg,#fdfcfa 0%,#f6f4ef 45%,#e4e0d7 100%)"
          boxShadow="0 24px 50px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.95), inset 0 0 0 1px rgba(16,19,20,.05)"
        >
          <Grain frequency={0.85} opacity={0.07} />
          <div className="absolute top-[14px] left-[16px] flex items-center gap-[8px]">
            <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#2f5d4f]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e6ede9" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 8h13a2 2 0 0 1 0 4h-.6" />
                <path d="M4 8v7a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V8" />
                <path d="M8 4c.5 1 .5 2-.5 3M12 4c.5 1 .5 2-.5 3" />
              </svg>
            </span>
            <span className="text-[12px] font-bold tracking-[0.02em] text-[#2f5d4f]">
              Blue Bottle Coffee
            </span>
          </div>
          <div className="absolute top-[52px] left-[16px] font-mono text-[9px] font-medium tracking-[0.18em] text-ink/42">
            GIFT CARD
          </div>
          <div className="absolute top-[66px] left-[16px] text-[34px] font-bold tracking-[-0.035em] text-ink">
            $25
          </div>
          <div className="absolute bottom-[14px] left-[16px] font-mono text-[8px] font-medium tracking-[0.06em] text-ink/38">
            7742 8813 0094
          </div>
          <div
            className="absolute right-[14px] bottom-[12px] h-[34px] w-[78px] opacity-80"
            style={{
              background:
                "repeating-linear-gradient(90deg,#101314 0 1px,transparent 1px 3px,#101314 3px 5px,transparent 5px 8px)",
            }}
          />
        </HeroCard>

        {/* Target */}
        <HeroCard
          hidden={isMobile ? { x: 0, y: -300, rotate: 10 } : { x: -190, y: -820, rotate: 26 }}
          visible={isMobile ? { x: 0, y: -16, rotate: -3 } : { x: -172, y: -58, rotate: -9.5 }}
          draggable={!isMobile}
          background="linear-gradient(155deg,#f2715c 0%,#ef5f49 45%,#b8341f 100%)"
          boxShadow="0 24px 50px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.14)"
        >
          <Grain frequency={0.9} opacity={0.04} />
          <div className="absolute inset-x-0 top-[64px] h-[15px] bg-white/90" />
          <div className="absolute inset-y-0 left-[150px] w-[15px] bg-white/90" />
          <div className="absolute top-[56px] left-[142px] h-[31px] w-[31px] rounded-full border-[6px] border-white/90 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,.15)]" />
          <div className="absolute top-[15px] left-[16px] text-[12.5px] font-bold tracking-[-0.01em] text-white">
            Target
          </div>
          <div className="absolute bottom-[36px] left-[16px] font-mono text-[9px] font-medium tracking-[0.18em] text-white/75">
            GIFT CARD
          </div>
          <div className="absolute bottom-[12px] left-[16px] text-[26px] leading-none font-bold tracking-[-0.03em] text-white">
            $50
          </div>
          <div
            className="absolute inset-0 w-[60%] animate-[sheen_3.4s_1.6s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent)",
            }}
          />
        </HeroCard>

        {/* Equinox */}
        <HeroCard
          hidden={isMobile ? { x: 120, y: -280, rotate: -12 } : { x: -40, y: -880, rotate: -30 }}
          visible={isMobile ? { x: 78, y: 14, rotate: 8 } : { x: -64, y: 52, rotate: 4 }}
          draggable={!isMobile}
          background="linear-gradient(155deg,#33454b 0%,#25333a 45%,#141c1f 100%)"
          boxShadow="0 26px 54px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.08)"
        >
          <Brushed angle={115} opacity={0.5} />
          <div
            className="absolute inset-x-0 top-[22px] h-[26px]"
            style={{ background: "linear-gradient(180deg,#0a0d0e,#20282b)" }}
          />
          <div className="absolute top-[58px] left-[16px] flex items-center gap-[7px]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c3d5d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l2 6 4-14 2 8h8" />
            </svg>
            <span className="text-[12px] font-bold tracking-[0.24em] text-white">EQUINOX</span>
          </div>
          <div className="absolute top-[82px] left-[16px] font-mono text-[9px] font-medium tracking-[0.12em] text-sage/60">
            MEMBER SINCE 2019
          </div>
          <div className="absolute bottom-[16px] left-[16px] text-[13px] font-semibold tracking-[0.01em] text-white/92">
            J. DOE
          </div>
          <div className="absolute right-[16px] bottom-[16px] font-mono text-[10px] font-medium tracking-[0.08em] text-sage/55">
            4471 0092
          </div>
        </HeroCard>

        {!isMobile && (
        <>
        {/* Paper Source */}
        <HeroCard
          hidden={{ x: 120, y: -800, rotate: 34 }}
          visible={{ x: 58, y: -40, rotate: -3 }}
          background="linear-gradient(155deg,#dfe9e6 0%,#c7d7d2 45%,#aec2bd 100%)"
          boxShadow="0 24px 50px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.6)"
        >
          <Grain frequency={0.5} opacity={0.1} />
          <div className="absolute top-[14px] left-[16px] flex items-center gap-[6px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#e8503a">
              <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8-5.2-4.6 6.9-.6z" />
            </svg>
            <span className="text-[11.5px] font-bold tracking-[0.02em] text-[#25383c]">
              Paper Source
            </span>
          </div>
          <div className="absolute top-[34px] left-[16px] font-mono text-[8.5px] font-medium tracking-[0.14em] text-[#25383c]/55">
            BUY 9, GET THE 10TH FREE
          </div>
          <div className="absolute top-[58px] right-[16px] left-[16px] grid grid-cols-5 gap-[7px]">
            {punches.map((filled, i) =>
              filled ? (
                <span
                  key={i}
                  className="h-[19px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,.4),inset_0_-1px_2px_rgba(0,0,0,.25)]"
                  style={{ background: "linear-gradient(155deg,#f0745c,#d9432b)" }}
                />
              ) : (
                <span
                  key={i}
                  className="box-border h-[19px] rounded-full border-[1.5px] border-dashed border-[#25383c]/40"
                />
              )
            )}
          </div>
          <div className="absolute bottom-[12px] left-[16px] font-mono text-[8px] font-medium tracking-[0.1em] text-[#25383c]/50">
            LOYALTY · NO EXPIRY
          </div>
        </HeroCard>

        {/* Public Library */}
        <HeroCard
          hidden={{ x: 300, y: -900, rotate: -22 }}
          visible={{ x: 206, y: 58, rotate: 11 }}
          background="linear-gradient(155deg,#fefdfb 0%,#f7f4ee 45%,#e3ded2 100%)"
          boxShadow="0 24px 50px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.9)"
        >
          <Grain frequency={0.7} opacity={0.08} />
          <div
            className="absolute inset-x-0 top-0 h-[22px]"
            style={{ background: "linear-gradient(180deg,#3a4f56,#28383d)" }}
          />
          <div className="absolute top-[4px] left-[16px] flex items-center gap-[5px]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6c-1.5-1-4-1.5-6-1v13c2-.5 4.5 0 6 1 1.5-1 4-1.5 6-1V5c-2-.5-4.5 0-6 1z" />
            </svg>
            <span className="text-[10px] font-bold tracking-[0.2em] text-white">PUBLIC LIBRARY</span>
          </div>
          <div className="absolute top-[36px] left-[16px] font-mono text-[8.5px] font-medium tracking-[0.12em] text-ink/40">
            CARDHOLDER
          </div>
          <div className="absolute top-[50px] left-[16px] text-[15px] font-semibold tracking-[-0.01em] text-ink">
            John Doe
          </div>
          <div className="absolute top-[76px] right-[16px] left-[16px] h-px bg-ink/18" />
          <div
            className="absolute right-[16px] bottom-[14px] left-[16px] h-[32px] opacity-80"
            style={{
              background:
                "repeating-linear-gradient(90deg,#101314 0 2px,transparent 2px 4px,#101314 4px 5px,transparent 5px 9px)",
            }}
          />
        </HeroCard>

        {/* 1757 Golf Club */}
        <HeroCard
          hidden={{ x: 400, y: -700, rotate: 40 }}
          visible={{ x: 318, y: -52, rotate: 20 }}
          background="linear-gradient(155deg,#57707a 0%,#405259 45%,#22343a 100%)"
          boxShadow="0 24px 50px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.1)"
        >
          <Brushed angle={70} opacity={0.4} />
          <div className="absolute top-[15px] left-[16px] text-[11.5px] font-bold tracking-[0.02em] text-white">
            1757 Golf Club
          </div>
          <div className="absolute top-[36px] left-[16px] font-mono text-[8.5px] font-medium tracking-[0.14em] text-sage/65">
            SEASON PASS 26/27
          </div>
          <div
            className="absolute top-[32px] right-[20px] h-[54px] w-[54px] rounded-full"
            style={{
              background: "radial-gradient(circle at 34% 30%,#ffffff,#e2e6e4 58%,#aab6b3)",
              boxShadow: "inset -4px -5px 9px rgba(16,19,20,.22), 0 6px 14px rgba(0,0,0,.35)",
            }}
          >
            <div
              className="absolute inset-[6px] rounded-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(16,19,20,.16) 1.4px, transparent 1.6px)",
                backgroundSize: "9px 9px",
              }}
            />
          </div>
          <div className="absolute bottom-[16px] left-[16px] text-[13px] font-semibold text-white/90">
            J. DOE
          </div>
          <div className="absolute bottom-[40px] left-[16px] font-mono text-[8px] font-medium tracking-[0.1em] text-sage/50">
            MEMBER 0092-4471
          </div>
        </HeroCard>
        </>
        )}
      </motion.div>

      <div className="relative max-w-[1000px] text-center">
        <Image
          src="/assets/arca-logo.png"
          alt=""
          width={104}
          height={104}
          priority
          className="mx-auto -mt-[6px] mb-[6px] block animate-[pop_.7s_1.15s_cubic-bezier(.2,.9,.3,1.2)_both]"
        />
        <motion.h1
          className="m-0 flex flex-wrap justify-center gap-x-[.28em] gap-y-0 text-[clamp(48px,8.2vw,116px)] leading-[0.9] font-bold tracking-[-0.05em]"
          variants={headlineContainer}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          {headlineWords.map((word) => (
            <motion.span
              key={word.text}
              variants={wordVariants}
              className={word.flame ? "text-flame" : ""}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>
        <p
          className="mx-auto mt-[20px] max-w-[560px] animate-[rise_.8s_cubic-bezier(.16,1,.3,1)_both] text-[19px] leading-[1.5] text-bone/62"
          style={{ animationDelay: "2.05s" }}
        >
          Gift cards, memberships, loyalty, passes. Everything with a barcode - scanned once, organized forever, and one tap away the moment you walk past the door.
        </p>
        <div
          className="mt-[26px] flex animate-[rise_.8s_cubic-bezier(.16,1,.3,1)_both] flex-col items-center justify-center gap-[14px] md:flex-row md:gap-[16px]"
          style={{ animationDelay: "2.2s" }}
        >
          <a
            href={APP_STORE_URL}
            className="rounded-full bg-flame px-[32px] py-[19px] text-[16.5px] font-bold text-white no-underline transition-colors hover:bg-bone hover:text-ink"
          >
            Pre-order coming soon
          </a>
          <span className="text-center font-mono text-[12px] leading-[1.6] tracking-[0.1em] text-bone/40 uppercase md:text-left">
            iOS · free at launch
            <br />
            nothing leaves your phone
          </span>
        </div>
      </div>
    </header>
  );
}

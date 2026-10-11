import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Proximity() {
  return (
    <section className="grid grid-cols-1 items-center gap-[40px] bg-ink px-[5vw] py-[56px] text-bone md:grid-cols-[0.9fr_1.1fr] md:gap-[6vw] md:py-[110px]">
      <Reveal className="relative order-2 mx-auto flex h-[190px] w-[280px] items-center justify-center md:order-none md:h-[220px] md:w-[340px]">
        <span className="absolute h-[70px] w-[70px] animate-[ping_2.8s_ease-out_infinite] rounded-full bg-flame opacity-50" />
        <span className="absolute h-[70px] w-[70px] animate-[ping_2.8s_ease-out_infinite] rounded-full bg-flame opacity-50 [animation-delay:1.4s]" />
        <div className="relative flex w-[260px] items-start gap-[12px] rounded-[20px] bg-bone/96 px-[16px] py-[14px] text-ink shadow-[0_20px_50px_rgba(0,0,0,.5)] md:w-[320px]">
          <Image
            src="/assets/sense-logo.png"
            alt=""
            width={40}
            height={40}
            className="block flex-none rounded-[9px]"
          />
          <div className="flex-1">
            <div className="flex items-baseline justify-between">
              <span className="text-[15px] font-bold">You&apos;re near Target</span>
              <span className="text-[12px] text-ink/45">now</span>
            </div>
            <div className="mt-[2px] text-[14px] text-ink/60">3 cards · $61.20 available</div>
            <div className="text-[14px] text-ink/60">Expires 8/10/27</div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="order-1 md:order-none">
        <div className="font-mono text-[11.5px] tracking-[0.18em] text-flame uppercase">
          Proximity
        </div>
        <h2 className="mt-[20px] text-[clamp(32px,4.2vw,56px)] leading-[1.02] tracking-[-0.04em] font-bold">
          You&apos;ve earned the discount.
          <br />
          We make sure you use it.
        </h2>
        <p className="mt-[20px] max-w-[520px] text-[18px] leading-[1.55] text-bone/60">
          A card you forget is a card you wasted. Sense watches the map, not you - a quiet nudge as you get close, tuned to whatever radius you set, and the barcode is one tap away.
        </p>
      </Reveal>
    </section>
  );
}

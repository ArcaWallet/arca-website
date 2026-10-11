import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CardStage } from "@/components/CardStage";

function CardSlot({
  transform,
  z,
  children,
}: {
  transform: string;
  z: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -mt-[63px] -ml-[100px] h-[126px] w-[200px] overflow-hidden rounded-[11px] shadow-[0_18px_40px_rgba(0,0,0,.45)]"
      style={{ transform, zIndex: z }}
    >
      {children}
    </div>
  );
}

function StackedCard({
  src,
  alt,
  transform,
  z,
}: {
  src: string;
  alt: string;
  transform: string;
  z: number;
}) {
  return (
    <CardSlot transform={transform} z={z}>
      <Image src={src} alt={alt} fill sizes="200px" className="object-cover" />
    </CardSlot>
  );
}

function LibraryCard({ transform, z }: { transform: string; z: number }) {
  const grainSvg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

  return (
    <CardSlot transform={transform} z={z}>
      <div
        className="relative h-full w-full"
        style={{ background: "linear-gradient(155deg,#3a4f56 0%,#28383d 45%,#161f22 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: `url("${grainSvg}")`, opacity: 0.07, mixBlendMode: "overlay" }}
        />
        <div className="absolute top-[9px] left-[12px] flex h-[20px] w-[20px] flex-none items-center justify-center rounded-full bg-bone">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#33474d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6c-1.5-1-4-1.5-6-1v13c2-.5 4.5 0 6 1 1.5-1 4-1.5 6-1V5c-2-.5-4.5 0-6 1z" />
          </svg>
        </div>
        <div className="absolute top-[8px] left-[38px] text-[8px] font-bold tracking-[0.1em] text-bone">
          PUBLIC LIBRARY
        </div>
        <div className="absolute top-[18px] left-[38px] font-mono text-[6.5px] font-medium tracking-[0.1em] text-sage/70">
          EST. 1962
        </div>
        <div
          className="absolute inset-x-0 top-[33px] h-[3px]"
          style={{ background: "linear-gradient(180deg,#c3d5d2 50%,rgba(244,243,241,.55) 50%)" }}
        />
        <div className="absolute top-[42px] left-[12px] font-mono text-[6.5px] font-medium tracking-[0.1em] text-bone/45">
          CARDHOLDER
        </div>
        <div className="absolute top-[51px] left-[12px] text-[12px] font-semibold tracking-[-0.01em] text-bone">
          John Doe
        </div>
        <div className="absolute top-[71px] left-[12px] font-mono text-[6.5px] font-medium tracking-[0.1em] text-bone/45">
          CARD NO.
        </div>
        <div className="absolute top-[71px] right-[12px] font-mono text-[6.5px] font-medium tracking-[0.08em] text-bone/45">
          EXP 12/29
        </div>
        <div className="absolute top-[80px] left-[12px] font-mono text-[9.5px] font-semibold tracking-[0.03em] text-bone">
          21982 0123 4567
        </div>
        <div className="absolute top-[95px] right-[12px] left-[12px] h-px bg-bone/18" />
        <div
          className="absolute right-[12px] bottom-[8px] left-[12px] h-[18px] opacity-80"
          style={{
            background:
              "repeating-linear-gradient(90deg,#f4f3f1 0 2px,transparent 2px 4px,#f4f3f1 4px 5px,transparent 5px 9px)",
          }}
        />
      </div>
    </CardSlot>
  );
}

export function WhySense() {
  return (
    <section id="system" className="bg-ink px-[5vw] pt-[64px] pb-[56px] text-bone md:pt-[120px] md:pb-[110px]">
      <Reveal className="max-w-[900px]">
        <div className="font-mono text-[11.5px] tracking-[0.18em] text-flame uppercase">
          The key insight
        </div>
        <h2 className="mt-[20px] text-[clamp(32px,4.4vw,60px)] leading-[1.02] tracking-[-0.04em] text-balance font-bold">
          One half of your wallet got a century of engineering. The other got a{" "}
          <span className="text-flame">rubber band</span>.
        </h2>
      </Reveal>

      <div className="mt-[40px] grid grid-cols-1 gap-[20px] md:mt-[60px] md:grid-cols-2">
        {/* Locked down */}
        <Reveal
          delay={80}
          className="flex flex-col overflow-hidden rounded-[22px] border border-bone/14 p-[24px] md:p-[34px]"
        >
          <div className="flex items-baseline justify-between gap-[16px]">
            <div className="font-mono text-[11.5px] tracking-[0.16em] text-bone/45 uppercase">
              Locked down
            </div>
            <div className="font-mono text-[11.5px] tracking-[0.14em] text-bone/28 uppercase">
              Already solved
            </div>
          </div>

          <CardStage grayscale>
            <StackedCard src="/assets/card-license.png" alt="Driver license" transform="translate(0px,-70px) rotate(-2deg)" z={1} />
            <StackedCard src="/assets/card-credit.png" alt="Credit card" transform="translate(0px,0px) rotate(0deg)" z={2} />
            <StackedCard src="/assets/card-debit.png" alt="Debit card" transform="translate(0px,70px) rotate(2deg)" z={3} />
          </CardStage>

          <div className="text-[30px] font-bold tracking-[-0.03em] text-bone/62">
            IDs. Credit. Debit.
          </div>
          <p className="mt-[12px] mb-[22px] max-w-[430px] text-[16.5px] leading-[1.55] text-bone/45">
            Chips, holograms, tamper seals, issuer approval. A whole industry protects these three, and Apple Wallet already took them off your hands.
          </p>
          <div className="mt-auto flex flex-wrap gap-[8px]">
            {["Encrypted", "Issuer-controlled", "Handled"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-bone/20 px-[12px] py-[8px] font-mono text-[10.5px] tracking-[0.12em] text-bone/60 uppercase"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Left over */}
        <Reveal
          delay={180}
          className="relative flex flex-col overflow-hidden rounded-[22px] bg-flame p-[24px] text-white md:p-[34px]"
        >
          <div className="absolute top-[-150px] right-[-170px] h-[460px] w-[460px] rounded-full border-[26px] border-white/16" />

          <div className="relative flex items-baseline justify-between gap-[16px]">
            <div className="font-mono text-[11.5px] tracking-[0.16em] uppercase opacity-[.85]">
              Left over
            </div>
            <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase opacity-[.55]">
              Nobody&apos;s problem
            </div>
          </div>

          <CardStage>
            <StackedCard src="/assets/card-coffee.png" alt="Coffee shop gift card" transform="translate(-96px,-52px) rotate(-11deg)" z={1} />
            <StackedCard src="/assets/card-walmart.png" alt="Walmart gift card" transform="translate(94px,-44px) rotate(8deg)" z={2} />
            <LibraryCard transform="translate(-102px,56px) rotate(5deg)" z={3} />
            <StackedCard src="/assets/card-loyalty.png" alt="Loyalty punch card" transform="translate(80px,60px) rotate(-7deg)" z={4} />
          </CardStage>

          <div className="relative text-[30px] font-bold tracking-[-0.03em]">
            Gift cards. Memberships. Loyalty Programs. Passes.
          </div>
          <p className="relative mt-[12px] mb-[22px] max-w-[450px] text-[16.5px] leading-[1.55] text-white/85">
            No chip, no issuer, no bank approval - just a number you&apos;re allowed to keep. So they ended up in a hundred brand apps, a junk drawer, and an email you&apos;ll never find again.
          </p>
          <div className="relative mt-auto flex flex-wrap gap-[8px]">
            {["A hundred apps", "A junk drawer", "Expired unnoticed"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/45 px-[12px] py-[8px] font-mono text-[10.5px] tracking-[0.12em] text-white uppercase"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={120}
        className="mt-[20px] flex flex-wrap items-center justify-between gap-[24px] rounded-[22px] bg-bone px-[24px] py-[28px] text-ink md:gap-[40px] md:px-[40px] md:py-[36px]"
      >
        <div className="flex items-center gap-[26px]">
          <Image
            src="/assets/sense-logo.png"
            alt=""
            width={62}
            height={62}
            className="block flex-none"
          />
          <div>
            <div className="text-[26px] leading-[1.1] font-bold tracking-[-0.03em]">
              But every card on the right scans the same way.
            </div>
            <p className="mt-[8px] max-w-[560px] text-[16px] leading-[1.5] text-ink/60">
              One standard, one scanner, one place they can all live. That is the entire idea behind Sense.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div
            className="h-[44px] w-[118px] opacity-80"
            style={{
              background:
                "repeating-linear-gradient(90deg,#101314 0 2px,transparent 2px 4px,#101314 4px 5px,transparent 5px 9px)",
            }}
          />
          <span className="font-mono text-[11px] leading-[1.5] tracking-[0.14em] text-ink/45 uppercase">
            Code 128
            <br />
            QR · PDF417
          </span>
        </div>
      </Reveal>
    </section>
  );
}

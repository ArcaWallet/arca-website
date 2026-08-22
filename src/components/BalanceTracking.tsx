import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const rows = [
  { color: "bg-flame", label: "Spend entry on every card", value: "$25 → $12.40" },
  { color: "bg-sage", label: "Expiry warnings", value: "8/10/27" },
  { color: "bg-slate-mid", label: "Stored on-device, encrypted", value: "offline" },
];

export function BalanceTracking() {
  return (
    <section className="grid grid-cols-1 items-center gap-[40px] bg-bone px-[5vw] py-[64px] text-ink md:grid-cols-2 md:gap-[6vw] md:py-[120px]">
      <Reveal>
        <div className="font-mono text-[11.5px] tracking-[0.18em] text-flame uppercase">
          Balance tracking
        </div>
        <h2 className="mt-[20px] text-[clamp(32px,4.2vw,56px)] leading-[1.02] tracking-[-0.04em] font-bold">
          Every dollar accounted for.
        </h2>
        <p className="mt-[20px] mb-[32px] max-w-[460px] text-[18px] leading-[1.55] text-ink/60">
          Log what you spend the second you spend it. Arca lets you keep a running balance, warns you before a card expires, and works with no signal at all.
        </p>
        <div className="flex max-w-[440px] flex-col gap-[14px]">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-[14px] rounded-[14px] bg-white px-[18px] py-[16px] shadow-[0_1px_3px_rgba(0,0,0,.06)]"
            >
              <span className={`h-[8px] w-[8px] flex-none rounded-full ${row.color}`} />
              <span className="text-[16px] font-semibold">{row.label}</span>
              <span className="ml-auto font-mono text-[15px] font-semibold text-slate-mid">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} className="relative mx-auto w-[70vw] max-w-[280px] md:w-[min(360px,30vw)] md:max-w-none">
        <div
          className="absolute top-1/2 left-1/2 -mt-[65%] -ml-[65%] w-[130%] rounded-full pb-[130%]"
          style={{
            background: "radial-gradient(circle, rgba(232,80,58,.14), transparent 62%)",
          }}
        />
        <div className="relative overflow-hidden rounded-[44px] shadow-[0_40px_90px_rgba(16,19,20,.28),0_0_0_1px_rgba(16,19,20,.08)]">
          <Image
            src="/assets/screen-detail.png"
            alt="Card detail with barcode and balance"
            width={1206}
            height={2622}
            className="block h-auto w-full"
          />
        </div>
      </Reveal>
    </section>
  );
}

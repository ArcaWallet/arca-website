import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export function Pricing() {
  return (
    <section id="plans" className="bg-bone px-[5vw] py-[64px] text-ink md:py-[120px]">
      <Reveal className="flex flex-wrap items-end justify-between gap-[32px]">
        <h2 className="m-0 text-[clamp(32px,4.2vw,56px)] leading-none tracking-[-0.04em] font-bold">
          Pricing
        </h2>
        <span className="font-mono text-[11.5px] leading-[1.6] tracking-[0.14em] text-ink/45 uppercase">
          No ads
          <br />
          Nothing leaves your phone
        </span>
      </Reveal>

      <div className="mt-[36px] grid grid-cols-1 gap-[20px] md:mt-[52px] md:grid-cols-3">
        <Reveal className="flex min-h-[260px] flex-col justify-between rounded-[22px] bg-ink p-[26px] text-bone md:min-h-[300px] md:p-[34px]">
          <div>
            <div className="font-mono text-[11.5px] tracking-[0.16em] text-flame uppercase">
              Individual
            </div>
            <div className="mt-[16px] mb-[10px] text-[52px] font-bold tracking-[-0.04em]">
              Free
            </div>
            <p className="text-[16px] leading-[1.5] text-bone/60">
              Unlimited local card storage and every offline feature, secured by your phone&apos;s own encryption.
            </p>
          </div>
          <a
            href={APP_STORE_URL}
            className="mt-[26px] inline-block rounded-full bg-flame px-[22px] py-[15px] text-center text-[15.5px] font-bold text-white no-underline transition-colors hover:bg-bone hover:text-ink"
          >
            Pre-order
          </a>
        </Reveal>

        <Reveal
          delay={120}
          className="flex min-h-[260px] flex-col justify-between rounded-[22px] border border-ink/10 bg-white p-[26px] md:min-h-[300px] md:p-[34px]"
        >
          <div>
            <div className="font-mono text-[11.5px] tracking-[0.16em] text-slate-mid uppercase">
              Family
            </div>
            <div className="mt-[16px] mb-[10px] text-[52px] font-bold tracking-[-0.04em]">
              $3<span className="text-[18px] font-medium text-ink/45">/month</span>
            </div>
            <p className="text-[16px] leading-[1.5] text-ink/60">
              Unlimited sharing and transfers for up to six people, with cloud backup for every card.
            </p>
          </div>
          <span className="mt-[26px] font-mono text-[11.5px] tracking-[0.14em] text-ink/40 uppercase">
            ~6 months out
          </span>
        </Reveal>

        <Reveal
          delay={240}
          className="flex min-h-[260px] flex-col justify-between rounded-[22px] bg-sage p-[26px] text-sage-ink md:min-h-[300px] md:p-[34px]"
        >
          <div>
            <div className="font-mono text-[11.5px] tracking-[0.16em] text-slate uppercase">
              Brands
            </div>
            <div className="mt-[16px] mb-[10px] text-[52px] font-bold tracking-[-0.04em]">
              Partner
            </div>
            <p className="text-[16px] leading-[1.5] text-sage-ink/75">
              Sell discounted gift card packages at the point of purchase, distributed through Sense.
            </p>
          </div>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Brand partnership")}`}
            className="mt-[26px] text-[15px] font-semibold text-sage-ink no-underline transition-colors hover:text-flame"
          >
            Talk to us →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

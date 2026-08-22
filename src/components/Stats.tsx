import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

const stats = [
  {
    target: 23,
    prefix: "$",
    suffix: "B",
    body: "in unused U.S. gift cards, sitting in drawers and inboxes right now.",
    delay: 0,
  },
  {
    target: 244,
    prefix: "$",
    suffix: "",
    body: "is the average person's share of it - money already earned, never spent.",
    delay: 120,
  },
  {
    target: 43,
    prefix: "",
    suffix: "%",
    body: "of Americans are holding a card they've completely forgotten about.",
    delay: 240,
  },
];

export function Stats() {
  return (
    <section className="bg-slate px-[5vw] py-[64px] text-bone md:py-[120px]">
      <Reveal className="max-w-[660px]">
        <div className="font-mono text-[11.5px] tracking-[0.18em] text-sage uppercase">
          Why now
        </div>
        <h2 className="mt-[20px] text-[clamp(32px,4.2vw,56px)] leading-[1.04] tracking-[-0.04em] font-bold">
          Forgotten value is reclaimable cash.
        </h2>
      </Reveal>

      <div className="mt-[40px] grid grid-cols-1 gap-[32px] md:mt-[64px] md:grid-cols-3 md:gap-[48px]">
        {stats.map((stat) => (
          <Reveal
            key={stat.body}
            delay={stat.delay}
            className="border-t-2 border-bone/25 pt-[24px]"
          >
            <Counter
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="text-[clamp(48px,6vw,84px)] leading-none font-bold tracking-[-0.045em]"
            />
            <p className="mt-[12px] max-w-[300px] text-[17px] leading-[1.5] text-bone/65">
              {stat.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

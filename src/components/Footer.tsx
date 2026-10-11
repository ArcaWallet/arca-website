import { APP_STORE_URL } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-flame px-[5vw] pt-[64px] pb-[36px] text-center text-white md:pt-[120px] md:pb-[44px]">
      <div className="absolute left-1/2 bottom-[-420px] -ml-[550px] h-[1100px] w-[1100px] rounded-full border-[28px] border-white/18" />
      <div className="absolute left-1/2 bottom-[-300px] -ml-[390px] h-[780px] w-[780px] rounded-full border-[28px] border-white/14" />

      <Reveal className="relative">
        <h2 className="m-0 mx-auto max-w-[900px] text-[clamp(38px,6vw,86px)] leading-[0.94] tracking-[-0.05em] font-bold">
          If it has a barcode, it belongs in Sense.
        </h2>
        <a
          href={APP_STORE_URL}
          className="mt-[38px] inline-block rounded-full bg-ink px-[34px] py-[20px] text-[17px] font-bold text-white no-underline transition-colors hover:bg-white hover:text-flame"
        >
          Pre-order coming soon
        </a>
        <p className="mt-[16px] text-[14px] text-white/75">iOS · Free at launch</p>
      </Reveal>

      <div className="relative mt-[56px] flex flex-wrap items-center justify-center gap-[20px] border-t border-white/28 pt-[22px] md:mt-[96px]">
        <span className="text-[14.5px] font-semibold tracking-[-0.01em]">
          Makes Sense LLC · © 2026
        </span>
      </div>
    </footer>
  );
}

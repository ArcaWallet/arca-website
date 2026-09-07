import { TAG_LABELS, type Tag } from "@/sanity/lib/queries";

const TAG_STYLES: Record<Tag, string> = {
  product: "bg-flame/14 text-flame",
  design: "bg-slate/16 text-slate",
  company: "bg-ink/8 text-ink/55",
  security: "bg-slate-mid/18 text-slate-mid",
  news: "bg-sage/30 text-sage-ink",
  tips: "bg-flame-hover/16 text-flame-hover",
};

export function TagPill({ tag }: { tag: Tag }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-[11px] py-[5px] font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase ${TAG_STYLES[tag]}`}
    >
      {TAG_LABELS[tag]}
    </span>
  );
}

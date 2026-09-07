"use client";

import { useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; nothing to fall back to.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-[10px]">
      <span className="font-mono text-[11px] tracking-[0.14em] text-ink/45 uppercase">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-ink px-[16px] py-[8px] text-[13px] font-semibold text-bone no-underline transition-colors hover:bg-flame"
      >
        X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-ink px-[16px] py-[8px] text-[13px] font-semibold text-bone no-underline transition-colors hover:bg-flame"
      >
        Facebook
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-ink px-[16px] py-[8px] text-[13px] font-semibold text-bone no-underline transition-colors hover:bg-flame"
      >
        LinkedIn
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded-full bg-ink px-[16px] py-[8px] text-[13px] font-semibold text-bone transition-colors hover:bg-flame"
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}

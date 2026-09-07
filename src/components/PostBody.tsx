import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-[40px] mb-[14px] text-[28px] leading-tight font-bold tracking-[-0.02em] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-[32px] mb-[10px] text-[21px] leading-tight font-bold tracking-[-0.01em] text-ink">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-[20px] max-w-[65ch] text-[17px] leading-[1.7] text-ink/85">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-[24px] max-w-[65ch] border-l-[3px] border-flame pl-[20px] text-[17px] leading-[1.7] text-ink/70 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-flame underline underline-offset-2 hover:text-flame-hover"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <span className="my-[28px] block overflow-hidden rounded-[14px]">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value?.alt ?? ""}
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </span>
    ),
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}

import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { postsListQuery, type PostSummary } from "@/sanity/lib/queries";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description: "News and updates from Arca Wallet.",
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await client.fetch<PostSummary[]>(postsListQuery);
  return <BlogList posts={posts} />;
}

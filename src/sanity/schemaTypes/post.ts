import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Short summary used on the blog list and in link previews.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Product", value: "product" },
          { title: "Design", value: "design" },
          { title: "Company", value: "company" },
          { title: "Security", value: "security" },
          { title: "News", value: "news" },
          { title: "Tips", value: "tips" },
        ],
      },
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      description:
        "Landscape photo, ideally 1600px+ wide. It gets automatically cropped to several different shapes around the site (grid card, featured post, full post header, and the image shown when this post is shared on social media) - use the crop tool to control what stays in frame for the tighter crops.",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "excerpt" },
  },
});

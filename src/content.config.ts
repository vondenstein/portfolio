import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "*/index.mdx", base: "content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      slug: z.string(),
      hero_image: image(),
      hero_image_alt: z.string(),
    }),
})

const photos = defineCollection({
  loader: glob({ pattern: "*/index.mdx", base: "content/photos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      slug: z.string(),
      hero_image: image(),
      hero_image_alt: z.string(),
    }),
})

export const collections = { blog, photos }

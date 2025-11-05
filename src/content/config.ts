import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    desc: z.string(),
    tags: z.array(z.string()),
    postSlug: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};

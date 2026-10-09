
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const stories = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/stories',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    publication_date: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

export const collections = { stories };

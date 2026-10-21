import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


const projects = defineCollection({
    loader: glob({
        base: "./src/content/projects",
        pattern: "**/*.md",
    }),

    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        demoUrl: z.string().url().optional(),
        githubUrl: z.string().url().optional()
    }),
});

export const collections = {
    projects,
}
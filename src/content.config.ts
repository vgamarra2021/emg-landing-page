import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const products = defineCollection({
  loader: file("src/content/es/products.json"),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    brand: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    imagePath: z.string(),
    status: z.boolean(),
  }),
});

const tips = defineCollection({
  loader: file("src/content/es/tips.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    number: z.string(),
    image: z.string()
  }),
});

export const collections = {
  products,
  tips
};

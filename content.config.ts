import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

// Specifies that we want our content files from specifically,
// and exclusively, the content/ folder. We are using .md files
// for holding our content. Reference for this code:
// https://content.nuxt.com/docs/files/markdown
export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        date: z.string(),
      }),
    }),
  },
});

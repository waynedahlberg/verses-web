import { z } from "zod"

const authorSchema = z.object({
  name: z.string().trim().min(1),
  image: z.string().trim().min(1),
})

export const postFrontmatterSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "publishedAt must be YYYY-MM-DD",
  }),
  image: z.string().trim().min(1),
  authors: z.array(authorSchema).min(1),
  draft: z.boolean().optional().default(false),
})

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>

export type PostSummary = Omit<PostFrontmatter, "draft"> & {
  slug: string
}

export function isDraftFrontmatter(input: unknown): boolean {
  return (
    typeof input === "object" &&
    input !== null &&
    "draft" in input &&
    input.draft === true
  )
}

export function parsePostFrontmatter(
  input: unknown,
  slug: string,
): PostFrontmatter {
  const result = postFrontmatterSchema.safeParse(input)

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join(".") || "frontmatter"}: ${issue.message}`)
      .join("; ")
    throw new Error(`Invalid frontmatter in content/blog/${slug}.mdx (${details})`)
  }

  return result.data
}

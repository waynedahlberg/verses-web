import { z } from "zod"

export const legalFrontmatterSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "lastUpdated must be YYYY-MM-DD",
  }),
})

export type LegalFrontmatter = z.infer<typeof legalFrontmatterSchema>

export type LegalPageSummary = LegalFrontmatter & {
  slug: string
}

export function parseLegalFrontmatter(
  input: unknown,
  slug: string,
): LegalFrontmatter {
  const result = legalFrontmatterSchema.safeParse(input)

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join(".") || "frontmatter"}: ${issue.message}`)
      .join("; ")
    throw new Error(
      `Invalid frontmatter in content/legal/${slug}.mdx (${details})`,
    )
  }

  return result.data
}

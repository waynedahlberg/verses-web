import fs from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"
import matter from "gray-matter"
import {
  parseLegalFrontmatter,
  type LegalPageSummary,
} from "@/lib/legal-frontmatter"

const legalDirectory = path.join(process.cwd(), "content/legal")
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function slugFromLegalMdxFilename(filename: string): string {
  if (!filename.endsWith(".mdx")) {
    throw new Error(`Expected an MDX file: content/legal/${filename}`)
  }

  const slug = filename.slice(0, -".mdx".length)
  if (!slugPattern.test(slug)) {
    throw new Error(
      `Legal filename must be a lowercase slug: content/legal/${filename}`,
    )
  }

  return slug
}

export function getLegalPageBySlug(slug: string): LegalPageSummary | null {
  if (!slugPattern.test(slug)) return null

  const filePath = path.join(legalDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const { data } = matter(fs.readFileSync(filePath, "utf8"))
  const frontmatter = parseLegalFrontmatter(data, slug)
  return { slug, ...frontmatter }
}

export function getLegalPages(): LegalPageSummary[] {
  if (!fs.existsSync(legalDirectory)) return []

  return fs
    .readdirSync(legalDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .flatMap((file) => {
      const page = getLegalPageBySlug(slugFromLegalMdxFilename(file))
      return page ? [page] : []
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export async function getLegalContent(slug: string): Promise<{
  page: LegalPageSummary
  Content: ComponentType
} | null> {
  const page = getLegalPageBySlug(slug)
  if (!page) return null

  const loaded = (await import(`@/content/legal/${slug}.mdx`)) as {
    default: ComponentType
  }

  return { page, Content: loaded.default }
}

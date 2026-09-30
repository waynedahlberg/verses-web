import fs from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"
import matter from "gray-matter"
import {
  isDraftFrontmatter,
  parsePostFrontmatter,
  type PostSummary,
} from "@/lib/post-frontmatter"

const postsDirectory = path.join(process.cwd(), "content/blog")
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function slugFromMdxFilename(filename: string): string {
  if (!filename.endsWith(".mdx")) {
    throw new Error(`Expected an MDX file: content/blog/${filename}`)
  }

  const slug = filename.slice(0, -".mdx".length)
  if (!slugPattern.test(slug)) {
    throw new Error(
      `Blog filename must be a lowercase slug: content/blog/${filename}`,
    )
  }

  return slug
}

export function getPostBySlug(slug: string): PostSummary | null {
  if (!slugPattern.test(slug)) return null

  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const { data } = matter(fs.readFileSync(filePath, "utf8"))
  if (isDraftFrontmatter(data)) return null

  const { draft: _, ...frontmatter } = parsePostFrontmatter(data, slug)
  return { slug, ...frontmatter }
}

export function getPosts(): PostSummary[] {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .flatMap((file) => {
      const post = getPostBySlug(slugFromMdxFilename(file))
      return post ? [post] : []
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getPostContent(slug: string): Promise<{
  post: PostSummary
  Content: ComponentType
} | null> {
  const post = getPostBySlug(slug)
  if (!post) return null

  const loaded = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: ComponentType
  }

  return { post, Content: loaded.default }
}

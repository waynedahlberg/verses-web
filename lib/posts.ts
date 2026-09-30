import fs from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"
import matter from "gray-matter"
import {
  parsePostFrontmatter,
  type PostSummary,
} from "@/lib/post-frontmatter"

const postsDirectory = path.join(process.cwd(), "content/blog")
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function getPostBySlug(slug: string): PostSummary | null {
  if (!slugPattern.test(slug)) return null

  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const { data } = matter(fs.readFileSync(filePath, "utf8"))
  const { draft, ...frontmatter } = parsePostFrontmatter(data, slug)
  if (draft) return null

  return { slug, ...frontmatter }
}

export function getPosts(): PostSummary[] {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.slice(0, -".mdx".length))
    .flatMap((slug) => {
      const post = getPostBySlug(slug)
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

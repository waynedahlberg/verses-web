import { describe, expect, test } from "bun:test"
import { formatDate } from "@/lib/format-date"
import {
  isDraftFrontmatter,
  parsePostFrontmatter,
} from "@/lib/post-frontmatter"
import { getPostBySlug, getPosts, slugFromMdxFilename } from "@/lib/posts"

const frontmatter = {
  title: "Reading slowly",
  description: "A short note on attention.",
  publishedAt: "2026-09-12",
  image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65",
  authors: [{ name: "Verses", image: "/svg/verses-logo.svg" }],
}

describe("parsePostFrontmatter", () => {
  test("accepts the blog frontmatter shape", () => {
    expect(parsePostFrontmatter(frontmatter, "reading-slowly")).toEqual({
      ...frontmatter,
      draft: false,
    })
  })

  test("rejects a missing title", () => {
    expect(() =>
      parsePostFrontmatter({ ...frontmatter, title: "" }, "reading-slowly"),
    ).toThrow("content/blog/reading-slowly.mdx")
  })

  test("rejects a date that is not YYYY-MM-DD", () => {
    expect(() =>
      parsePostFrontmatter(
        { ...frontmatter, publishedAt: "September 12, 2026" },
        "reading-slowly",
      ),
    ).toThrow("publishedAt")
  })
})

describe("formatDate", () => {
  test("formats a date-only string without shifting the calendar day", () => {
    expect(formatDate("2026-09-12")).toBe("September 12, 2026")
  })
})

describe("blog files", () => {
  test("treats draft: true as unpublished before the rest of the frontmatter is checked", () => {
    expect(isDraftFrontmatter({ draft: true })).toBe(true)
    expect(isDraftFrontmatter({ draft: false, title: "Published" })).toBe(false)
    expect(isDraftFrontmatter(null)).toBe(false)
  })

  test("rejects a filename that cannot be a URL slug", () => {
    expect(() => slugFromMdxFilename("My Post.mdx")).toThrow(
      "content/blog/My Post.mdx",
    )
  })
})

describe("getPosts", () => {
  test("returns the published sample posts, newest first", () => {
    const posts = getPosts()

    expect(posts.map((post) => post.slug)).toEqual([
      "reading-one-verse-at-a-time",
      "why-we-are-building-verses",
    ])
    expect(posts.every((post) => post.authors.length > 0)).toBe(true)
  })

  test("hides draft posts", () => {
    expect(getPostBySlug("a-draft-note")).toBeNull()
  })
})

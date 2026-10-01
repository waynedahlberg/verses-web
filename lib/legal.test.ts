import { describe, expect, test } from "bun:test"
import { parseLegalFrontmatter } from "@/lib/legal-frontmatter"
import {
  getLegalPageBySlug,
  getLegalPages,
  slugFromLegalMdxFilename,
} from "@/lib/legal"

const frontmatter = {
  title: "Terms & Conditions",
  description: "Terms of use for the Verses app and website.",
  lastUpdated: "2026-10-01",
}

describe("parseLegalFrontmatter", () => {
  test("accepts the legal frontmatter shape", () => {
    expect(parseLegalFrontmatter(frontmatter, "terms")).toEqual(frontmatter)
  })

  test("rejects a missing title", () => {
    expect(() =>
      parseLegalFrontmatter({ ...frontmatter, title: "" }, "terms"),
    ).toThrow("content/legal/terms.mdx")
  })

  test("rejects a date that is not YYYY-MM-DD", () => {
    expect(() =>
      parseLegalFrontmatter(
        { ...frontmatter, lastUpdated: "October 1, 2026" },
        "terms",
      ),
    ).toThrow("lastUpdated")
  })
})

describe("legal files", () => {
  test("rejects a filename that cannot be a URL slug", () => {
    expect(() => slugFromLegalMdxFilename("Terms.mdx")).toThrow(
      "content/legal/Terms.mdx",
    )
  })
})

describe("getLegalPages", () => {
  test("returns the published legal pages, sorted by title", () => {
    const pages = getLegalPages()

    expect(pages.map((page) => page.slug)).toEqual([
      "cookies",
      "privacy",
      "terms",
    ])
    expect(getLegalPageBySlug("privacy")?.title).toBe("Privacy Policy")
    expect(getLegalPageBySlug("cookies")?.title).toBe("Cookie Policy")
  })
})

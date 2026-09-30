import { readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, test } from "bun:test"
import { VERSES_BLUE, VERSES_GOLD } from "@/lib/brand"

const globalsCss = readFileSync(join(process.cwd(), "app/globals.css"), "utf8")

describe("brand tokens", () => {
  test("uses the Verses navy and gold hex values", () => {
    expect(VERSES_BLUE).toBe("#073A69")
    expect(VERSES_GOLD).toBe("#DB9000")
  })

  test("exposes verses-blue and verses-gold on the design system", () => {
    expect(globalsCss.includes(`--verses-blue: ${VERSES_BLUE}`)).toBe(true)
    expect(globalsCss.includes(`--verses-gold: ${VERSES_GOLD}`)).toBe(true)
    expect(globalsCss.includes("--color-verses-blue: var(--verses-blue)")).toBe(
      true
    )
    expect(globalsCss.includes("--color-verses-gold: var(--verses-gold)")).toBe(
      true
    )
  })

  test("does not register a dark theme", () => {
    expect(globalsCss.includes("@custom-variant dark")).toBe(false)
    expect(/\n\.dark\s*\{/.test(globalsCss)).toBe(false)
    expect(globalsCss.includes("color-scheme: light")).toBe(true)
  })
})

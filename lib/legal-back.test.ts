import { describe, expect, test } from "bun:test"
import { legalBackDestination } from "@/lib/legal-back"

describe("legalBackDestination", () => {
  test("goes back when the referrer is on this site", () => {
    expect(
      legalBackDestination(
        "http://localhost:3000/#features",
        "http://localhost:3000",
      ),
    ).toBe("back")
  })

  test("falls back home with no referrer or an external one", () => {
    expect(legalBackDestination("", "http://localhost:3000")).toBe("/")
    expect(
      legalBackDestination("https://example.com/", "http://localhost:3000"),
    ).toBe("/")
  })
})

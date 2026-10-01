import { describe, expect, test } from "bun:test"
import { GALLERY17_SLIDES } from "./gallery17-items"

describe("GALLERY17_SLIDES", () => {
  test("has three 4:3 stills ready to swap for looping clips", () => {
    expect(GALLERY17_SLIDES).toHaveLength(3)
    for (const slide of GALLERY17_SLIDES) {
      expect(slide.image).toStartWith("https://")
      expect(slide.alt.length).toBeGreaterThan(0)
    }
  })
})

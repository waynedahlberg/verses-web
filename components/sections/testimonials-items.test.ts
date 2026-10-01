import { describe, expect, test } from "bun:test"
import {
  displayedTestimonials,
  TESTIMONIAL_AVATARS,
  TESTIMONIALS,
  TESTIMONIALS_DISPLAY_CAP,
  testimonialDisplayName,
} from "./testimonials-items"

describe("testimonials", () => {
  test("uses first name, last initial, a simple location, a rating, and a Cloudinary avatar", () => {
    expect(TESTIMONIAL_AVATARS).toHaveLength(16)
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(2)
    expect(TESTIMONIALS.length).toBeLessThanOrEqual(TESTIMONIALS_DISPLAY_CAP)
    expect(
      TESTIMONIALS.every(
        (item) =>
          item.lastInitial.length === 1 &&
          TESTIMONIAL_AVATARS.includes(
            item.avatar as (typeof TESTIMONIAL_AVATARS)[number],
          ) &&
          (item.rating === 4 || item.rating === 5),
      ),
    ).toBe(true)
    expect(TESTIMONIALS.some((item) => item.rating === 5)).toBe(true)
    expect(TESTIMONIALS.some((item) => item.rating === 4)).toBe(true)
    expect(testimonialDisplayName(TESTIMONIALS[0]!)).toBe("Emily R.")
  })

  test("never shows more than nine testimonials", () => {
    const extra = Array.from({ length: 12 }, (_, index) => index)
    expect(displayedTestimonials(extra)).toHaveLength(TESTIMONIALS_DISPLAY_CAP)
  })
})

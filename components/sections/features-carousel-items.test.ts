import { describe, expect, test } from "bun:test"
import { STANDARD_WORKS_SLIDES } from "./features-carousel-items"

describe("standard works slides", () => {
  test("lists the eight volumes in order", () => {
    expect(STANDARD_WORKS_SLIDES.map((slide) => slide.title)).toEqual([
      "The Old Testament",
      "The New Testament",
      "The Book of Mormon",
      "The Doctrine and Covenants",
      "The Pearl of Great Price",
      "The Family Proclamation",
      "Prayers & Ordinances",
      "The Missionaries",
    ])
  })
})

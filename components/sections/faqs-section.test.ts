import { describe, expect, test } from "bun:test"
import { VERSES_FAQS } from "./faqs-section"

describe("verses faqs", () => {
  test("answers the five product questions in order", () => {
    expect(VERSES_FAQS.map((faq) => faq.question)).toEqual([
      "Is Verses an official app of The Church of Jesus Christ of Latter-day Saints?",
      "What scriptures are included?",
      "What is Verses designed for?",
      "Is Verses really free?",
      "Can I listen to the scriptures?",
    ])
    expect(VERSES_FAQS[0]?.answer.startsWith("No.")).toBe(true)
    expect(VERSES_FAQS[3]?.answer.startsWith("Yes.")).toBe(true)
  })
})

import {
  AiSparklesIcon,
  BookCheckIcon,
  BookmarkPlusIcon,
  HeadphonesIcon,
} from "@hugeicons/core-free-icons"
import { describe, expect, test } from "bun:test"
import { FEATURE_CARDS } from "./features-cards"

describe("feature cards", () => {
  test("uses the four product capabilities with HugeIcons", () => {
    expect(FEATURE_CARDS.map((card) => card.title)).toEqual([
      "Beautiful Reading",
      "Read Along or Listen",
      "Stay Consistent",
      "Save What Matters",
    ])
    expect(FEATURE_CARDS.map((card) => card.icon)).toEqual([
      AiSparklesIcon,
      HeadphonesIcon,
      BookCheckIcon,
      BookmarkPlusIcon,
    ])
    expect(FEATURE_CARDS[0]?.description.includes("distraction-free")).toBe(true)
    expect(FEATURE_CARDS[1]?.description.includes("synchronized audio")).toBe(
      true
    )
    expect(FEATURE_CARDS[2]?.description.includes("streaks")).toBe(true)
    expect(FEATURE_CARDS[3]?.description.includes("Bookmarks")).toBe(true)
  })
})

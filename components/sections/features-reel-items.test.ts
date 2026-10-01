import { describe, expect, test } from "bun:test"
import { FEATURE_CARDS } from "./features-cards"
import { FEATURES_REEL_ITEMS } from "./features-reel-items"

describe("features reel items", () => {
  test("uses four landscape placeholders, one per feature card", () => {
    expect(FEATURES_REEL_ITEMS.length).toBe(FEATURE_CARDS.length)
    expect(FEATURES_REEL_ITEMS.every((item) => item.type === "image")).toBe(
      true
    )
    expect(FEATURES_REEL_ITEMS.map((item) => item.src)).toEqual([
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790726719/verses-website/bruno-martins-ElUbmfsgvV0-unsplash_opt_gyrgv5.webp",
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790726716/verses-website/dirk-lach-RYGq_PGtPPk-unsplash_opt_qvhkaq.webp",
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790724602/verses-website/sean-sinclair-C_NJKfnTR5A-unsplash_opt_ew8doj.webp",
      "https://res.cloudinary.com/dewmpixcd/image/upload/v1790726722/verses-website/babasaheb-shinde-wArBoRhYvLY-unsplash_opt_cnv5pp.webp",
    ])
  })
})

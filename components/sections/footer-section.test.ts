import { describe, expect, test } from "bun:test"
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "./footer-section"

describe("footer 25", () => {
  test("keeps product destinations aligned with the header", () => {
    expect(FOOTER_PRODUCT_LINKS.map((link) => link.href)).toEqual([
      "/#features",
      "/#design",
      "/#reviews",
      "/blog",
    ])
  })

  test("lists social destinations for later customization", () => {
    expect(FOOTER_SOCIAL_LINKS.map((link) => link.title)).toEqual([
      "Twitter",
      "Instagram",
      "LinkedIn",
    ])
  })

  test("points legal links at the published policy pages", () => {
    expect(FOOTER_LEGAL_LINKS).toEqual([
      { title: "Terms and Conditions", href: "/legal/terms" },
      { title: "Privacy Policy", href: "/legal/privacy" },
      { title: "Cookies", href: "/legal/cookies" },
    ])
  })
})

import { describe, expect, test } from "bun:test"
import { SHARE_CTA } from "./share-cta-section"

describe("share cta section", () => {
  test("keeps the download copy for later customization", () => {
    expect(SHARE_CTA.downloadHeading).toBe(
      "Download the notes app of tomorrow today."
    )
    expect(SHARE_CTA.iosLabel).toBe("Download for iOS")
    expect(SHARE_CTA.androidLabel).toBe("Download for Android")
  })
})

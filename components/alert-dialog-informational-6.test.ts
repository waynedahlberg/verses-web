import { describe, expect, test } from "bun:test"
import { ALERT_DIALOG_INFORMATIONAL_6 } from "./alert-dialog-informational-6"

describe("alert dialog informational 6", () => {
  test("keeps the stock status-badge copy for later customization", () => {
    expect(ALERT_DIALOG_INFORMATIONAL_6).toEqual({
      title: "Scheduled Maintenance",
      badge: "Upcoming",
      description:
        "We'll be performing scheduled maintenance on Sunday, March 15th from 2:00 AM - 4:00 AM EST. During this time, the service may be temporarily unavailable.",
      action: "Understood",
    })
  })
})

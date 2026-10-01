"use client"

import { ArrowLeft02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useRouter } from "next/navigation"
import { legalBackDestination } from "@/lib/legal-back"

export function LegalBackLink() {
  const router = useRouter()

  function goBack() {
    const destination = legalBackDestination(
      document.referrer,
      window.location.origin,
    )

    if (destination === "back") {
      router.back()
      return
    }

    router.push("/")
  }

  return (
    <button
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      onClick={goBack}
      type="button"
    >
      <HugeiconsIcon
        aria-hidden
        className="size-4"
        color="currentColor"
        icon={ArrowLeft02Icon}
        size={16}
        strokeWidth={1.75}
      />
      Back
    </button>
  )
}

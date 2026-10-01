"use client"

import { AlertDialogInformational6Content } from "@/components/alert-dialog-informational-6"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function TestFlightBadge({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        aria-label="Available on TestFlight"
        className="inline-flex shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
        onClick={onClick}
      >
        <img
          alt=""
          className={className ?? "h-10 w-auto"}
          src="/badges/testflight-badge-blue.svg"
        />
      </AlertDialogTrigger>
      <AlertDialogInformational6Content />
    </AlertDialog>
  )
}

"use client"

import { Calendar } from "lucide-react"
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils"

export const ALERT_DIALOG_INFORMATIONAL_6 = {
  title: "Scheduled Maintenance",
  badge: "Upcoming",
  description:
    "We'll be performing scheduled maintenance on Sunday, March 15th from 2:00 AM - 4:00 AM EST. During this time, the service may be temporarily unavailable.",
  action: "Understood",
} as const

export function AlertDialogInformational6Content({
  className,
}: {
  className?: string
}) {
  const copy = ALERT_DIALOG_INFORMATIONAL_6

  return (
    <AlertDialogContent
      className={cn(
        "max-h-[min(36rem,calc(100dvh-2rem))] w-[calc(100%-1.5rem)] max-w-md overflow-y-auto p-5 sm:w-full sm:p-6 max-sm:max-w-none pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-6",
        className
      )}
    >
      <AlertDialogHeader className="w-full gap-2.5">
        <AlertDialogTitle className="flex w-full items-center justify-center gap-2 text-pretty sm:justify-start">
          <Calendar className="size-5 shrink-0" aria-hidden="true" />
          {copy.title}
        </AlertDialogTitle>
        <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {copy.badge}
        </div>
        <AlertDialogDescription className="text-pretty">
          {copy.description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="max-sm:[&_[data-slot=alert-dialog-action]]:h-11 max-sm:[&_[data-slot=alert-dialog-action]]:w-full">
        <AlertDialogAction>{copy.action}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}

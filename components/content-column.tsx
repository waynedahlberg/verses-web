import { cn } from "@/lib/utils"

export function ContentColumn({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="w-full px-6">
      <div className={cn("@container mx-auto w-full max-w-2xl", className)}>
        {children}
      </div>
    </div>
  )
}

import { HugeiconsIcon } from "@hugeicons/react"
import { FeaturesMediaReel } from "@/components/sections/features-media-reel"
import { FEATURE_CARDS } from "@/components/sections/features-cards"

export default function FeaturesSection() {
  return (
    <section
      id="product"
      className="scroll-mt-24 overflow-hidden bg-background py-12"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-12 pb-12 md:grid-cols-2">
          <div>
            <div className="max-w-md">
              <h2 className="font-faculty text-4xl font-normal tracking-tight text-balance">
                Built for daily scripture habits
              </h2>
              <p className="my-6 text-lg text-balance">
                Verses is designed around one simple goal: helping you spend
                time in the scriptures every day. Read quietly, listen on the
                go, and keep your place as the habit grows.
              </p>
              <p className="text-muted-foreground">
                Tailark is evolving to be more than just the models.{" "}
                <span className="text-title font-medium">
                  It supports an entire ecosystem
                </span>{" "}
                — from products innovate.
              </p>
            </div>
          </div>
          <FeaturesMediaReel />
        </div>

        <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
          {FEATURE_CARDS.map((card) => (
            <div className="space-y-3" key={card.title}>
              <div className="flex items-center gap-2">
                <HugeiconsIcon
                  className="text-foreground"
                  color="currentColor"
                  icon={card.icon}
                  size={16}
                  strokeWidth={1.75}
                />
                <h3 className="text-sm font-medium">{card.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

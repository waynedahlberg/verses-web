"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Reel,
  ReelContent,
  ReelImage,
  ReelNavigation,
  ReelProgress,
} from "@/components/kibo-ui/reel"
import { FEATURES_REEL_ITEMS } from "@/components/sections/features-reel-items"
import { cn } from "@/lib/utils"

export function FeaturesMediaReel() {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-2">
      {FEATURES_REEL_ITEMS.map((item, itemIndex) => (
        <Image
          key={item.id}
          src={item.src}
          alt=""
          width={1600}
          height={1200}
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 size-full scale-125 object-cover blur-2xl brightness-125 saturate-150 transition-opacity duration-500",
            itemIndex === index ? "opacity-90" : "opacity-0"
          )}
        />
      ))}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-dashed border-white/25 shadow-lg shadow-black/20">
        <Reel
          className="absolute inset-0 aspect-auto h-full w-full bg-transparent"
          data={FEATURES_REEL_ITEMS}
          index={index}
          onIndexChange={setIndex}
        >
          <ReelProgress />
          <ReelContent>
            {(item) => (
              <ReelImage
                alt={item.alt ?? ""}
                duration={item.duration}
                height={1200}
                src={item.src}
                width={1600}
              />
            )}
          </ReelContent>
          <ReelNavigation aria-label="View next or previous media" />
        </Reel>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-white)_1px,transparent_1px)] bg-size-[12px_12px] opacity-5" />
      </div>
    </div>
  )
}

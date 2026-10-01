"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { GALLERY17_SLIDES } from "@/components/sections/gallery17-items"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export default function Gallery17Section() {
  return (
    <section
      className="overflow-hidden bg-background py-12 md:py-24"
      id="design"
    >
      <div className="relative mx-auto w-full max-w-[50rem] px-6">
        <Carousel className="relative" opts={{ align: "center", loop: true }}>
          <GallerySlides />
        </Carousel>
      </div>
    </section>
  )
}

function GallerySlides() {
  const { api } = useCarousel()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <>
      <CarouselContent
        className="-ml-4"
        viewportClassName="overflow-visible"
      >
        {GALLERY17_SLIDES.map((slide, index) => (
          <CarouselItem
            className="basis-[85%] pl-4 sm:basis-[70%]"
            key={slide.image}
          >
            <div
              className={cn(
                "overflow-hidden rounded-xl transition-all duration-300",
                current === index
                  ? "scale-100 opacity-100"
                  : "scale-[0.7] opacity-40",
              )}
            >
              <Image
                alt={slide.alt}
                className="aspect-[4/3] w-full object-cover"
                height={1080}
                src={slide.image}
                width={1440}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute top-1/2 left-0 z-10 hidden size-14 -translate-y-1/2 rounded-full sm:inline-flex [&_svg]:size-5"
        variant="neutral"
      />
      <CarouselNext
        className="absolute top-1/2 right-0 z-10 hidden size-14 -translate-y-1/2 rounded-full sm:inline-flex [&_svg]:size-5"
        variant="neutral"
      />
      <div className="mt-8 flex justify-center gap-2">
        {GALLERY17_SLIDES.map((slide, index) => (
          <button
            aria-current={current === index ? true : undefined}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "size-2 rounded-full transition-opacity",
              current === index ? "bg-foreground" : "bg-foreground/20",
            )}
            key={slide.image}
            onClick={() => api?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </>
  )
}

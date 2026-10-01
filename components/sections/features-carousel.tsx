import Image from "next/image"
import { Card } from "@/components/ui/card"
import { STANDARD_WORKS_SLIDES } from "@/components/sections/features-carousel-items"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export default function FeaturesSliderSection() {
  return (
    <section
      id="solutions"
      className="@container scroll-mt-24 bg-background py-24 max-lg:px-1"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          breakpoints: {
            "(max-width: 768px)": {
              slidesToScroll: 1,
            },
            "(min-width: 768px)": {
              slidesToScroll: 2,
            },
          },
        }}
        className="mx-auto max-w-5xl"
      >
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-6 lg:mb-10">
          <h2 className="max-w-xs font-faculty text-4xl font-normal tracking-tight text-balance">
            The Standard Works and more...
          </h2>
          <div className="flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent className="gap-1 pt-6">
          {STANDARD_WORKS_SLIDES.map((slide) => (
            <CarouselItem className="space-y-4 md:basis-1/2" key={slide.title}>
              <Card className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-md ring-0 inset-ring-1 shadow-black/4 inset-ring-border-illustration">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={980}
                  height={980}
                  className={cn(
                    "absolute inset-0 size-full",
                    slide.imageClassName
                  )}
                />
              </Card>
              <p className="w-full px-4 text-center text-muted-foreground">
                <strong className="font-medium text-foreground">
                  {slide.title}
                </strong>{" "}
                {slide.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

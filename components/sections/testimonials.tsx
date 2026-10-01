import Image from "next/image"
import { StarIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  displayedTestimonials,
  TESTIMONIALS,
  testimonialDisplayName,
  type Testimonial,
  type TestimonialRating,
} from "@/components/sections/testimonials-items"
import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const testimonials = displayedTestimonials(TESTIMONIALS)

  if (testimonials.length === 0) {
    return null
  }

  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden bg-background py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center text-balance">
          <h2 className="mb-4 font-faculty text-3xl font-normal tracking-tight md:text-4xl">
            What readers are saying
          </h2>
          <p className="text-muted-foreground">
            Notes from people using Verses to stay with scripture each day.
          </p>
        </div>
      </div>

      <div className="relative mt-10 md:mt-16">
        <div className="overflow-hidden">
          <div className="flex w-max gap-4 px-6 animate-testimonial-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marqueeItems.map((testimonial, index) => (
              <QuoteCard
                key={`${testimonial.firstName}-${testimonial.lastInitial}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent sm:w-24" />
      </div>
    </section>
  )
}

function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex w-[min(100vw-3rem,22rem)] shrink-0 flex-col gap-5 rounded-xl border bg-card p-5 shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            alt=""
            className="size-10 shrink-0 rounded-full object-cover ring-1 ring-foreground/10"
            height={80}
            src={testimonial.avatar}
            width={80}
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              {testimonialDisplayName(testimonial)}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {testimonial.location}
            </p>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        “{testimonial.quote}”
      </p>
    </article>
  )
}

function StarRating({ rating }: { rating: TestimonialRating }) {
  return (
    <div
      aria-label={`${rating} out of 5 stars`}
      className="flex shrink-0 items-center gap-0.5"
      role="img"
    >
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating

        return (
          <HugeiconsIcon
            aria-hidden
            className={cn(
              "size-3.5",
              filled
                ? "fill-verses-gold text-verses-gold"
                : "fill-foreground/40 text-foreground/40",
            )}
            color="currentColor"
            icon={StarIcon}
            key={index}
            size={14}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}

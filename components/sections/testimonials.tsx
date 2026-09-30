import { Hulu } from "@/components/ui/svgs/hulu"
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss"
import { Stripe } from "@/components/ui/svgs/stripe"
import Image from "next/image"
import type { ReactNode } from "react"

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4"
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4"
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4"
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4"
const SHADCN_AVATAR = "https://avatars.githubusercontent.com/u/124599?v=4"
const ADAM_AVATAR = "https://avatars.githubusercontent.com/u/4323180?v=4"
const YVES_AVATAR = "https://avatars.githubusercontent.com/u/55670723?v=4"
const MICKY_AVATAR = "https://avatars.githubusercontent.com/u/69605071?v=4"

const QUOTES = [
  {
    name: "Yves Kalume",
    role: "Android Engineer, Moneco",
    avatar: YVES_AVATAR,
    testimonial:
      "The platform has dramatically improved our design workflow. We now prototype interfaces 40% faster while maintaining our high-quality standards. The developer experience is truly exceptional.",
  },
  {
    name: "Meschac Irung",
    role: "Frontend Engineer, Hulu",
    avatar: MESCHAC_AVATAR,
    testimonial:
      "Integrating Tailark into our streaming platform was seamless. The performance gains were immediate, and our user engagement metrics have increased by 25% since implementation.",
  },
  {
    name: "Bernard Ngandu",
    role: "Backend, Stripe",
    avatar: BERNARD_AVATAR,
    testimonial:
      "As a payment processor, security and reliability are paramount. Tailark delivers on both fronts, with robust testing capabilities that have helped us identify and resolve edge cases before deployment.",
  },
  {
    name: "Glodie Lukose",
    role: "Engineer, Prime Video",
    avatar: GLODIE_AVATAR,
    testimonial:
      "The A/B testing capabilities have revolutionized how we roll out new features. We can now make data-driven decisions with confidence, leading to a 30% improvement in user retention.",
  },
  {
    name: "Theo Balick",
    role: "CTO, Tailark",
    avatar: THEO_AVATAR,
    testimonial:
      "Building Tailark has been a journey of continuous improvement. Seeing how our platform empowers developers to create better user experiences makes all the hard work worthwhile.",
  },
  {
    name: "Ras Micky",
    role: "Software Engineer",
    avatar: MICKY_AVATAR,
    testimonial:
      "The component system in Tailark is a game-changer for UI development. It's helped us standardize our design language while maintaining the flexibility needed for complex interfaces.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-background py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center text-balance">
          <h2 className="mb-4 font-faculty text-3xl font-normal tracking-tight md:text-4xl">
            What our customers are saying about Tailark Quartz
          </h2>
          <p className="mb-6 text-muted-foreground md:mb-12 lg:mb-16">
            Join the increasing number of customers and advocates who rely on
            Tailark for seamless and effective user A/B testing.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border/50">
          <div className="grid gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedCard
              logo={<TailwindCSS height={20} width={136} />}
              quote="We've streamlined our entire design process thanks to Tailark. The platform allows us to iterate faster and optimize our component library, leading to a more consistent user experience across all our projects."
              name="Adam Wathan"
              role="CEO, Tailwind Labs"
              avatar={ADAM_AVATAR}
            />
            <QuoteCard {...QUOTES[0]} />
            <QuoteCard {...QUOTES[1]} />
            <QuoteCard {...QUOTES[2]} />
            <FeaturedCard
              logo={<Hulu height={20} width={56} />}
              quote="Tailark has transformed how we approach frontend development at Hulu. The testing framework helped us reduce bugs by 40% and accelerated our feature deployment pipeline significantly."
              name="Shadcn"
              role="Frontend Engineer, Hulu"
              avatar={SHADCN_AVATAR}
            />
            <QuoteCard {...QUOTES[3]} />
            <QuoteCard {...QUOTES[4]} />
            <QuoteCard {...QUOTES[5]} />
            <FeaturedCard
              logo={<Stripe height={24} width={56} />}
              quote="The analytics dashboard in Tailark gives us unprecedented visibility into user behavior. We've been able to make targeted improvements that increased our conversion rates by 18%."
              name="Glodie Lukose"
              role="Engineer, Stripe"
              avatar={GLODIE_AVATAR}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteCard({
  name,
  role,
  avatar,
  testimonial,
}: {
  name: string
  role: string
  avatar: string
  testimonial: string
}) {
  return (
    <div className="flex flex-col justify-end gap-6 bg-card/40 p-8">
      <p className="self-end text-balance text-foreground before:mr-1 before:content-['\201C'] after:ml-1 after:content-['\201D']">
        {testimonial}
      </p>
      <Person name={name} role={role} avatar={avatar} />
    </div>
  )
}

function FeaturedCard({
  logo,
  quote,
  name,
  role,
  avatar,
}: {
  logo: ReactNode
  quote: string
  name: string
  role: string
  avatar: string
}) {
  return (
    <div className="flex flex-col justify-between gap-6 bg-card p-8 shadow-lg shadow-black/10 ring-1 ring-foreground/5">
      <div className="space-y-6">
        {logo}
        <p>&ldquo;{quote}&rdquo;</p>
      </div>
      <Person name={name} role={role} avatar={avatar} />
    </div>
  )
}

function Person({
  name,
  role,
  avatar,
}: {
  name: string
  role: string
  avatar: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1 ring-foreground/10">
        <Image
          src={avatar}
          alt={name}
          className="size-full object-cover"
          width={120}
          height={120}
        />
      </div>
      <div className="space-y-px">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

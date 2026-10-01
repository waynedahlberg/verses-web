import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type FaqItem = {
  question: string
  answer: string
}

export type Faq5Props = {
  badge?: string
  heading?: string
  description?: string
  faqs?: FaqItem[]
  className?: string
}

export const VERSES_FAQS: FaqItem[] = [
  {
    question:
      "Is Verses an official app of The Church of Jesus Christ of Latter-day Saints?",
    answer:
      "No. Verses is independently developed and is not affiliated with, endorsed by, or sponsored by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    question: "What scriptures are included?",
    answer:
      "Verses includes the Standard Works: the Bible, the Book of Mormon, the Doctrine and Covenants, and the Pearl of Great Price, using public-domain scripture text.",
  },
  {
    question: "What is Verses designed for?",
    answer:
      "Verses is focused on daily scripture reading and listening rather than in-depth study. It keeps the experience centered on the scriptures themselves, with reading goals, progress tracking, reminders, and audio to help you build a consistent daily habit.",
  },
  {
    question: "Is Verses really free?",
    answer:
      "Yes. Verses is free to use with no ads, subscriptions, in-app purchases, paywalls, or tip jar.",
  },
  {
    question: "Can I listen to the scriptures?",
    answer:
      "Yes. Verses includes audio playback and a synchronized read-along mode that highlights the words as they're spoken, so you can read along or simply listen while you're on the go.",
  },
]

export default function FAQSection({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "A few things to know before you start reading and listening.",
  faqs = VERSES_FAQS,
  className,
}: Faq5Props) {
  return (
    <section className={cn("bg-background py-16", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="mt-4 font-faculty text-4xl font-normal tracking-tight">
            {heading}
          </h2>
          <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div className="mb-8 flex gap-4" key={faq.question}>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

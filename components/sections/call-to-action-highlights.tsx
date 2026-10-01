import type { ReactNode } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CallToActionHighlightsLink = {
  text: string
  url: string
  icon?: ReactNode
}

type CallToActionHighlightsLinks = {
  primary?: CallToActionHighlightsLink
  secondary?: CallToActionHighlightsLink
}

export type CallToActionHighlightsProps = {
  heading: string
  description?: string
  buttons?: CallToActionHighlightsLinks
  features: string[]
  className?: string
}

const defaultCallToActionHighlights: CallToActionHighlightsProps = {
  heading: "Call to Action",
  description:
    "Get access to our collection of pre-built blocks and components today.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "#",
    },
  },
  features: [
    "Easy Integration",
    "24/7 Support",
    "Customizable Design",
    "Scalable Performance",
    "Hundreds of Blocks",
  ],
}

export default function CallToActionHighlightsSection(
  props: Partial<CallToActionHighlightsProps> = {}
) {
  const { heading, description, buttons, features, className } = {
    ...defaultCallToActionHighlights,
    ...props,
  }

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">
                  {heading}
                </h4>
                <p className="text-muted-foreground">{description}</p>
                {buttons?.primary && (
                  <Button
                    className="mt-6"
                    nativeButton={false}
                    render={<a href={buttons.primary.url} />}
                  >
                    {buttons.primary.text}
                    <ArrowRight className="size-4" />
                  </Button>
                )}
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {features.map((item) => (
                    <li className="flex items-center" key={item}>
                      <Check className="mr-4 size-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

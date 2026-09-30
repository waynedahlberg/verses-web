"use client"
import { Plus, Minus } from "lucide-react"
import { LazyMotion, domMax, m } from "motion/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NoteFromMeSection() {
  const [isFull, setIsFull] = useState(false)
  return (
    <LazyMotion features={domMax}>
      <section className="bg-background py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mx-auto max-w-2xl rounded-3xl border border-transparent bg-card p-8 pb-20 shadow ring-1 ring-foreground/5 sm:p-12 sm:pb-24">
            <Button
              onClick={() => setIsFull(!isFull)}
              className="group absolute bottom-8 left-8 z-10 flex pr-2.5 sm:bottom-10 sm:left-12"
              variant="secondary"
              size="sm"
            >
              <span>Read {isFull ? "Less" : "More"}</span>
              {isFull ? (
                <Minus
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50 transition-opacity duration-300"
                />
              ) : (
                <Plus
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50 transition-[opacity,transform] duration-300 group-hover:rotate-90"
                />
              )}
            </Button>

            <m.div
              layout
              initial={{ height: "22rem" }}
              animate={{ height: isFull ? "auto" : "22rem" }}
              exit={{ height: "22rem" }}
              className={cn(
                "relative overflow-hidden",
                !isFull && "mask-b-from-45%"
              )}
            >
              <div className="space-y-4 text-lg text-muted-foreground *:leading-relaxed">
                <p>
                  I’m honored to be with you today for your commencement from
                  one of the{" "}
                  <strong className="font-medium text-foreground">
                    finest universities
                  </strong>{" "}
                  in the world. Truth be told, I{" "}
                  <strong className="font-medium text-foreground">
                    never graduated from college
                  </strong>
                  . And this is the closest I’ve ever gotten to a college
                  graduation.
                </p>
                <p>
                  Today I want to tell you{" "}
                  <strong className="font-medium text-foreground">
                    three stories
                  </strong>{" "}
                  from my life. That’s it. No big deal. Just{" "}
                  <strong className="font-medium text-foreground">
                    three stories
                  </strong>
                  .
                </p>
                <p>
                  The first story is about{" "}
                  <strong className="font-medium text-foreground">
                    connecting the dots
                  </strong>
                  . I dropped out of{" "}
                  <strong className="font-medium text-foreground">
                    Reed College
                  </strong>{" "}
                  after the first six months, but then stayed around as a{" "}
                  <strong className="font-medium text-foreground">
                    drop-in
                  </strong>{" "}
                  for another 18 months or so before I really quit. So why’d I
                  drop out?
                </p>
                <p>
                  It started before I was born. My{" "}
                  <strong className="font-medium text-foreground">
                    biological mother
                  </strong>{" "}
                  was a young, unwed graduate student, and she decided to put me
                  up for{" "}
                  <strong className="font-medium text-foreground">
                    adoption
                  </strong>
                  . She felt very strongly that I should be adopted by{" "}
                  <strong className="font-medium text-foreground">
                    college graduates
                  </strong>
                  , so everything was all set for me to be adopted at birth by a{" "}
                  <strong className="font-medium text-foreground">
                    lawyer and his wife
                  </strong>
                  .
                </p>
                <p>
                  Except that when I popped out, they decided at the last minute
                  that they really wanted a{" "}
                  <strong className="font-medium text-foreground">girl</strong>.
                  So my parents, who were on a{" "}
                  <strong className="font-medium text-foreground">
                    waiting list
                  </strong>
                  , got a call in the middle of the night asking, “We’ve got an{" "}
                  <strong className="font-medium text-foreground">
                    unexpected baby boy
                  </strong>
                  . Do you want him?” They said, “
                  <strong className="font-medium text-foreground">
                    Of course
                  </strong>
                  .”
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

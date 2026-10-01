"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

const HERO_BG_LIGHT =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-07_opt_pvryaf.webp"
const HERO_DEVICE =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790883259/verses-website/duo-dark_opt_j0rvru.webp"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 500], { clamp: false })

  return (
    <main className="-mt-14.5 overflow-hidden bg-background">
      <section>
        <div className="relative pt-44 pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[50rem] overflow-hidden mask-radial-[137%_100%] mask-radial-from-49% mask-radial-at-top">
            <motion.div
              style={{ y }}
              className="absolute inset-x-0 -top-1/4 h-[150%]"
            >
              <Image
                src={HERO_BG_LIGHT}
                alt="clouds"
                width="5000"
                height="5000"
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <div>
                <h1 className="mx-auto max-w-2xl font-faculty text-4xl font-normal tracking-tight text-balance md:text-5xl lg:mt-8">
                  The Scriptures,<br />every day.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base text-balance text-muted-foreground leading-8">
                  Read and listen to the <span className="underline underline-offset-4">Standard Works</span> in a simple app built for every day.<br /><span className="font-semibold">Independently designed. Free. No ads or subscriptions.</span>
                </p>
              </div>
            </div>
            <div className="relative mx-auto max-w-3xl mask-[linear-gradient(to_bottom,black_0%,black_38%,transparent_78%)]">
              <Image
                src={HERO_DEVICE}
                alt="Verses on iPhone"
                width={1563}
                height={1173}
                className="mx-auto h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

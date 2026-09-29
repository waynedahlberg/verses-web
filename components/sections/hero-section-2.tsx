"use client"
import HeroHeader from "@/components/header"
import Image from "next/image"
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from "motion/react"
import { MobileWallet } from "@/components/illustrations/mobile-wallet"

const HERO_BG_LIGHT =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-07_opt_pvryaf.webp"
const HERO_BG_DARK =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-22_opt_lfykgx.webp"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const parallaxFactor = -0.4
  const y = useTransform(scrollY, [0, 500], [0, 500 * parallaxFactor], {
    clamp: false,
  })

  return (
    <LazyMotion features={domAnimation}>
      <>
        <HeroHeader />
        <main className="-mt-14.5 overflow-hidden bg-background">
          <section>
            <div className="relative pt-44 pb-36">
              <div className="absolute inset-x-0 top-0 h-[50rem] overflow-hidden mask-radial-[137%_100%] mask-radial-from-49% mask-radial-at-top">
                <m.div
                  style={{ y, minHeight: "100%" }}
                  className="aspect-video md:aspect-square"
                >
                  <Image
                    src={HERO_BG_LIGHT}
                    alt="clouds"
                    width="5000"
                    height="5000"
                    className="absolute inset-0 w-full md:-translate-y-1/12 dark:hidden"
                    priority
                  />
                  <Image
                    src={HERO_BG_DARK}
                    alt="clouds"
                    width="5000"
                    height="5000"
                    className="absolute inset-0 w-full opacity-50 not-dark:hidden"
                    priority
                  />
                </m.div>
              </div>

              <div className="relative mx-auto max-w-5xl px-6">
                <div className="mb-12 text-center">
                  <div>
                    <h1 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:mt-8">
                      Your Personal AI, With you Anywhere
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-xl text-balance">
                      Craft. Build. Ship Modern Websites.
                    </p>
                  </div>
                </div>
                <MobileWallet />
              </div>
            </div>
          </section>
        </main>
      </>
    </LazyMotion>
  )
}


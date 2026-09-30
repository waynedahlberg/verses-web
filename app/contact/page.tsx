import type { Metadata } from "next"
import Image from "next/image"
import ContactSection from "@/components/sections/contact-section"

const SKY_LIGHT =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-07_opt_pvryaf.webp"
const SKY_DARK =
  "https://res.cloudinary.com/dewmpixcd/image/upload/v1790622370/verses-website/sky-22_opt_lfykgx.webp"

export const metadata: Metadata = {
  title: "Contact",
  description: "Find answers to your questions and get support for Verses.",
}

export default function ContactPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-14.5 h-[50rem] overflow-hidden mask-radial-[137%_100%] mask-radial-from-49% mask-radial-at-top">
        <div className="aspect-video md:aspect-square">
          <Image
            src={SKY_LIGHT}
            alt=""
            width={5000}
            height={5000}
            className="absolute inset-0 w-full md:-translate-y-1/12 dark:hidden"
            priority
          />
          <Image
            src={SKY_DARK}
            alt=""
            width={5000}
            height={5000}
            className="absolute inset-0 w-full opacity-50 not-dark:hidden"
            priority
          />
        </div>
      </div>
      <ContactSection />
    </main>
  )
}

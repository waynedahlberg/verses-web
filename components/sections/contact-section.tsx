import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContentColumn } from "@/components/content-column"

export default function Contact() {
  return (
    <section className="relative mt-64 py-24">
      <ContentColumn>
        <h1 className="font-faculty text-4xl font-normal tracking-tight text-balance md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-balance text-lg text-muted-foreground">
          Find answers to your questions and get support for our services.
        </p>

        <div className="mt-10 grid gap-3 @lg:grid-cols-2 @lg:gap-y-12">
          <div className="flex flex-col rounded-xl border bg-white/25 p-6 backdrop-blur-sm">
            <h2 className="font-medium">Contact Sales</h2>
            <p className="mt-2 mb-4 text-balance text-muted-foreground">
              Get in touch with our sales team for more information.
            </p>
            <Button
              render={<Link href="#link">Talk to sales</Link>}
              nativeButton={false}
              variant="outline"
              size="sm"
              className="mt-auto w-fit"
            />
          </div>
          <div className="flex flex-col rounded-xl border bg-white/25 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-medium">Help and Support</h2>
            <p className="mt-2 mb-4 text-balance text-muted-foreground">
              Find answers to your questions and get support for our services.
            </p>

            <div className="mt-auto flex flex-wrap gap-1">
              <Button
                render={<Link href="#link">Contact Support</Link>}
                nativeButton={false}
                variant="outline"
                size="sm"
                className="w-fit"
              />
              <Button
                render={<Link href="mailto:hey@tailark.com">hey@tailark.com</Link>}
                nativeButton={false}
                variant="ghost"
                size="sm"
                className="w-fit text-primary"
              />
            </div>
          </div>

          <div className="flex flex-col p-6">
            <h2 className="mb-2 text-sm">General</h2>
            <Link
              href="mailto:hello@tailark.com"
              className="font-medium hover:underline hover:decoration-primary"
            >
              hello@tailark.com
            </Link>
          </div>
          <div className="flex flex-col p-6">
            <h2 className="mb-2 text-sm">Support</h2>
            <Link
              href="mailto:support@tailark.com"
              className="font-medium hover:underline hover:decoration-primary"
            >
              support@tailark.com
            </Link>
          </div>

          <div className="flex flex-col p-6">
            <h2 className="mb-2 text-sm">X/Twitter</h2>
            <Link
              href="https://twitter.com/tailarkui "
              className="font-medium hover:underline hover:decoration-primary"
            >
              @tailarkui
            </Link>
          </div>
          <div className="flex flex-col p-6">
            <h2 className="mb-2 text-sm">GitHub</h2>
            <Link
              href="https://github.com/tailark"
              className="font-medium hover:underline hover:decoration-primary"
            >
              @tailark
            </Link>
          </div>
        </div>
      </ContentColumn>
    </section>
  )
}

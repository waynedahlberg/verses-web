import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopyrightYear } from "@/components/ui/copyright-year"

export const FOOTER_BACKGROUND_IMAGE =
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/daniel-leone-g30P1zcOzXo-unsplash.jpg"

export const FOOTER_PRODUCT_LINKS = [
  { title: "Features", href: "/#features" },
  { title: "Design", href: "/#design" },
  { title: "Reviews", href: "/#reviews" },
  { title: "Blog", href: "/blog" },
] as const

export const FOOTER_SOCIAL_LINKS = [
  { title: "Twitter", href: "#" },
  { title: "Instagram", href: "#" },
  { title: "LinkedIn", href: "#" },
] as const

export const FOOTER_LEGAL_LINKS = [
  { title: "Terms and Conditions", href: "/legal/terms" },
  { title: "Privacy Policy", href: "/legal/privacy" },
  { title: "Cookies", href: "/legal/cookies" },
] as const

const linkClassName =
  "border-b border-transparent text-muted-foreground transition-all duration-300 ease-in-out hover:border-primary hover:text-primary"

const cardClassName = "rounded-lg bg-background p-8 shadow-lg md:p-12"

export default function FooterSection() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-16 md:py-32"
      style={{ backgroundImage: `url("${FOOTER_BACKGROUND_IMAGE}")` }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className={cardClassName}>
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-0 md:space-x-24">
              <div className="min-w-0 flex-1 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground uppercase pb-2">
                  An important note about Verses
                </p>
                <p>
                  Verses is an independent project and is not affiliated with,
                  sponsored by, or endorsed by{" "}
                  <span className="font-medium text-foreground">
                    The Church of Jesus Christ of Latter-day Saints
                  </span>
                  .
                </p>
                <p>
                  Verses uses public-domain editions of the Standard Works and does not reproduce Church-owned study materials such as footnotes, cross-references, chapter summaries, the Bible Dictionary, Topical Guide, or other copyrighted study resources.
                </p>
                <p>
                  Scripture audio is generated using AI text-to-speech technology from Mistral AI. Verses is provided free of charge, with no ads, subscriptions, or in-app purchases.
                </p>
              </div>
              <img
                alt=""
                className="h-[128px] w-auto shrink-0"
                height={128}
                src="/badges/scripture-clipart.svg"
                width={200}
              />
            </div>
          </div>

          <div className={cardClassName}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <div className="lg:col-span-1">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    alt=""
                    className="size-16 rounded-full object-cover"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/cool-dude.jpg"
                  />
                  <h2 className="text-2xl font-medium">Let&apos;s Chat</h2>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  I&apos;m passionate about creating beautiful, functional
                  components that make your projects shine. Let&apos;s work
                  together to bring your vision to life.
                </p>
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  Schedule a call
                </Button>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium tracking-wider text-primary uppercase">
                  Product
                </h3>
                <ul className="space-y-3">
                  {FOOTER_PRODUCT_LINKS.map((item) => (
                    <li key={item.title}>
                      <Link className={linkClassName} href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium tracking-wider text-primary uppercase">
                  Social
                </h3>
                <ul className="space-y-3">
                  {FOOTER_SOCIAL_LINKS.map((item) => (
                    <li key={item.title}>
                      <Link className={linkClassName} href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium tracking-wider text-primary uppercase">
                  Contact
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <Link className={linkClassName} href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>Utah • MST</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © <CopyrightYear /> Verses. Made with{" "}
                <span className="sr-only">love</span>
                <span aria-hidden className="text-verses-gold">
                  ♥
                </span>{" "}
                in Utah
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {FOOTER_LEGAL_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

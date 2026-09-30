import { Logo } from "@/components/ui/logo"
import { CopyrightYear } from "@/components/ui/copyright-year"
import Link from "next/link"

const links = [
  {
    group: "Product",
    items: [
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Solution",
        href: "#",
      },
      {
        title: "Partnerships",
        href: "#",
      },
      {
        title: "Mobile App",
        href: "#",
      },
    ],
  },
  {
    group: "Contact",
    items: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "About",
        href: "#",
      },
      {
        title: "Licence",
        href: "#",
      },
      {
        title: "Privacy",
        href: "#",
      },
    ],
  },
]

export default function FooterSection() {
  return (
    <footer className="bg-background py-8 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo uniColor />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 md:col-span-3">
            {links.map((link) => (
              <div key={link.group} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>

                <div className="flex flex-wrap gap-4 sm:flex-col">
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block text-muted-foreground transition-colors duration-150 hover:text-primary"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-4">
              <span className="block font-medium">Community</span>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X/Twitter"
                  className="block text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="block text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-16 h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[6px_1px] bg-repeat-x opacity-25"
        />

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div className="max-w-xl space-y-2 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">Important Disclaimer</p>
            <p>
              Verses is not affiliated with{" "}
              <span className="font-medium text-foreground">
                The Church of Jesus Christ of Latter-day Saints
              </span>
              . No endorsement is expressed or implied.
            </p>
            <p>
              Scripture content is sourced from the public domain. Audio content
              is created with intelligence models from Mixtral AI.
            </p>
          </div>

          <p className="shrink-0 text-sm text-muted-foreground sm:pb-0.5 sm:text-end">
            © <CopyrightYear /> Verses
            <span className="mx-2 text-foreground/25" aria-hidden>
              ·
            </span>
            Made with <span className="sr-only">love</span>
            <span className="text-verses-gold" aria-hidden>
              ♥
            </span>{" "}
            in Utah
          </p>
        </div>
      </div>
    </footer>
  )
}

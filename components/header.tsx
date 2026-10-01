"use client"
import Link from "next/link"
import React from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import { Menu, X } from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import { cn } from "@/lib/utils"
import { AlertDialogInformational6Content } from "@/components/alert-dialog-informational-6"
import { Logo } from "@/components/ui/logo"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "Design", href: "/#design" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header
      data-state={isMobileMenuOpen ? "active" : "inactive"}
      {...(isScrolled && { "data-scrolled": true })}
    >
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-2 max-lg:h-18 max-lg:overflow-hidden max-lg:px-2 max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur lg:pt-3"
        )}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-6xl rounded-2xl border border-transparent px-3 shadow-md ring-1 shadow-transparent ring-transparent transition-[max-width,background-color,box-shadow,padding,backdrop-filter] duration-500 ease-in-out in-data-scrolled:max-w-4xl in-data-scrolled:bg-background/75 in-data-scrolled:shadow-black/6.5 in-data-scrolled:ring-foreground/5 in-data-scrolled:backdrop-blur max-lg:in-data-scrolled:px-5",
            "max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:px-5 max-lg:in-data-[state=active]:shadow-black/6.5 max-lg:in-data-[state=active]:ring-foreground/5 max-lg:in-data-[state=active]:backdrop-blur"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between lg:py-3">
            <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-b">
              <Link
                href="/"
                aria-label="home"
                className="inline-flex h-fit shrink-0 transition-[padding] duration-500 lg:in-data-scrolled:px-2"
              >
                <Logo uniColor />
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                }
                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-5 transition-opacity duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 transition-opacity duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {isLarge && (
              <div className="absolute inset-0 m-auto size-fit">
                <NavMenu />
              </div>
            )}
            {!isLarge && isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
            )}

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="flex w-full flex-col items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <AlertDialog>
                  <AlertDialogTrigger
                    aria-label="Available on TestFlight"
                    className="inline-flex shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img
                      src="/badges/testflight-badge-blue.svg"
                      alt=""
                      className="h-10 w-auto"
                    />
                  </AlertDialogTrigger>
                  <AlertDialogInformational6Content />
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav className="w-full">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className="group relative block border-0 border-b py-4 text-lg font-medium"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

const NavMenu = () => {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex items-center justify-center gap-3">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={navigationMenuTriggerStyle()}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

import type { Metadata } from "next"
import { Faculty_Glyphic } from "next/font/google"
import Header from "@/components/header"
import FooterSection from "@/components/sections/footer-section"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const faculty = Faculty_Glyphic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-faculty-glyphic",
})

export const metadata: Metadata = {
  title: {
    default: "Verses | Read the Scriptures",
    template: "%s · Verses",
  },
  description: "Verses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={faculty.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  )
}
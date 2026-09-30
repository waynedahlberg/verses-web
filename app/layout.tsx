import type { Metadata } from "next"
import { Faculty_Glyphic, Geist_Mono } from "next/font/google"
import Header from "@/components/header"
import FooterSection from "@/components/sections/footer-section"
import "./globals.css"

const faculty = Faculty_Glyphic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-faculty-glyphic",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
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
    <html
      lang="en"
      className={`${faculty.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <FooterSection />
        </div>
      </body>
    </html>
  )
}

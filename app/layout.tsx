import type { Metadata } from "next"
import { Faculty_Glyphic } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const faculty = Faculty_Glyphic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-faculty-glyphic",
})

export const metadata: Metadata = {
  title: "Verses | Read the Scriptures",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
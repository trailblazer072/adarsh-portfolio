import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: "Adarsh | Portfolio",
    template: "%s | Adarsh Portfolio",
  },
  description: "Explore Adarsh's projects, experience, and creative work.",
  keywords: ["Adarsh", "Portfolio", "Developer", "Projects", "Web Development"],
  authors: [{ name: "Adarsh" }],
  generator: "Next.js",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark antialiased scroll-smooth">
      <body className={`font-sans ${inter.variable} ${GeistMono.variable} bg-app-grid`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

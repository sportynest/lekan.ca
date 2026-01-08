import "./variables.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react"
import "./app.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meet Lekan",
  description: "Engineer, Philosopher, and Technologist",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="app-container">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}


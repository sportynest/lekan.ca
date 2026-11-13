import "./variables.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { themeFromUrlScript } from "./components/themeFromUrl"
import { site } from "./data/site"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react"
import "./app.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ["Lekan Soyewo", "Paul Soyewo", "Product Engineer", "PicksHub", "Toronto", "York University"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    firstName: site.givenName,
    lastName: site.familyName,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

// Tells search engines who this site is about, so both names and the
// linked profiles are understood as the same person.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lekan Soyewo",
  alternateName: site.alternateName,
  givenName: site.givenName,
  familyName: site.familyName,
  jobTitle: site.jobTitle,
  url: site.url,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  worksFor: { "@type": "Organization", name: "PicksHub", url: site.links.pickshub },
  alumniOf: { "@type": "CollegeOrUniversity", name: "York University", url: "https://www.yorku.ca" },
  knowsAbout: ["Product engineering", "TypeScript", "React", "Next.js", "SwiftUI", "Kotlin", "Cloudflare Workers"],
  sameAs: [site.links.github, site.links.linkedin, site.links.blog],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeFromUrlScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
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


import { ImageResponse } from "next/og"
import { site } from "./data/site"

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Load just the glyphs we need from Google Fonts so the image uses Inter, like the site
async function loadInter(weight: number, text: string) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`)
  ).text()
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)
  if (!src) throw new Error("Could not load Inter")
  return (await fetch(src[1])).arrayBuffer()
}

const lines = [
  site.name,
  "I am a Product Engineer",
  "and I design, build and ship beautiful products",
  "Founder of PicksHub · Toronto",
  "lekan.ca",
]

export default async function OpengraphImage() {
  const text = lines.join("")
  const [regular, bold] = await Promise.all([loadInter(400, text), loadInter(700, text)])
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          backgroundColor: "#ffffff",
          color: "#0c0a09",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, color: "#737373" }}>
            I am a&nbsp;<span style={{ color: "#0c0a09" }}>Product Engineer</span>
          </div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 38, color: "#737373" }}>
            and I&nbsp;<span style={{ color: "#0c0a09" }}>design, build and ship beautiful products</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "#737373",
          }}
        >
          <span>Founder of PicksHub · Toronto</span>
          <span style={{ color: "#0c0a09", fontWeight: 700 }}>lekan.ca</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  )
}

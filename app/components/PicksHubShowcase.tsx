"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ArrowUpRight01Icon } from "hugeicons-react"
import { pickshub } from "../data/pickshub"
import "./PicksHub.css"

export default function PicksHubShowcase() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skills = useMemo(
    () => Array.from(new Set(pickshub.builds.flatMap((b) => b.skills))),
    []
  )

  return (
    <div className="ph">
      <div className="ph-intro">
        <h2 className="ph-lede">
          <span className="ph-muted">Right now, I&rsquo;m building</span>{" "}
          <a href={pickshub.website} target="_blank" rel="noopener noreferrer" className="ph-brand">
            <Image src="/pickshub/logo.svg" alt="" width={26} height={26} className="ph-logo" priority />
            {pickshub.name}
          </a>
        </h2>
        <p className="ph-summary">{pickshub.summary}</p>
        <div className="ph-links">
          <a href={pickshub.website} target="_blank" rel="noopener noreferrer" className="ph-link ph-link-primary">
            pickshub.ca <ArrowUpRight01Icon size={14} />
          </a>
          <a href={pickshub.appStore} target="_blank" rel="noopener noreferrer" className="ph-link">
            App Store <ArrowUpRight01Icon size={14} />
          </a>
        </div>
      </div>

      <ul className="ph-screens" aria-label="PicksHub iOS app screens">
        {pickshub.screens.map((screen) => (
          <li key={screen.name} className="ph-screen">
            <div className="ph-phone">
              {(["light", "dark"] as const).map((mode) => (
                <Image
                  key={mode}
                  src={`/pickshub/${screen.name}-${mode}.webp`}
                  alt={mode === "light" ? `PicksHub app: ${screen.label}` : ""}
                  width={600}
                  height={1304}
                  sizes="(max-width: 640px) 46vw, 260px"
                  className={`ph-shot ph-shot-${mode}`}
                />
              ))}
            </div>
            <span className="ph-screen-label">{screen.label}</span>
          </li>
        ))}
      </ul>

      <div className="ph-built">
        <div className="ph-skills" role="group" aria-label="Technologies">
          <span className="ph-built-intro">What I built, with</span>
          <div className="ph-skill-list">
            {skills.map((skill) => (
              <button
                key={skill}
                type="button"
                className={`ph-skill${activeSkill === skill ? " is-active" : ""}`}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
                onFocus={() => setActiveSkill(skill)}
                onBlur={() => setActiveSkill(null)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <ul className="ph-builds">
          {pickshub.builds.map((build) => {
            const match = activeSkill ? build.skills.includes(activeSkill) : null
            return (
              <li
                key={build.title}
                className={`ph-build${match === true ? " is-match" : ""}${match === false ? " is-dim" : ""}`}
              >
                <h3 className="ph-build-title">{build.title}</h3>
                <p className="ph-build-desc">{build.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

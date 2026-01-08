'use client'

import { useMemo, useState } from 'react'
import { currentEmployment } from '../data/employment'

export default function SkillsExperience() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = useMemo(() => {
    const all = currentEmployment.experiences.flatMap((e) => e.skills)
    const unique = Array.from(new Set(all))
    return unique
  }, [])

  return (
    <section className="skills-experience-section">
      <div className="employment-typography" role="group" aria-label="Current employment details">
        <span className="employment-intro">I work as a</span>
        <span className="employment-line current-employment-role">{currentEmployment.role}</span>
        <span className="employment-inline">
          <span className="employment-inline-text">at</span>
          <span className="employment-line current-employment-company">{currentEmployment.name}</span>
        </span>
      </div>

      <div className="skills-typography" role="group" aria-label="Skills and technologies">
        <span className="skills-intro">I am well versed in</span>
        <div className="skills-grid">
          {skills.map((skill) => {
            return (
              <span
                key={skill}
                className={`skill-item`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
              </span>
            )
          })}
        </div>
      </div>

      <div className="employment-responsibilities">
        <span className="employment-responsibilities-intro">where I</span>
        <ul className="employment-list">
          {currentEmployment.experiences.map((exp) => {
            const hasHover = Boolean(hoveredSkill)
            const isHighlight = hasHover && exp.skills.some((s) => s.toLowerCase() === (hoveredSkill as string).toLowerCase())
            const isDim = hasHover && !isHighlight
            return (
              <li
                key={exp.description}
                className={`employment-list-item${isHighlight ? ' is-highlight' : ''}${isDim ? ' is-dim' : ''}`}
              >
                {exp.description}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}



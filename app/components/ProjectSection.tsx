"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { Project } from "../types"
import Image from "next/image"
import "../components/ProjectCard.css"
import "../components/CurrentProjectSection.css"
import { Cancel01Icon } from "hugeicons-react"

interface ProjectSectionProps {
  projects: Project[]
  title?: string
}
export default function ProjectSection({ projects, title = "Here are some projects I've worked on:" }: ProjectSectionProps) {
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [closing, setClosing] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const [hasMore, setHasMore] = useState(false)

  const updateHasMore = useCallback(() => {
    const el = descriptionRef.current
    if (!el) return
    setHasMore(el.scrollTop + el.clientHeight < el.scrollHeight - 4)
  }, [])

  // On wide screens the panel height is title + whole lines of text + buttons,
  // sized so it matches a 3:2 image as closely as possible. The image is cropped
  // by a few pixels to fit, so every gap stays exact. Phones use the CSS height.
  const fitDescription = useCallback(() => {
    const el = descriptionRef.current
    const right = rightRef.current
    const image = imageRef.current
    if (!el || !right) return
    el.style.height = ""
    el.style.flex = ""
    if (image) {
      image.style.height = ""
      image.style.aspectRatio = ""
    }
    if (image && window.matchMedia("(min-width: 769px)").matches) {
      const content = el.parentElement as HTMLElement
      const title = content.querySelector(".current-project-title") as HTMLElement | null
      const links = right.querySelector(".current-project-links") as HTMLElement | null
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight)
      const fixed =
        (title?.getBoundingClientRect().height ?? 0) +
        (links?.getBoundingClientRect().height ?? 0) +
        parseFloat(getComputedStyle(content).rowGap || "0") +
        parseFloat(getComputedStyle(right).rowGap || "0")
      const target = (image.getBoundingClientRect().width * 2) / 3
      if (lineHeight > 0 && target > fixed) {
        const lines = Math.max(1, Math.round((target - fixed) / lineHeight))
        const textHeight = lines * lineHeight
        el.style.flex = "0 0 auto"
        el.style.height = `${textHeight}px`
        image.style.aspectRatio = "auto"
        image.style.height = `${fixed + textHeight}px`
      }
    }
    updateHasMore()
  }, [updateHasMore])

  useEffect(() => {
    const el = descriptionRef.current
    const right = rightRef.current
    if (!el || !right) return
    el.scrollTop = 0
    fitDescription()
    // Width is the only input, so watching the panel can't feed back into itself
    let lastWidth = 0
    const observer = new ResizeObserver((entries) => {
      const width = Math.round(entries[0].contentRect.width)
      if (width === lastWidth) return
      lastWidth = width
      fitDescription()
    })
    if (panelRef.current) observer.observe(panelRef.current)
    return () => observer.disconnect()
  }, [currentProject, fitDescription])

  const finishClose = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setClosing(false)
    setCurrentProject(null)
  }, [])

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current)
  }, [])

  const handleLearnMore = (project: Project) => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setClosing(false)
    setCurrentProject(project)
  }

  const handleClose = () => {
    const panel = panelRef.current
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!panel || reduceMotion) {
      setCurrentProject(null)
      return
    }
    // Fold up from the panel's real height, then unmount once the animation ends
    panel.style.setProperty("--panel-height", `${panel.offsetHeight}px`)
    setClosing(true)
    // Backup in case animationend never fires (e.g. a background tab)
    closeTimer.current = window.setTimeout(finishClose, 450)
  }

  const handlePanelAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && closing) finishClose()
  }

  return (
    <div>
      <section className="projects-section">
        <h2 className="projects-section-title">{title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={338}
                    className="project-image"
                  />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <button
                  onClick={() => handleLearnMore(project)}
                  className="project-link"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {currentProject && (
        <div
          key={currentProject.id}
          ref={panelRef}
          className={`current-project-section${closing ? " is-closing" : ""}`}
          onAnimationEnd={handlePanelAnimationEnd}
        >
          <button
            type="button"
            aria-label="Close current project"
            className="current-project-close"
            onClick={handleClose}
            disabled={closing}
          >
            <Cancel01Icon size={16} />
          </button>
          {currentProject.image && 
            <div className="current-project-image-container" ref={imageRef}>
                <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                width={600}
                height={338}
                className="current-project-image"
                />
            </div>
          }
          <div className="current-project-right" ref={rightRef}>
            <div className="current-project-content">
                <h2 className="current-project-title">{currentProject.title}</h2>
                <div
                  ref={descriptionRef}
                  onScroll={updateHasMore}
                  className={`current-project-description${hasMore ? " has-more" : ""}`}
                >
                  {currentProject.fullDescription.split(/\n\s*\n/).map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
            </div>

            <div className="current-project-links">
              {currentProject.githubLink && <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {currentProject.weblink && <a href={currentProject.weblink} target="_blank" rel="noopener noreferrer">Website</a>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"
import { useState } from "react"
import { Project } from "../types"
import Image from "next/image"
import "../components/ProjectCard.css"
import "../components/CurrentProjectSection.css"
import { Cancel01Icon } from "hugeicons-react"

interface ProjectSectionProps {
  projects: Project[]
}
export default function ProjectSection({ projects }: ProjectSectionProps) {
  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  const handleLearnMore = (project: Project) => {
    setCurrentProject(project)
  }

  const handleClose = () => {
    setCurrentProject(null)
  }

  return (
    <div>
      <section className="projects-section">
        <h2 className="projects-section-title">Here are some projects I've worked on:</h2>
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
        <div key={currentProject.id} className="current-project-section">
          <button
            type="button"
            aria-label="Close current project"
            className="current-project-close"
            onClick={handleClose}
          >
            <Cancel01Icon size={16} />
          </button>
          {currentProject.image && 
            <div className="current-project-image-container">
                <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                width={600}
                height={338}
                className="current-project-image"
                />
            </div>
          }
          <div className="current-project-right">
            <div className="current-project-content">
                <h2 className="current-project-title">{currentProject.title}</h2>
                <p className="current-project-description">{currentProject.fullDescription}</p>
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

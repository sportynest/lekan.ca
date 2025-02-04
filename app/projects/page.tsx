export const metadata = {
  title: "Projects - Lekan Soyewo",
  description:
    "Discover projects by Lekan Soyewo that showcase innovative full-stack development and cutting-edge AI-driven solutions.",
};

import Link from "next/link"
import Image from "next/image"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 border-b border-border pb-2">Projects</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card text-card-foreground p-8 rounded-lg transition-transform hover:scale-105"
          >
            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
            {project.image && (
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={338}
                className="w-full h-auto mb-6 rounded"
              />
            )}
            <p className="text-lg mb-4 text-muted-foreground">{project.shortDescription}</p>
            <p className="mb-6">{project.fullDescription}</p>
            <div className="space-x-4">
              {project.weblink && (
                <Link
                  href={project.weblink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent-foreground transition-colors"
                >
                  Visit Website →
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent-foreground transition-colors"
                >
                  View on GitHub →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export const metadata = {
  title: "Projects - Lekan Soyewo",
  description:
    "Discover projects by Lekan Soyewo that showcase innovative full-stack development and cutting-edge AI-driven solutions.",
};

import Link from "next/link"
import Image from "next/image"
import { projects } from "../data/projects"
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 border-b border-border pb-2">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card text-card-foreground p-8 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
            {project.image && (
              <div className="w-full aspect-[16/9] mb-6 rounded overflow-hidden bg-muted flex items-center justify-center group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={338}
                  className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            )}
            <p className="text-base mb-3 text-muted-foreground">{project.shortDescription}</p>
            <p className="text-base mb-5">{project.fullDescription}</p>
            <div className="space-x-4 mt-2">
              {project.weblink && (
                <Link
                  href={project.weblink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent-foreground transition-colors inline-block transform hover:scale-105"
                  style={{ transition: "color 0.2s, transform 0.2s" }}
                >
                  Visit Website →
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent-foreground transition-colors inline-block transform hover:scale-105"
                  style={{ transition: "color 0.2s, transform 0.2s" }}
                >
                  <FaGithub size={28} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


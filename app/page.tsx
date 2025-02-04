export const metadata = {
  title: "Lekan - ML & Software Engineer",
  description:
    "Welcome to the personal website of Lekan Soyewo, a passionate ML engineer and software developer showcasing featured projects, highlighted blog posts, and more.",
};

import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/blog"
import { projects } from "./data/projects"

const featuredProjects = projects.slice(0, 2)


export default async function Home() {
  const recentPosts = await getBlogPosts()

  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Lekan Soyewo</h1>
        <p className="text-xl text-muted-foreground">ML Engineer & Software Developer</p>
      </section>

      <section className="bg-card text-card-foreground p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          As a third-year York University Computer Science student, my passion for technology drives me to innovate.
          Driven by the potential of machine learning and its applications, I'm currently exploring large language
          models and their wider impact within the AI landscape. I'm eager to contribute to innovative solutions in this
          domain.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-2">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card text-card-foreground p-6 rounded-lg transition-transform hover:scale-105"
            >
              {project.image && (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={338}
                  className="w-full h-auto mb-4 rounded"
                />
              )}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">{project.shortDescription}</p>
              <Link
                href={project.weblink || project.githubLink || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent-foreground transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-primary hover:text-accent-foreground transition-colors">
            View All Projects →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 border-b border-border pb-2">Highlighted Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-card text-card-foreground p-6 rounded-lg transition-transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="text-sm text-accent-foreground">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://lekan.blog" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent-foreground transition-colors">
            View All Posts →
          </a>
        </div>
      </section>
    </div>
  )
}


import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"
import "./home.css"
import { projects } from "./data/projects"
import { inspirations } from "./data/inspirations"
import SkillsExperience from "./components/SkillsExperience"
import ProjectSection from "./components/ProjectSection"

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default async function Home() {
  const recentPosts = await getBlogPosts()
  const shuffledInspirations = shuffleArray(inspirations)

  return (
    <div className="home-container">
      <section id="about" className="me-section">
        <div className="me-description-wrapper">
          <span className="me-name">Lekan Soyewo</span>
          <span className="me-inline">
            <span className="me-intro-text">I am a</span>
            <span className="me-description-highlight">Software Engineer</span>
          </span>
          <span className="me-inline">
            <span className="me-inline-text">and I</span>
            <span className="me-description-highlight">train machine learning models</span>
          </span>
        </div>
      </section>

      <section id="projects" className="projects-section-wrapper">
        <ProjectSection projects={projects} />
      </section>

      <section id="experience" className="employment-section">
        <SkillsExperience />
      </section>

      <section id="education" className="education-section">
        <h2 className="education-intro">I am</h2>
        <div className="education-typography" role="group" aria-label="Current education details">
          <span className="education-inline">
            <span className="education-inline-text">pursuing a</span>
            <span className="education-line current-education-degree">Bachelor of Science in Computer Science</span>
          </span>
          <span className="education-inline">
            <span className="education-inline-text">at</span>
            <span className="education-line current-education-school">York University</span>
          </span>
          <span className="education-inline">
            <span className="education-inline-text">and graduating</span>
            <span className="education-line education-meta-highlight">June 2026</span>
          </span>
        </div>

        <div className="coursework-section" role="group" aria-label="Current coursework details">
          <span className="coursework-intro">Some relevant courses I've taken include</span>
          <div className="coursework-list">
            <span className="coursework-list-item">Machine Learning</span>
            <span className="coursework-list-item">Artificial Intelligence</span>
            <span className="coursework-list-item">Computer Vision</span>
            <span className="coursework-list-item">Robotics</span>
          </div>
        </div>
      </section>

      <section id="blog" className="blog-section">
        <h2 className="blog-section-title">Here are some of my rarely documented thoughts:</h2>
        <div className="blog-grid">
          {recentPosts.slice(0, 3).map((post) => (
            <div key={post.slug} className="blog-card">
              <Link href={`https://lekan.blog/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
        {/*
        <div className="blog-view-all-section">
          <Link
            href="https://lekan.blog"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-read-more-link"
          >
            Read More →
          </Link>
        </div>
        */}
      </section>

      <section id="inspirations" className="inspirations-section">
        <h2 className="inspirations-section-title">Some of my inspirations:</h2>
        <div className="inspirations-grid">
          {shuffledInspirations.map((inspiration) => (
            <a
              key={inspiration.id}
              href={inspiration.contentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inspirations-image-card"
            >
              <img 
                src={inspiration.imageUrl}
                alt={inspiration.title}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}


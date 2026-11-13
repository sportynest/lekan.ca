import type { Metadata } from "next"
import PrintButton from "./PrintButton"
import "./resume.css"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Lekan (Paul) Soyewo, product engineer, founder of PicksHub and York University Computer Science graduate.",
  alternates: { canonical: "/resume" },
  openGraph: { url: "/resume", title: "Resume · Lekan (Paul) Soyewo" },
}

const summary =
  "Product-minded software engineer and York University Computer Science graduate. I founded and build PicksHub, a Canadian sports publication, and own every layer of it: the Cloudflare Workers backend, the Next.js website and native iOS and Android apps. Before that I built StudyBuddy, an AI learning platform, at Cognora."

const experience = [
  {
    role: "Founder & Engineer",
    company: "PicksHub",
    link: "https://www.pickshub.ca",
    points: [
      "Built and run pickshub.ca, a Canadian sports publication covering news, analysis and predictions across 15+ leagues.",
      "Designed the editorial backend on Cloudflare Workers that serves the website, the mobile apps and a Next.js newsroom admin.",
      "Shipped a native iOS app on the App Store (SwiftUI, widgets, rich push notifications) and a native Android app (Kotlin, Jetpack Compose).",
      "Built PicksHub Play, a predictions game whose results settle automatically from official finals.",
    ],
  },
  {
    role: "Researcher",
    company: "Cognora",
    points: [
      "Led product vision and development of StudyBuddy, an AI chat platform for learning, from first concept to launch.",
      "Engineered the full backend and led a complete redesign of the frontend.",
      "Architected an agentic framework that works with all major AI models and providers.",
      "Built an internal dashboard for key user metrics, and analysed usage and learning outcomes to refine model routing.",
    ],
  },
]

const projects = [
  {
    title: "StudyBuddy",
    link: "https://studdybuddy.ca",
    linkLabel: "studdybuddy.ca",
    points: [
      "Grew an AI-powered learning platform to over 1,000 active users, with real-time collaboration features.",
      "Integrated AI models through a custom Node.js framework, improving system performance by 40% with caching and WebSockets.",
      "React frontend and Cloudflare Workers backend with sub-100ms response times under high concurrency.",
    ],
    tech: ["React", "Cloudflare Workers", "WebSockets", "Node.js", "Convex", "PostgreSQL", "Redis"],
  },
  {
    title: "Sentiment Analysis of Movie Reviews",
    link: "https://github.com/sportynest/setiment-analysis-model",
    linkLabel: "GitHub",
    points: [
      "Built a sentiment classification pipeline on a large movie review dataset, improving accuracy by 15% with TF-IDF and LSTM models.",
    ],
    tech: ["Python", "scikit-learn", "TensorFlow", "NLP"],
  },
  {
    title: "Moodle Email Scraper",
    link: "https://github.com/sportynest/Moodle-Email-Scrapper",
    linkLabel: "GitHub",
    points: [
      "Python scraper with parallel processing via ThreadPoolExecutor, 50% faster than sequential, with rate limiting and error handling.",
    ],
    tech: ["Python", "BeautifulSoup"],
  },
]

const education = [
  {
    school: "York University",
    degree: "Bachelor of Science, Computer Science",
    detail: "Toronto, ON · Graduated June 2026",
  },
  {
    school: "Dalhousie University",
    degree: "Bachelor of Science, Applied Computer Science",
    detail: "Halifax, NS",
  },
]

const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Swift", "Kotlin", "Python", "Java", "C/C++"] },
  { group: "Product", items: ["Next.js", "React", "SwiftUI", "Jetpack Compose", "Cloudflare Workers", "Node.js", "Convex"] },
  { group: "AI & Data", items: ["LLM APIs", "Machine Learning", "NLP", "TensorFlow", "Data Analysis"] },
]

export default function Resume() {
  return (
    <article className="resume">
      <header className="resume-head">
        <div className="resume-identity">
          <h1 className="resume-name">Lekan (Paul) Soyewo</h1>
          <p className="resume-title">Product Engineer · Toronto, Canada</p>
          <p className="resume-contact">
            <a href="mailto:lekan.soyewo@icloud.com">lekan.soyewo@icloud.com</a>
            <span aria-hidden="true">·</span>
            <a href="https://www.lekan.ca">lekan.ca</a>
            <span aria-hidden="true">·</span>
            <a href="https://github.com/sportynest" target="_blank" rel="noopener noreferrer">
              github.com/sportynest
            </a>
          </p>
        </div>
        <PrintButton />
      </header>

      <section className="resume-section" aria-labelledby="resume-summary">
        <h2 id="resume-summary" className="resume-label">Summary</h2>
        <p className="resume-summary">{summary}</p>
      </section>

      <section className="resume-section" aria-labelledby="resume-experience">
        <h2 id="resume-experience" className="resume-label">Experience</h2>
        <div className="resume-entries">
          {experience.map((job) => (
            <div key={job.company} className="resume-entry">
              <h3 className="resume-entry-title">
                {job.role}
                <span className="resume-entry-at">
                  {" "}at{" "}
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer">{job.company}</a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <ul className="resume-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="resume-projects">
        <h2 id="resume-projects" className="resume-label">Projects</h2>
        <div className="resume-entries">
          {projects.map((project) => (
            <div key={project.title} className="resume-entry">
              <h3 className="resume-entry-title">
                {project.title}
                <a className="resume-entry-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel}
                </a>
              </h3>
              <ul className="resume-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="resume-tech">{project.tech.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="resume-education">
        <h2 id="resume-education" className="resume-label">Education</h2>
        <div className="resume-entries">
          {education.map((edu) => (
            <div key={edu.school} className="resume-entry">
              <h3 className="resume-entry-title">{edu.school}</h3>
              <p className="resume-entry-sub">{edu.degree}</p>
              <p className="resume-entry-meta">{edu.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="resume-skills">
        <h2 id="resume-skills" className="resume-label">Skills</h2>
        <dl className="resume-skills">
          {skills.map((row) => (
            <div key={row.group} className="resume-skill-row">
              <dt>{row.group}</dt>
              <dd>{row.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  )
}

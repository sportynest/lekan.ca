export const metadata = {
  title: "Resume - Lekan Soyewo",
  description:
    "View the resume of Lekan Soyewo, a software engineer and Computer Science senior with advanced AI expertise, professional achievements, education, and projects.",
};

import { GithubIcon } from "hugeicons-react"

const profileText =
  "Accomplished Computer Science senior at York University, excelling in software engineering fundamentals and innovative AI development. Proficient in Python, Java, C/C++, and JavaScript, I've engineered production-ready applications using machine learning and NLP to address complex challenges and deliver tangible business outcomes. With hands-on experience in scalable web services, I'm poised to drive high-impact solutions in dynamic tech environments."

const employmentHistory = [
  {
    title: "Researcher",
    company: "Cognora",
    responsibilities: [
      "Spearheaded the strategic vision and product development for the StudyBuddy AI chat interface, from initial concept to market launch.",
      "Engineered the complete backend architecture for the StudyBuddy AI platform. Led the comprehensive redesign and overhaul of the platform's frontend interface.",
      "Architected a versatile agentic framework compatible with all major AI models and providers.",
      "Created an internal dashboard to measure and track key user metrics.",
      "Analyzed user data and educational outcomes to refine routing models, improving engagement and conversational effectiveness.",
      "Evaluated the ethical implications of AI in education."
    ],
  },
]

const education = [
  {
    school: "York University",
    degree: "Bachelor of Science, Computer Science",
    location: "Toronto, ON",
  },
  {
    school: "Dalhousie University",
    degree: "Bachelor of Science, Applied Computer Science",
    location: "Halifax, NS",
  },
]

const projects = [
  {
    title: "StudyBuddy (Full-Stack Educational Platform)",
    link: "https://Studdybuddy.ca",
    highlights: [
      "Led the end-to-end development of a scalable AI-powered learning platform, growing the user base to over 1,000 active users and enhancing engagement through real-time collaboration features.",
      "Integrated advanced AI models via a custom Node.js based framework, achieving a 40% improvement in system performance through optimized caching and WebSocket-based interactions.",
      "Built with React for the front-end and Cloudflare Workers for the back-end, ensuring sub-100ms response times and seamless handling of high-concurrency loads, demonstrating expertise in AI integration, scalability, and modern tech stacks.",
    ],
    technologies: ["React", "Cloudflare Workers", "WebSockets", "Node.js", "Python", "LLM APIs", "Redis", "PostgreSQL", "Convex", "PostHog"],
  },
  {
    title: "Sentiment Analysis of Movie Reviews",
    link: "https://github.com/sportynest/setiment-analysis-model",
    highlights: [
      "Designed and deployed a machine learning pipeline for sentiment analysis on a large movie review dataset, boosting prediction accuracy by 15% using NLP techniques like TF-IDF and LSTM models.",
      "Utilized Python, Scikit-learn, and TensorFlow for end-to-end development, including data preprocessing, model training, and evaluation—highlighting proficiency in ML workflows and delivering actionable insights for real-world applications.",
      "(GitHub: https://github.com/sportynest/setiment-analysis-model)"
    ],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "LSTM", "Pandas", "NLP"],
  },
  {
    title: "Moodle Email Scraper",
    link: "https://github.com/sportynest/Moodle-Email-Scrapper",
    highlights: [
      "Engineered a Python-based web scraping tool using BeautifulSoup to extract and manage student emails from Moodle platforms, incorporating parallel processing with ThreadPoolExecutor for a 50% speed increase.",
      "Enhanced efficiency with rate limiting and error handling, streamlining communication for educational settings—exemplifying skills in automation, data extraction, and scalable scripting.",
      "(GitHub: https://github.com/sportynest/Moodle-Email-Scrapper)"
    ],
    technologies: ["Python", "BeautifulSoup", "ThreadPoolExecutor", "Web Scraping"],
  },
]

const skills = [
  "Python",
  "JavaScript",
  "TypeScript", 
  "React",
  "TensorFlow",
  "Machine Learning",
  "Natural Language Processing",
  "Node.js",
  "Problem Solving",
  "Web Scraping",
  "Data Analysis"
]

export default function Resume() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-primary">LEKAN SOYEWO</h1>
            <p className="text-2xl mb-2 text-muted-foreground">Software Engineer</p>
            <p className="text-lg mb-2 text-muted-foreground">Toronto, Canada</p>
            <a
              href="mailto:lekan.soyewo@icloud.com"
              className="text-foreground hover:text-primary transition-colors text-lg font-medium underline underline-offset-4 decoration-muted-foreground hover:decoration-primary"
              style={{ transition: "color 0.2s, text-decoration-color 0.2s" }}
            >
              lekan.soyewo@icloud.com
            </a>
          </div>
          <div className="flex flex-col space-y-4 items-end">
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/sportynest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Summary</h2>
        <p className="text-muted-foreground">{profileText}</p>
      </section>

      {/* Experience Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg transition-shadow">
        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Experience</h2>
        {employmentHistory.map((job, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
              <p className="text-lg text-muted-foreground font-medium">{job.company}</p>
            </div>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className="text-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg transition-shadow">
        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-primary">{edu.school}</h3>
                <p className="text-lg text-muted-foreground">{edu.degree}</p>
              </div>
              <p className="text-muted-foreground mt-1 md:mt-0 text-sm">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Projects</h2>
        <div className="grid gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-accent/5 rounded-lg p-6 hover:bg-accent/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">{proj.title}</h3>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors mt-1 md:mt-0"
                >
                  {proj.link.replace(/^https?:\/\//, "")} →
                </a>
              </div>
              <ul className="space-y-2 mb-4">
                {proj.highlights.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {proj.technologies && (
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

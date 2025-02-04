export const metadata = {
  title: "Resume - Lekan Soyewo",
  description:
    "View the resume of Lekan Soyewo, a software engineer and Computer Science senior with advanced AI expertise, professional achievements, education, and projects.",
};

import { FaGithub, FaLinkedin } from "react-icons/fa"

const profileText =
  "A results-oriented Computer Science senior at York University with strong software engineering fundamentals and cutting-edge AI expertise. Proficient in Python, Java, C/C++, and JavaScript, I have developed production-ready applications that leverage machine learning and NLP to solve complex problems. My experience includes building scalable web services with serverless technologies, fine-tuning pre-trained models, and creating custom AI solutions that deliver measurable business value."

const employmentHistory = [
  {
    title: "Founder",
    company: "Cognora",
    // No date provided in the resume text – you could add one if needed
    responsibilities: [
      "Spearheaded strategic vision and product development for an AI-powered educational technology startup from concept to market launch.",
      "Led development and architecture decisions, building a scalable platform using React and server-less technologies that serves thousands of users.",
      "Orchestrated all aspects of technical implementation, from engineering real-time collaboration features to implementing robust subscription infrastructure and payment integrations.",
      "Drove key technical optimizations through strategic state management and caching implementations, achieving 40% improvement in application responsiveness while maintaining high user satisfaction."
    ],
  },
]

const education = [
  {
    school: "York University",
    degree: "Bachelor of Science, Computer Science",
    date: "Oct 2024 – Present (Expected Graduation: 2025)",
    location: "Toronto, ON",
  },
  {
    school: "Dalhousie University",
    degree: "Bachelor of Science, Applied Computer Science",
    date: "Aug 2021 – May 2022",
    location: "Halifax, NS",
  },
]

const projects = [
  {
    title: "StudyBuddy",
    link: "https://studdybuddy.ca",
    highlights: [
      "Full-Stack Development: Engineered a dynamic and responsive front-end using React and architected a robust back-end with Cloudflare Workers, ensuring scalability and performance under high concurrent loads.",
      "AI Integration: Designed and implemented multi-model AI integrations to enable real-time collaboration features and sophisticated document processing capabilities.",
      "Performance Optimization: Achieved a 40% improvement in system performance by implementing strategic caching mechanisms and streamlining data flow patterns.",
      "Scalability & Low Latency: Developed backend infrastructure capable of handling high-throughput concurrent AI model interactions while maintaining sub-100ms response times.",
      "Real-Time Features: Integrated collaborative tools with WebSocket-based communication for real-time interaction."
    ],
    technologies: ["React", "Cloudflare Workers", "WebSockets", "Node.js", "Python", "OpenAI/Claude APIs", "Redis", "PostgreSQL", "CI/CD pipelines"],
  },
  {
    title: "Multi-Modal LLM Integration Framework",
    link: "https://github.com/Cognora/multi-llm-api-toolkit",
    highlights: [
      "Architected and developed a high-performance Node.js library that unifies interactions across leading AI models including Claude, GPT-4, Gemini, and Grok.",
      "Implemented stream standardization for uniform API outputs."
    ],
  },
  {
    title: "Sentiment Analysis of Movie Reviews",
    link: "https://github.com/sportynest/setiment-analysis-model",
    highlights: [
      "Developed a machine learning pipeline for sentiment analysis on movie reviews using natural language processing techniques.",
      "Implemented tokenization, stop-word removal, stemming, and vectorization techniques (TF-IDF/Word2Vec) to preprocess raw text data.",
      "Trained models using Logistic Regression, Support Vector Machines, and ensemble methods while experimenting with LSTM and Transformer-based architectures.",
      "Achieved significant improvement in sentiment prediction accuracy."
    ],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NLTK", "Matplotlib", "Seaborn"],
  },
]
const skills = [
  "Python",
  "JavaScript",
  "TypeScript", 
  "React",
  "Java",
  "C/C++",
  "Data Structures & Algorithms",
  "Machine Learning",
  "TensorFlow",
  "Scikit-learn",
  "SQL",
  "Git",
  "Node.js",
  "Pandas"
]

export default function Resume() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="bg-card text-card-foreground p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-primary">Lekan SOYEWO</h1>
            <p className="text-2xl mb-2 text-muted-foreground">Software Engineer</p>
            <p className="text-lg mb-4 text-muted-foreground">Toronto, Canada</p>
          </div>
          
          <div className="flex flex-col space-y-4 items-end">
            <div className="flex items-center space-x-6">
              <a
                href="https://lekan.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors text-lg"
              >
                lekan.ca
              </a>
              <a
                href="mailto:lekan@cognora.ca"
                className="text-foreground hover:text-primary transition-colors text-lg"
              >
                lekan@cognora.ca
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/sportynest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Profile</h2>
        <p className="text-muted-foreground">{profileText}</p>
      </section>

      {/* Employment History Section */}
      <section className="bg-card text-card-foreground p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Employment History</h2>
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
      <section className="bg-card text-card-foreground p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-primary">{edu.school}</h3>
                <p className="text-lg text-muted-foreground">{edu.degree}</p>
              </div>
              <p className="text-muted-foreground mt-1 md:mt-0 text-sm">
                {edu.date} | {edu.location}
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


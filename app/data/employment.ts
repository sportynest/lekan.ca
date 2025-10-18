import type { Employment } from "../types"

export const currentEmployment: Employment = {
  name: "Cognora",
  location: "Toronto, Canada",
  started: "June 2021 – Present",
  role: "Researcher & Software Engineer",
  experiences: [
    {
      description:
        "Spearheaded product vision and development of StudyBuddy, an AI-powered learning platform, from concept to market launch.",
      skills: ["Machine Learning", "React", "Node.js", "Cloudflare Workers", "TypeScript"],
    },
    {
      description:
        "Architected scalable backend with Node.js and Cloudflare Workers, enabling sub-100ms response times for >1,000 active users.",
      skills: ["Node.js", "Cloudflare Workers", "Database Management"],
    },
    {
      description:
        "Led full frontend redesign in React, improving usability and engagement metrics by 30%.",
      skills: ["React"],
    },
    {
      description:
        "Built an agentic AI framework compatible with multiple LLM providers, boosting flexibility and cost efficiency.",
      skills: ["Machine Learning", "NLP", "Node.js"],
    },
    {
      description:
        "Conducted user data analysis to refine AI routing models, increasing engagement and learning outcomes.",
      skills: ["Data Analysis"],
    },
    {
      description:
        "Developed and optimized iPadOS, macOS, and iOS applications, extending the platform to Apple ecosystems and improving accessibility.",
      skills: ["Swift UI", "macOS Development", "iOS/iPadOS Development"],
    },
  ],
}



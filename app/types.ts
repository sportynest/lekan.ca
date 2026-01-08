export interface Project {
    id: string
    title: string
    shortDescription: string
    fullDescription: string
    image?: string
    weblink?: string
    githubLink?: string
}

export interface Skill {
    name: string
    variant?: "primary" | "highlight"
}

export interface ExperienceItem {
    description: string
    skills: string[]
}

export interface Employment {
    name: string
    location: string
    started: string
    role: string
    experiences: ExperienceItem[]
}

export interface Inspiration {
    id: string
    title: string
    description: string
    imageUrl: string
    contentUrl: string
    appleMusicUrl?: string
    spotifyUrl?: string
}
  
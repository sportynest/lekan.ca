import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function ProjectCard({ title, description, imageSrc }: ProjectCardProps) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg transition-transform hover:scale-105">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="w-full h-auto mb-4 rounded"
      />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}


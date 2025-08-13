"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Code in Motion",
      description:
        "A real-time collaborative code editor with live syntax highlighting and WebRTC integration for seamless pair programming.",
      image: "/collaborative-code-editor.png",
      technologies: ["React", "Node.js", "WebRTC", "Socket.io", "Monaco Editor"],
      github: "#",
      demo: "#",
    },
    {
      title: "3D Data Visualizer",
      description:
        "Interactive 3D data visualization tool using Three.js to transform complex datasets into immersive experiences.",
      image: "/3d-data-dashboard.png",
      technologies: ["Three.js", "D3.js", "TypeScript", "WebGL", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot powered by machine learning with natural language processing and context awareness.",
      image: "/ai-chatbot-interface.png",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Task Manager",
      description:
        "Productivity app with AI-powered task prioritization, time tracking, and intelligent scheduling recommendations.",
      image: "/task-management-app.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my favorite projects that showcase my skills in full-stack development, 3D graphics, and
            machine learning. Each project represents a unique challenge I've tackled.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-purple-600/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

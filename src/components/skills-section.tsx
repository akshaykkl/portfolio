"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Three.js/WebGL", level: 80, icon: "🎮" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "GraphQL", level: 75, icon: "📊" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🔧" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS/Vercel", level: 80, icon: "☁️" },
        { name: "Machine Learning", level: 70, icon: "🤖" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Tech Stack: Building the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm constantly learning and expanding my skill set. Here are the technologies I use to bring ideas to life
            and create meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="font-serif font-semibold text-xl mb-6 text-center text-foreground">{category.title}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
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

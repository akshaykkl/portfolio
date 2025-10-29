"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "LLMs (OpenAI, Transformers)", level: 90, icon: "🧠" },
        { name: "RAG (Vector DBs, Embeddings)", level: 88, icon: "🧩" },
        { name: "Prompt Engineering / Tools", level: 92, icon: "✍️" },
        { name: "Python (Numpy, Pandas, Scikit)", level: 90, icon: "🐍" },
        { name: "PyTorch / TensorFlow", level: 82, icon: "🧪" },
        { name: "NLP / CV Pipelines", level: 80, icon: "🧬" },
        { name: "LangChain / LlamaIndex", level: 84, icon: "🔗" },
      ],
    },
    {
      title: "Backend for AI",
      skills: [
        { name: "Node.js / FastAPI", level: 86, icon: "🛠️" },
        { name: "REST / GraphQL APIs", level: 82, icon: "🔌" },
        { name: "PostgreSQL / Prisma", level: 80, icon: "🐘" },
        { name: "Redis / Queues", level: 74, icon: "⚙️" },
        { name: "Auth / Security", level: 78, icon: "🔐" },
        { name: "Deploy (Vercel, Docker)", level: 80, icon: "🚀" },
      ],
    },
    {
      title: "Frontend & Visualization",
      skills: [
        { name: "React / Next.js", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 94, icon: "🎨" },
        { name: "Three.js / WebGL", level: 82, icon: "🎮" },
        { name: "UX / Accessibility", level: 78, icon: "🧭" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            AI‑First Skillset
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialize in applied AI—designing, training, and shipping intelligent systems—with a solid foundation in
            full‑stack development for robust, production‑ready deployments.
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
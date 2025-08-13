import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions.",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Always exploring new technologies and pushing creative boundaries.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science student at University with a passion for full-stack development, machine learning,
            and creating immersive digital experiences. When I'm not coding, you'll find me exploring the latest tech
            trends or contributing to open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <highlight.icon className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

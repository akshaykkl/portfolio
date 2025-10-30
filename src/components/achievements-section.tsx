import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Qualified – NET Exam (Assistant Professor)",
      org: "UGC National Eligibility Test",
      date: "2025",
      highlights: ["Cleared one of the most competitive lectureship exams in India", "Eligible for Assistant Professor roles"],
      tags: ["NET", "Assistant Professor", "UGC"],
      linkText: "Certificate ",
      href: "certificates/net.pdf", // Provide actual certificate link if available
    },
  //   {
  //     title: "Winner – AI Hackathon",
  //     org: "TechFest 2025",
  //     date: "2025",
  //     highlights: [
  //       "Built a RAG assistant with vector search and evaluation harness",
  //       "Deployed an inference API with observability",
  //     ],
  //     tags: ["LLM", "RAG", "Vector DB", "Evaluation"],
  //     linkText: "Project",
  //     href: "#",
  //   },
  //   {
  //     title: "Top 10 – Global Coding Challenge",
  //     org: "CodeArena",
  //     date: "2024",
  //     highlights: ["Optimized graph algorithms", "Parallelized workloads"],
  //     tags: ["Algorithms", "Performance"],
  //     linkText: "Write‑up",
  //     href: "#",
  //   },
   ]

  const certifications = [
    {
      title: "Programming for Everybody (Getting Started with Python)",
      org: "Coursera",
      date: "2021",
      id: "",
      href: "https://www.coursera.org/account/accomplishments/verify/YXL7MBYQPKHJ",
      tags: ["LLMs", "RAG", "Agents"],
    },
    {
      title: "Programming in JAVA",
      org: "NPTEL",
      date: "2023",
      id: "",
      href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS49S5389001304054864",
      tags: ["Neural Nets", "CNNs", "Seq Models, Tensorflow, Scikit Learn, Keras"],
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      org: "Coursera",
      date: "2025",
      id: "",
      href: "https://www.coursera.org/account/accomplishments/professional-cert/C6MAQKTYNSO9",
      tags: ["Neural Nets", "CNNs", "Seq Models, Tensorflow, Scikit Learn, Keras"],
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Highlights of awards and credentials that reflect my AI‑first focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-2xl text-foreground">Achievements</h3>
            {achievements.map((a, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-foreground">
                      {a.title} · <span className="text-primary">{a.org}</span>
                    </span>
                    <span className="text-sm text-muted-foreground">{a.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {a.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {a.tags.map((t, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {a.href ? (
                    <a
                      href={a.href}
                      className="inline-block text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {a.linkText}
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-2xl text-foreground">Certifications</h3>
            {certifications.map((c, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-foreground">
                      {c.title} · <span className="text-primary">{c.org}</span>
                    </span>
                    <span className="text-sm text-muted-foreground">{c.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">ID: {c.id}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View certificate
                      </a>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
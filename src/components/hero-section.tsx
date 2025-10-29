"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { ThreeScene } from "@/components/three-scene"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-foreground">
              Welcome to My
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
                Digital Playground
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm Akshay Kumar P, a passionate Computer Science student who loves merging creativity with technology. I build
              interactive experiences that push the boundaries of web development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="glow-animation bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <div className="flex gap-4">
              <a href="https://github.com/akshaykkl"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-purple-50 hover:border-purple-300 bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/akshay1024/"
                target="_blank"
                rel="noopener noreferrer"
                >
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-purple-50 hover:border-purple-300 bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              </a>
              <a href="mailto:akshaykumarkkl003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-purple-50 hover:border-purple-300 bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

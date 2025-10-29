import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { AchievementsSection } from "@/components/achievements-section"
// import { ExperienceSection } from "@/components/experience-section"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

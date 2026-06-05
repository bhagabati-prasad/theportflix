import "./homepge.scss"
import Footer from "@/components/Footer/Footer"
import GotoTop from "@/components/GotoTop"
import Contact from "@/components/Contact/Contact"
import Works from "@/components/Works/Works"
import Skills from "@/components/Skills/Skills"
import AboutMe from "@/components/AboutMe/AboutMe"
import HeroSection from "@/components/HeroSection/HeroSection"
import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTImeline"

export const metadata = {
  title: "Home Page - My Awesome Portfolio Website",
  description: "Welcome to my Awesome Portfolio Website",
}

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Works />

      {/* Experience */}
      <ExperienceTimeline />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      <GotoTop />
    </>
  )
}

import Preloader from "@/components/preloader"
import Cursor from "@/components/cursor"
import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="page-wrap bg-transparent">
      {/* Preloader and custom cursor */}
      <Preloader />
      <Cursor />
      {/* Sticky glass navbar */}
      <Navbar />

      {/* Flowing narrative sections */}
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact  />

      {/* Footer below contact */}
      <Footer />
    </main>
  )
}

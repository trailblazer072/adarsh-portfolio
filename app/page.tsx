"use client"

import { SoundProvider } from "@/lib/sound-context"
import SmoothScroll from "@/components/smooth-scroll"
import InteractiveTitaniumMesh from "@/components/3d-particle-mesh"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <SoundProvider>
      <SmoothScroll>
        <main className="relative min-h-screen bg-[#020204] text-white selection:bg-white selection:text-black overflow-x-hidden">
          <Preloader />

          {/* 3D Titanium Topographic Surface Mesh (No Dots, Interactive Hover) */}
          <InteractiveTitaniumMesh />

          {/* Top Apple Space Black Navigation with Avatar Switcher */}
          <Navbar />

          {/* Apple Keynote Hero with 3D Hologram Card & Quick Stats */}
          <Hero />

          {/* Career & Work Experience Timeline */}
          <Timeline />

          {/* 3D Perspective Tilt Projects Showcase & Architecture Dossier */}
          <Projects />

          {/* Technical Competencies Matrix */}
          <Skills />

          {/* Engineering Philosophy & Education */}
          <About />

          {/* Contact Console & Direct Transmission */}
          <Contact />

          {/* Minimalist Glass Footer with IST Studio Clock */}
          <Footer />
        </main>
      </SmoothScroll>
    </SoundProvider>
  )
}

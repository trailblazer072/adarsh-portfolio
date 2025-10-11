"use client"

import React from "react"
import { ensureGsap } from "@/lib/animations"
import LiquidCard from "./liquid-card" // new animated card wrapper

const frontendSkills = [
  "TypeScript",
  "Next.js",
  "React",
  "Express",
  "Tailwind CSS",
  "Framer Motion"
]
const backendSkills = [
"Node.js",
"Express",
"Python",
"FastAPI"
]
const databaseSkills = [
"MongoDB",
"Firebase",
"MySQL",
"Prisma"
]

const languages = [
"CPP",
"Javascipt",
"Python",
  "TypeScript",
]

export default function Skills() {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap()
    if (!ref.current) return
    const el = ref.current
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    })
    tl.fromTo(
      el.querySelector(".about-line"),
      { x: -24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    ).fromTo(
      el.querySelector(".divider-line"),
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3",
    )
    return () => {
      ScrollTrigger.getAll().forEach((s) => s.refresh())
    }
  }, [])

  return (
    <section id="skills" className="px-6 md:px-10 lg:px-16 py-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="about-line text-2xl md:text-3xl font-medium">Skills</h2>
        <div className="divider-line mt-4 h-px bg-(--color-border) origin-left" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <LiquidCard className="glow-hover rounded-xl border border-(--color-border) border-dashed bg-(--color-card)/35 backdrop-blur-xl p-5">
            <h3 className="text-lg font-medium mb-2">Frontend</h3>
            <div ref={ref} className="flex flex-wrap  gap-3">
            {frontendSkills.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
          </LiquidCard>

          <LiquidCard className="glow-hover rounded-xl border border-(--color-border) border-dashed bg-(--color-card)/35 backdrop-blur-xl p-5">
            <h3 className="text-lg font-medium mb-2">Backend</h3>
            <div ref={ref} className="flex flex-wrap  gap-3">
            {backendSkills.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
          </LiquidCard>

          <LiquidCard className="glow-hover rounded-xl border border-(--color-border) border-dashed bg-(--color-card)/35 backdrop-blur-xl p-5">
            <h3 className="text-lg font-medium mb-2">Database</h3>
            <div ref={ref} className="flex flex-wrap  gap-3">
            {databaseSkills.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
          </LiquidCard>

          <LiquidCard className="glow-hover rounded-xl border border-(--color-border) border-dashed bg-(--color-card)/35 backdrop-blur-xl p-5">
            <h3 className="text-lg font-medium mb-2">Languages</h3>
            <div ref={ref} className="flex flex-wrap  gap-3">
            {languages.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  )
}

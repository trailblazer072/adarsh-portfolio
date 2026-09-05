"use client"

import React from "react"
import { motion } from "framer-motion"
import { useSound } from "@/lib/sound-context"
import { Cpu, Terminal, Database, Cloud, Code, GitBranch } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: { name: string; level: number; note: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    icon: Code,
    skills: [
      { name: "TypeScript", level: 92, note: "Strict Typing / Next.js / Node" },
      { name: "JavaScript (ES6+)", level: 95, note: "Async / WebSockets / Microservices" },
      { name: "C++", level: 85, note: "DSA / Memory / LeetCode" },
      { name: "Java", level: 82, note: "OOP / Spring Boot / Enterprise" },
      { name: "Python", level: 80, note: "Gen-AI / Automation / APIs" },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    icon: Terminal,
    skills: [
      { name: "Node.js & Express", level: 94, note: "Microservices & REST APIs" },
      { name: "WebSockets", level: 90, note: "Real-Time Sub-15ms Synchronization" },
      { name: "Moqui Framework", level: 88, note: "Enterprise DataManager & Groovy" },
      { name: "Spring Boot", level: 82, note: "Enterprise Java Services" },
      { name: "Shopify Connectors", level: 86, note: "Location & ATP Sync Logic" },
    ],
  },
  {
    title: "Frontend & 3D Interactive",
    icon: Cpu,
    skills: [
      { name: "Next.js 15/16", level: 95, note: "App Router / Server Components" },
      { name: "React.js", level: 95, note: "Custom Hooks / State Machines" },
      { name: "Three.js & WebGL", level: 85, note: "PBR Shaders / 3D Canvas / Physics" },
      { name: "Tailwind CSS", level: 96, note: "Ultra-responsive Glassmorphism" },
      { name: "Framer Motion", level: 92, note: "Keynote Choreography & Physics" },
    ],
  },
  {
    title: "Databases & ORMs",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90, note: "Relational Modeling & Performance" },
      { name: "Prisma ORM", level: 92, note: "Type-safe Schema & Migrations" },
      { name: "MongoDB", level: 90, note: "NoSQL Clusters & Mongoose" },
      { name: "Moqui Entity Engine", level: 85, note: "XML Data Schemas & ATP Queries" },
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 88, note: "Containerization & Multi-stage Builds" },
      { name: "AWS (EC2, S3)", level: 86, note: "Pre-signed URLs & Deployments" },
      { name: "Linux & Nginx", level: 85, note: "Reverse Proxy & Server Config" },
      { name: "GitHub Actions & CI/CD", level: 88, note: "Automated Testing & Pipelines" },
    ],
  },
  {
    title: "CS Fundamentals & Practice",
    icon: GitBranch,
    skills: [
      { name: "Data Structures & Algorithms", level: 90, note: "LeetCode / Algorithmic Rigor" },
      { name: "Scalable System Design", level: 88, note: "High Concurrency & Fault Tolerance" },
      { name: "Unit & Integration Testing", level: 88, note: "325+ Lines Suite Deployments" },
      { name: "Agile & Team Delivery", level: 92, note: "Cross-functional Coordination" },
    ],
  },
]

export default function Skills() {
  const { playHoverTick } = useSound()

  return (
    <section id="skills" className="relative px-4 sm:px-8 lg:px-12 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 w-fit">
            <Cpu className="h-3.5 w-3.5 text-zinc-300" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
              TECHNICAL COMPETENCIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Systems &amp; Architecture Stack
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl">
            A comprehensive matrix of programming languages, distributed infrastructure, databases, and 3D web engines.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => playHoverTick()}
                className="group rounded-3xl border border-white/15 bg-[#121216]/80 p-6 shadow-xl backdrop-blur-2xl transition-all duration-200 hover:border-white/30"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white shadow-inner">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base tracking-tight text-white">
                      {cat.title}
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-400">
                      PRODUCTION STACK
                    </span>
                  </div>
                </div>

                {/* Skills List with Progress Meters */}
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-medium text-zinc-200">{s.name}</span>
                        <span className="text-[10px] text-zinc-400">{s.level}%</span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-zinc-400 to-white transition-all duration-500"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>

                      <span className="font-mono text-[10px] text-zinc-400 truncate">
                        {s.note}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

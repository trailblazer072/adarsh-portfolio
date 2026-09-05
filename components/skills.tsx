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
      { name: "TypeScript", level: 92, note: "Strict Typing / Next.js / Zero 'any' Tolerance" },
      { name: "JavaScript (ES6+)", level: 95, note: "Async/Await / Event Loop Architecture / Microservices" },
      { name: "C++", level: 85, note: "Algorithmic Rigor / Memory Models / Foundations" },
      { name: "Java", level: 82, note: "Enterprise OOP / Spring Boot / JVM Concurrency" },
      { name: "Python", level: 80, note: "Automation / Gen-AI APIs / Scripting" },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    icon: Terminal,
    skills: [
      { name: "Node.js & Express", level: 94, note: "Non-blocking I/O & RESTful Microservices" },
      { name: "WebSockets", level: 90, note: "Sub-15ms Broadcast & Real-Time Sync" },
      { name: "Moqui Framework", level: 88, note: "Enterprise DataManager / Groovy / Async Jobs" },
      { name: "Spring Boot", level: 82, note: "Enterprise Microservices & Dependency Injection" },
      { name: "Shopify Connectors", level: 86, note: "ATP Inventory Routing & Channel Sync" },
    ],
  },
  {
    title: "Frontend & 3D Interactive",
    icon: Cpu,
    skills: [
      { name: "Next.js 15/16", level: 95, note: "Server Components & App Router Performance" },
      { name: "React.js", level: 95, note: "Custom Hooks & Resilient State Machines" },
      { name: "Three.js & WebGL", level: 85, note: "3D Shaders & GPU-Accelerated Webcraft" },
      { name: "Tailwind CSS", level: 96, note: "Responsive Glassmorphism & Modern Styling" },
      { name: "Framer Motion", level: 92, note: "Apple-Grade Kinetic Physics & Gestures" },
    ],
  },
  {
    title: "Databases & ORMs",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90, note: "ACID Compliance & Relational Sanity" },
      { name: "Prisma ORM", level: 92, note: "Type-Safe Schemas & Seamless Migrations" },
      { name: "MongoDB", level: 90, note: "Document Stores & High-Throughput Clusters" },
      { name: "Moqui Entity Engine", level: 85, note: "Enterprise XML Data Modeling & ATP Queries" },
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 88, note: "Containerization & Multi-Stage Production Builds" },
      { name: "AWS (EC2, S3)", level: 86, note: "Pre-signed URLs, IAM Security & Cloud Deployments" },
      { name: "Linux & Nginx", level: 85, note: "Reverse Proxies, Shell Scripting & Server Tuning" },
      { name: "GitHub Actions & CI/CD", level: 88, note: "Automated Testing & Continuous Integration" },
    ],
  },
  {
    title: "CS Fundamentals & Practice",
    icon: GitBranch,
    skills: [
      { name: "Data Structures & Algorithms", level: 90, note: "Algorithmic Optimization & Efficiency" },
      { name: "Scalable System Design", level: 88, note: "High Concurrency, Caching & Fault Tolerance" },
      { name: "Unit & Integration Testing", level: 88, note: "325+ Lines Verifying System Invariants" },
      { name: "Agile & Team Delivery", level: 92, note: "Cross-Functional Execution & Continuous Delivery" },
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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1 w-fit">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-cyan-300 uppercase">
              TECHNICAL ARSENAL // PRODUCTION READY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Systems &amp; Architecture Stack
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl">
            Languages, frameworks, and cloud infrastructure I use to solve real problems (and the battle scars earned along the way).
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
                className="group rounded-3xl border border-white/15 bg-[#0d121e]/85 p-6 shadow-xl backdrop-blur-2xl transition-all duration-200 hover:border-cyan-500/35"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 shadow-inner">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="font-mono text-[10px] text-cyan-400/80">
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
                        <span className="text-[10px] text-cyan-300 font-semibold">{s.level}%</span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_rgba(0,242,254,0.4)] transition-all duration-500"
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

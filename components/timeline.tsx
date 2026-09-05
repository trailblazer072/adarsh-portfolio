"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useSound } from "@/lib/sound-context"
import { Briefcase, Calendar, ChevronDown, ChevronUp, Layers, ShieldCheck } from "lucide-react"

interface Milestone {
  company: string
  role: string
  period: string
  location: string
  badge?: string
  description: string
  metrics: { label: string; value: string }[]
  highlights: string[]
  skills: string[]
}

const milestones: Milestone[] = [
  {
    company: "Hotwax Commerce",
    role: "Software Engineer Intern",
    period: "Feb '26 — Present",
    location: "Enterprise Connector & OMS",
    badge: "CURRENT ROLE",
    description:
      "Engineering native enterprise data pipelines and inventory synchronization modules across the HotWax Order Management System (OMS) and Shopify ecosystem.",
    metrics: [
      { label: "Integration Logic", value: "840+ Lines" },
      { label: "Unit Test Suites", value: "325+ Lines" },
      { label: "Core Backend Files", value: "8 Deprecated" },
      { label: "Defects Resolved", value: "16 UI/UX" },
    ],
    highlights: [
      "Architected a native data import pipeline for Available-To-Promise (ATP) inventory rules using Moqui DataManager and Vue.js, deprecating legacy SFTP-based batch systems across 8 core backend files to significantly optimize database read efficiency.",
      "Engineered a Shopify Product Location Activation synchronization module within the enterprise connector platform using Groovy and XML, developing 840+ lines of robust integration logic to accurately map physical inventory across e-commerce channels.",
      "Automated critical integration validation by authoring comprehensive unit test suites for ATP processing and Shopify refund workflows, deploying over 325 lines of test scripts to ensure continuous stability of the HotWax OMS ecosystem.",
      "Resolved 16 complex UI/UX anomalies and API desynchronization defects in the Vue.js Order Manager frontend, systematically enforcing strict input validation, correcting state-driven routing errors, and mitigating responsive layout truncations.",
    ],
    skills: ["Moqui DataManager", "Groovy", "XML", "Vue.js", "Shopify API", "Unit Testing", "Enterprise OMS"],
  },
  {
    company: "Beiyo",
    role: "Product & Engineering Strategy Lead",
    period: "Sep '23 — May '25",
    location: "D2C Platform",
    badge: "$1M+ VALUATION",
    description:
      "Co-founded and scaled a D2C hostel management and accommodation platform to a $1M valuation in its first year, steering full-stack architecture and feature delivery.",
    metrics: [
      { label: "Valuation Scaled", value: "$1M (Year 1)" },
      { label: "Architecture", value: "Microservices" },
      { label: "Dashboards", value: "React + Node" },
      { label: "Uptime", value: "99.9%" },
    ],
    highlights: [
      "Built and scaled a D2C platform to a $1M valuation within its first year through streamlined product strategy and rapid engineering execution.",
      "Contributed to development of Node.js microservices and React-based admin dashboards, supporting backend APIs, database workflows, and real-time platform features.",
      "Spearheaded testing, production deployments, and cross-functional engineering coordination to ensure system scalability, high availability, and rapid feature iteration.",
    ],
    skills: ["Node.js", "React", "MongoDB", "AWS", "Product Strategy", "Microservices Architecture"],
  },
  {
    company: "Independent / Freelance",
    role: "Full-Stack & Systems Developer",
    period: "2024 — 2025",
    location: "Global Remote",
    badge: "PRODUCTION APPS",
    description:
      "Crafting production-ready cloud applications, RESTful microservices, and real-time collaborative engines with modern JavaScript and TypeScript stacks.",
    metrics: [
      { label: "Latency", value: "< 20ms Sync" },
      { label: "Security", value: "JWT + S3 Pre-sign" },
      { label: "Databases", value: "PostgreSQL & Mongo" },
      { label: "Containers", value: "Docker / Linux" },
    ],
    highlights: [
      "Developed and maintained full-stack web applications using React, Next.js, Node.js, and MongoDB with secure JWT authorization and role-based access control.",
      "Engineered real-time state synchronization engines using WebSockets with sub-20ms broadcast latency.",
      "Implemented cloud-native storage integrations with AWS S3 pre-signed URLs for time-limited secure asset delivery.",
    ],
    skills: ["Next.js", "TypeScript", "WebSockets", "Prisma ORM", "PostgreSQL", "Docker", "AWS S3"],
  },
]

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const { playHoverTick, playPersonaBlip } = useSound()

  const toggleExpand = (idx: number) => {
    playPersonaBlip()
    setExpandedIndex((prev) => (prev === idx ? -1 : idx))
  }

  return (
    <section id="experience" className="relative px-4 sm:px-8 lg:px-12 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1 w-fit">
            <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-cyan-300 uppercase">
              PROFESSIONAL TRAJECTORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Work Experience &amp; Engineering Impact
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl">
            A chronological timeline of production backend systems, enterprise OMS connectors, and scaled startups.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative space-y-8 sm:space-y-10">
          {/* Continuous Vertical Track Line - Guaranteed dead-center through all nodes in Electric Cyan */}
          <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-400/50 via-cyan-500/25 to-transparent pointer-events-none" />

          {milestones.map((m, idx) => {
            const isExpanded = expandedIndex === idx

            return (
              <motion.div
                key={m.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Timeline Interactive Node Glow Marker - Threaded onto track line in Electric Cyan */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  aria-label={isExpanded ? `Collapse ${m.company} details` : `Expand ${m.company} details`}
                  title={isExpanded ? "Click to collapse details" : "Click to view architecture details"}
                  className={`relative z-10 flex-shrink-0 mt-5 sm:mt-6 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "border-cyan-400 bg-cyan-400 shadow-[0_0_22px_rgba(0,242,254,0.75)] scale-110"
                      : "border-cyan-500/30 bg-[#090d16] hover:border-cyan-400 hover:scale-105 shadow-[0_0_12px_rgba(0,0,0,0.9)]"
                  }`}
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isExpanded
                        ? "h-2.5 w-2.5 bg-black"
                        : "h-2 w-2 bg-cyan-400 shadow-[0_0_6px_#00f2fe] animate-pulse"
                    }`}
                  />
                </button>

                {/* Milestone Glassmorphic Card */}
                <div
                  className="flex-1 min-w-0 rounded-3xl border border-white/15 bg-[#0d121e]/85 p-5 sm:p-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-200 hover:border-cyan-500/35"
                >
                  {/* Card Header (Clickable to toggle) */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-5 cursor-pointer select-none group"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                          {m.company}
                        </h3>
                        {m.badge && (
                          <span className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-300">
                            {m.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-mono text-xs sm:text-sm text-zinc-300">
                        {m.role} • <span className="text-zinc-500">{m.location}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{m.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {m.description}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {m.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-cyan-500/15 bg-cyan-950/20 p-2.5 sm:p-3 text-center"
                      >
                        <div className="font-mono text-sm sm:text-lg font-bold text-cyan-200">
                          {metric.value}
                        </div>
                        <div className="mt-0.5 font-mono text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Toggle Expandable Technical Deep-Dive */}
                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/10">
                    <button
                      onClick={() => toggleExpand(idx)}
                      onMouseEnter={() => playHoverTick()}
                      className="flex items-center justify-between w-full font-mono text-xs font-semibold text-zinc-300 hover:text-cyan-200 transition-colors py-1 text-left gap-2 cursor-pointer"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <Layers className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{isExpanded ? "COLLAPSE ARCHITECTURE DETAILS" : "VIEW ARCHITECTURE DETAILS"}</span>
                      </span>
                      <span className="flex-shrink-0">{isExpanded ? <ChevronUp className="h-4 w-4 text-cyan-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}</span>
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 pt-2"
                      >
                        <ul className="space-y-2.5">
                          {m.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                              <ShieldCheck className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {m.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-cyan-500/20 bg-cyan-950/20 px-2.5 py-1 font-mono text-[10px] text-cyan-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

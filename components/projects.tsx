"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useSound } from "@/lib/sound-context"
import { ExternalLink, Github, Layers, X, Sparkles, Terminal, CheckCircle2 } from "lucide-react"

interface Project {
  title: string
  tagline: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
  architectureDetails: {
    systemDesign: string
    keyFeatures: string[]
    databaseSchema: string
    security: string
  }
}

const projects: Project[] = [
  {
    title: "FileVault",
    tagline: "Secure Cloud Storage & Gen-AI Digest",
    description:
      "Enterprise-grade MERN cloud storage platform featuring time-limited AWS S3 pre-signed URLs, JWT role-based access control, and integrated Gen-AI PDF summarization—engineered for direct-to-S3 asset streaming without server memory bottlenecks.",
    image: "/FileVault.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT"],
    github: "https://github.com/adarshGit-hub/File-sharing-app",
    live: "https://file-sharing-app-px2e.vercel.app/",
    architectureDetails: {
      systemDesign:
        "Direct-to-S3 upload architecture using cryptographically signed pre-signed URLs, completely bypassing Node.js buffer bottlenecks while Express microservices cleanly index metadata and permissions.",
      keyFeatures: [
        "Time-limited AWS S3 Pre-signed URLs for encrypted asset streaming directly from edge storage",
        "Granular Role-Based Access Control (RBAC) ensuring strict organizational data isolation without privilege escalation",
        "Integrated Gen-AI PDF summarization engine that digests dense documents in seconds",
        "Responsive glassmorphic file explorer with instant fuzzy search and star bookmarks",
      ],
      databaseSchema: "MongoDB Document collections for Users, Files, FileShares, and AuditLogs.",
      security: "Cryptographic JWT session tokens, HTTPS transport security, and short-lived S3 IAM policies.",
    },
  },
  {
    title: "Shapify",
    tagline: "Sub-15ms Real-Time Collaborative Canvas",
    description:
      "Full-stack real-time collaborative whiteboard where vector updates broadcast across connected clients in under 15ms via WebSockets. Powered by Next.js, Prisma ORM, and PostgreSQL—delivering responsive multi-cursor coordination.",
    image: "/Shapify.png",
    tags: ["Next.js", "TypeScript", "WebSockets", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/adarshGit-hub/Shapify---Collaborative-Real-Time-Whiteboard",
    live: "https://ai-trading-insight-tool.vercel.app/",
    architectureDetails: {
      systemDesign:
        "Bi-directional WebSocket broadcast mesh engineered with delta compression, optimistic local rendering, and cursor multiplexing to eliminate collaborative lag.",
      keyFeatures: [
        "Sub-15ms vector broadcast synchronization between concurrent browser sessions",
        "Smooth bezier freehand drawing, geometric primitive transforms, and full undo/redo transaction stacks",
        "Type-safe Prisma ORM schema migrations with persistent PostgreSQL vector state",
        "Next.js App Router performance optimizations with selective canvas re-rendering to keep frame rates locked at 60fps",
      ],
      databaseSchema: "PostgreSQL relational tables for Rooms, Users, CanvasShapes, and Snapshots.",
      security: "WebSocket handshake authentication with JWT validation and room-level authorization.",
    },
  },
  {
    title: "Beiyo Platform",
    tagline: "Student Housing Platform Scaled to $1M Valuation",
    description:
      "The operational backbone that scaled a student accommodation platform to a $1M valuation in 9 months. Handled 100+ beds, 90%+ occupancy, real-time rent collection, and resident onboarding with high-availability microservices.",
    image: "/Beiyo.jpg",
    tags: ["React", "Node.js", "MongoDB", "AWS EC2", "Microservices"],
    live: "https://beiyo.in/",
    architectureDetails: {
      systemDesign:
        "Distributed multi-tenant microservices architecture orchestrating bed inventory, automated billing cycles, resident KYC, and real-time operational analytics.",
      keyFeatures: [
        "Propelled platform to $1M valuation in 9 months through focused product-market fit and agile code iteration",
        "High-availability Node.js microservices built to handle concurrent booking spikes smoothly",
        "Interactive React admin dashboards replacing antiquated paper registers with real-time occupancy telemetry",
        "Cloud-hosted on AWS with automated deployment pipelines ensuring 99.9% platform uptime",
      ],
      databaseSchema: "MongoDB multi-tenant clusters partitioning properties, tenants, and financial transactions.",
      security: "Role-based administrative gating, secure session cookies, and encrypted customer data storage.",
    },
  },
]

// 3D Perspective Tilt Card Sub-Component
function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project
  onOpenDetails: (p: Project) => void
}) {
  const cardRef = React.useRef<HTMLDivElement | null>(null)
  const [rotX, setRotX] = useState(0)
  const [rotY, setRotY] = useState(0)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const { playHoverTick, playCardTilt } = useSound()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rY = ((x - centerX) / centerX) * 8
    const rX = -((y - centerY) / centerY) * 8

    setRotX(rX)
    setRotY(rY)
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.18 })
  }

  const handleMouseLeave = () => {
    setRotX(0)
    setRotY(0)
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        playHoverTick()
        playCardTilt()
      }}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-cyan-500/25 bg-[#0a0f1b]/90 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-200 hover:border-cyan-400/45"
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Specular Glare Follow Vector */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 300px at ${glare.x}% ${glare.y}%, rgba(0, 242, 254, ${glare.opacity * 0.7}), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Banner Image with Live Status Pill */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] border border-cyan-500/20 bg-zinc-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Status badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-black/80 px-2.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe] animate-pulse" />
            <span className="font-mono text-[9px] font-semibold text-cyan-300 uppercase tracking-wider">
              ONLINE
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="mt-5">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-zinc-400">
            {project.tagline}
          </p>
          <p className="mt-3 text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technology Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-cyan-500/20 bg-cyan-950/25 px-2 py-0.5 font-mono text-[10px] text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <button
          onClick={() => onOpenDetails(project)}
          onMouseEnter={() => playHoverTick()}
          className="flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-300 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <Layers className="h-3.5 w-3.5 text-cyan-400" />
          <span>ARCHITECTURE DOCS</span>
        </button>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playHoverTick()}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-950/30 text-cyan-200 transition-colors hover:border-cyan-400 hover:bg-cyan-900/40 hover:text-white"
              title="View GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playHoverTick()}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400 bg-gradient-to-r from-cyan-400 to-cyan-300 text-black shadow-[0_0_12px_rgba(0,242,254,0.35)] transition-transform hover:scale-105"
              title="Open Live Application"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { playHoverTick, playPersonaBlip } = useSound()

  const openDetails = (p: Project) => {
    playPersonaBlip()
    setSelectedProject(p)
  }

  const closeDetails = () => {
    playHoverTick()
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="relative px-4 sm:px-8 lg:px-12 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1 w-fit">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-cyan-300 uppercase">
              PRODUCTION LABS &amp; SHIPPED SYSTEMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Flagship Engineering Systems
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl">
            Real-time collaborative canvases, encrypted cloud storage vaults, and production platforms built to survive real traffic.
          </p>
        </div>

        {/* 3D Kinetic Perspective Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} onOpenDetails={openDetails} />
          ))}
        </div>
      </div>

      {/* System Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetails}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#090e1a] p-5 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-3xl"
            >
              {/* Close Button */}
              <button
                onClick={closeDetails}
                aria-label="Close architecture details"
                className="absolute top-4 sm:top-5 right-4 sm:right-5 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300 transition-colors hover:bg-cyan-900/50 hover:text-white z-10 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 pr-10">
                <Terminal className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white truncate">
                  {selectedProject.title} // Dossier
                </h3>
              </div>
              <p className="mt-1 font-mono text-xs text-cyan-400/80">
                {selectedProject.tagline}
              </p>

              {/* Architecture Sections */}
              <div className="mt-6 space-y-4 sm:space-y-5">
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
                    System Architecture &amp; Data Pipeline
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.architectureDetails.systemDesign}
                  </p>
                </div>

                <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
                    Core Technical Implementations
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.architectureDetails.keyFeatures.map((kf, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 sm:p-4">
                    <h4 className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cyan-400/80 mb-1.5">
                      Database Model
                    </h4>
                    <p className="font-mono text-[11px] sm:text-xs text-zinc-300">
                      {selectedProject.architectureDetails.databaseSchema}
                    </p>
                  </div>
                  <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 sm:p-4">
                    <h4 className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cyan-400/80 mb-1.5">
                      Security &amp; Authorization
                    </h4>
                    <p className="font-mono text-[11px] sm:text-xs text-zinc-300">
                      {selectedProject.architectureDetails.security}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t border-white/10">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-950/30 px-4 py-2.5 font-mono text-xs font-medium text-cyan-200 transition-colors hover:border-cyan-400 hover:bg-cyan-900/40 hover:text-white text-center"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-4 py-2.5 font-mono text-xs font-bold text-black shadow-[0_0_16px_rgba(0,242,254,0.35)] transition-transform hover:scale-105 text-center"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Launch Live System</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

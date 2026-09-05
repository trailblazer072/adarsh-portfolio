"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { useSound } from "@/lib/sound-context"

export default function PerspectiveCard() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [rotateX, setRotateX] = useState(3)
  const [rotateY, setRotateY] = useState(-6)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })
  const { playCardTilt, playHoverTick, currentPersona } = useSound()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation (-12deg to +12deg)
    const rotY = ((x - centerX) / centerX) * 10
    const rotX = -((y - centerY) / centerY) * 10

    setRotateX(rotX)
    setRotateY(rotY)

    // Glare vector
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100
    setGlarePos({ x: glareX, y: glareY, opacity: 0.2 })
  }

  const handleMouseEnter = () => {
    playHoverTick()
    playCardTilt()
  }

  const handleMouseLeave = () => {
    // Reset to subtle rest angle
    setRotateX(3)
    setRotateY(-6)
    setGlarePos({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient background aura behind card */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-full opacity-40 blur-3xl transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 242, 254, 0.16) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Floating 3D Micro-Chips in Z-Space */}
      <div
        className="absolute -top-4 -right-3 z-30 hidden sm:flex items-center gap-2 rounded-xl border border-cyan-500/25 bg-[#0b101b]/90 px-3.5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300"
        style={{
          transform: `rotateY(${rotateY * 0.7}deg) rotateX(${rotateX * 0.7}deg) translateZ(60px)`,
        }}
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
        <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-200">
          SGSITS CS &apos;26 // INDORE
        </span>
      </div>

      <div
        className="absolute -bottom-4 -left-3 z-30 hidden sm:flex items-center gap-2 rounded-xl border border-cyan-500/25 bg-[#0b101b]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300"
        style={{
          transform: `rotateY(${rotateY * 0.7}deg) rotateX(${rotateX * 0.7}deg) translateZ(70px)`,
        }}
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe] animate-pulse" />
        <span className="font-mono text-[11px] text-zinc-300">
          STATUS: <strong className="text-cyan-300 font-semibold">{currentPersona.statsTag}</strong>
        </span>
      </div>

      {/* The Space Black Frosted Glass Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[500px] cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[28px] border border-cyan-500/25 bg-[#090d16]/85 p-4 sm:p-5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95)] backdrop-blur-3xl transition-transform duration-200 ease-out hover:border-cyan-400/40"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dynamic Specular Glare Follow Vector */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(0, 242, 254, ${glarePos.opacity * 0.75}), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Specular Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* Inner Portrait Frame */}
        <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-zinc-950 shadow-inner">
          <Image
            src="/portrait_space_black.jpg"
            alt="Adarsh Raghuwanshi — Systems Architect"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-center filter transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Vignette overlay inside frame */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

          {/* Floating badge inside portrait frame */}
          <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 z-10 flex items-center gap-2 rounded-lg bg-black/80 px-3 py-1.5 backdrop-blur-md border border-cyan-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-cyan-200">
              {currentPersona.label}
            </span>
          </div>
        </div>

        {/* Card Footer Metadata */}
        <div className="mt-4 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Adarsh Raghuwanshi
              </h3>
              <p className="font-mono text-[11px] text-zinc-400">
                FULL-STACK & DISTRIBUTED SYSTEMS
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe] animate-pulse" />
              <span className="font-mono text-[10px] text-cyan-300 font-semibold">ACTIVE</span>
            </div>
          </div>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Moqui", "Next.js", "WebSockets", "Node.js", "Prisma", "AWS", "Three.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cyan-500/15 bg-cyan-950/15 px-2.5 py-1 font-mono text-[10px] text-cyan-200/80 transition-colors hover:border-cyan-400/40 hover:text-cyan-100"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

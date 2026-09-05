"use client"

import React from "react"
import { motion } from "framer-motion"
import { useSound } from "@/lib/sound-context"
import { GraduationCap, Lightbulb, Compass, Award } from "lucide-react"

export default function About() {
  const { playHoverTick } = useSound()

  return (
    <section id="about" className="relative px-4 sm:px-8 lg:px-12 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 w-fit">
            <Compass className="h-3.5 w-3.5 text-zinc-300" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">
              ENGINEERING PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Adarsh Raghuwanshi
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl">
            Software engineer, systems thinker, and product strategist driven by first-principles problem solving.
          </p>
        </div>

        {/* Narrative Glass Card */}
        <div className="rounded-3xl border border-white/15 bg-[#121216]/80 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <p className="text-base sm:text-xl font-normal leading-relaxed text-zinc-200">
            I am a Software Engineer and Computer Science undergraduate at{" "}
            <strong className="text-white font-semibold">SGSITS Indore</strong> (2022–2026) who bridges distributed backend
            engineering with product strategy. From architecting enterprise systems and integrations at{" "}
            <strong className="text-white font-semibold">HotWax Commerce</strong> to scaling{" "}
            <strong className="text-white font-semibold">Beiyo to a $1M valuation</strong>, my focus is building resilient,
            high-throughput architectures that solve mission-critical operational challenges.
          </p>

          {/* Core Pillars */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              onMouseEnter={() => playHoverTick()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="h-4 w-4 text-white" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Education &amp; Roots
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-mono">
                B.Tech in Computer Science
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Shri Govindram Seksaria Institute of Technology &amp; Science (SGSITS), Indore • 2022–2026
              </p>
            </motion.div>

            <motion.div
              onMouseEnter={() => playHoverTick()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Lightbulb className="h-4 w-4 text-white" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Coding Philosophy
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-mono">
                Make it work ➔ make it right ➔ make it fast ➔ make it beautiful.
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Zero premature optimization. Mathematical simplicity and robust telemetry over complexity.
              </p>
            </motion.div>

            <motion.div
              onMouseEnter={() => playHoverTick()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Award className="h-4 w-4 text-white" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Core Passions
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-mono">
                Distributed Systems &amp; Real-Time
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Low-latency WebSockets, Moqui enterprise pipelines, and Awwwards-caliber 3D WebGL webcraft.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

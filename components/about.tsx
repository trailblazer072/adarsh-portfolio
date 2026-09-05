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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1 w-fit">
            <Compass className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-cyan-300 uppercase">
              ENGINEERING PHILOSOPHY &amp; BACKGROUND
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Behind the Systems: Adarsh Raghuwanshi
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl">
            Software engineer, systems thinker, and product strategist who believes computers are delightfully deterministic until you introduce distributed state.
          </p>
        </div>

        {/* Narrative Glass Card */}
        <div className="rounded-3xl border border-white/15 bg-[#0d121e]/85 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-10 max-w-3xl">
            I&apos;m a Software Engineer and CS undergrad at{" "}
            <strong className="text-white font-semibold">SGSITS Indore</strong> (Class of &apos;26) with a deep focus on sub-second latency and zero-downtime deploys. Whether I&apos;m untangling enterprise inventory pipelines at{" "}
            <strong className="text-cyan-300 font-semibold">HotWax Commerce</strong> or scaling{" "}
            <strong className="text-cyan-300 font-semibold">Beiyo to a $1M valuation in 9 months</strong> (100+ beds, 90%+ occupancy, lots of midnight caffeine), I care about one thing: building battle-tested systems that handle real human traffic without breaking a sweat.
          </p>

          {/* Core Pillars */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              onMouseEnter={() => playHoverTick()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-200 hover:border-cyan-500/35 hover:bg-cyan-950/15"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Academic Foundation
                </h3>
              </div>
              <p className="text-sm text-cyan-200 leading-relaxed font-mono">
                B.Tech in Computer Science &amp; Engineering
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                SGSITS Indore (2022–2026). Grounded in algorithmic rigor, computer systems, and the timeless realization that raw pointers build character.
              </p>
            </motion.div>

            <motion.div
              onMouseEnter={() => playHoverTick()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-200 hover:border-cyan-500/35 hover:bg-cyan-950/15"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Lightbulb className="h-4 w-4 text-cyan-400" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Engineering Manifesto
                </h3>
              </div>
              <p className="text-sm text-cyan-200 leading-relaxed font-mono">
                Make it work ➔ make it right ➔ make it fast.
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Zero premature optimization. Strong typing, idempotent endpoints, and actionable telemetry over unnecessary complexity.
              </p>
            </motion.div>

            <motion.div
              onMouseEnter={() => playHoverTick()}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-200 hover:border-cyan-500/35 hover:bg-cyan-950/15"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <Award className="h-4 w-4 text-cyan-400" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Primary Focus
                </h3>
              </div>
              <p className="text-sm text-cyan-200 leading-relaxed font-mono">
                Distributed Backends &amp; Low-Latency Web
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                WebSockets broadcasting with sub-15ms latency, enterprise OMS synchronization, and modern 3D WebGL interfaces engineered for performance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

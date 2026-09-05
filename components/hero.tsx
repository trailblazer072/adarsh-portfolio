"use client"

import { motion, AnimatePresence } from "framer-motion"
import PerspectiveCard from "./perspective-card"
import QuickStatsBox from "./quick-stats"
import Magnetic from "./magnetic"
import { useSound } from "@/lib/sound-context"
import { ArrowDown, FileCode, Sparkles } from "lucide-react"

export default function Hero() {
  const { playHoverTick, currentPersona } = useSound()

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Keynote Typography + Quick Stats Box */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-4 py-1.5 w-fit backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
                DISTRIBUTED SYSTEMS &amp; FULL-STACK ARCHITECTURE
              </span>
            </motion.div>

            {/* Main Apple Keynote Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">ARCHITECTING SYSTEMS</span><br />
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  THAT WITHSTAND REALITY.
                </span>
              </h1>
            </motion.div>

            {/* Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-sm sm:text-base lg:text-xl text-zinc-400 font-normal leading-relaxed"
            >
              I&apos;m <strong className="text-white font-semibold">Adarsh Raghuwanshi</strong>, a software engineer and CS undergraduate at{" "}
              <strong className="text-zinc-200">SGSITS Indore</strong>. Currently engineering resilient enterprise OMS pipelines and inventory sync modules at{" "}
              <strong className="text-zinc-200">HotWax Commerce</strong>, having previously co-founded and scaled{" "}
              <strong className="text-zinc-200">Beiyo to a $1M valuation</strong> in 9 months (where student housing taught me that edge cases are the only constant).
            </motion.p>

            {/* Active Persona Quote Strip with smooth 3s transition */}
            <div className="flex items-center gap-2.5 rounded-xl border border-cyan-500/25 bg-[#0a101d]/60 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-mono text-zinc-300 w-full max-w-xl shadow-lg backdrop-blur-md overflow-hidden">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe] animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPersona.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden"
                >
                  <span className="text-cyan-300 font-bold tracking-wider flex-shrink-0 text-[11px] sm:text-xs">
                    {currentPersona.label}:
                  </span>
                  <span className="italic text-zinc-300 truncate text-[11px] sm:text-xs">
                    &ldquo;{currentPersona.quote}&rdquo;
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Anubhav Choubey-Style Quick Stats HUD Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2"
            >
              <QuickStatsBox />
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 w-full sm:w-auto"
            >
              <Magnetic>
                <a
                  href="#projects"
                  onMouseEnter={() => playHoverTick()}
                  className="group flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 px-6 py-3 font-mono text-xs font-bold text-black shadow-[0_0_24px_rgba(0,242,254,0.35)] transition-all hover:shadow-[0_0_34px_rgba(0,242,254,0.5)] hover:scale-105 active:scale-95 text-center"
                >
                  <span>EXPLORE PRODUCTION SYSTEMS</span>
                  <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#experience"
                  onMouseEnter={() => playHoverTick()}
                  className="flex items-center justify-center gap-2.5 rounded-full border border-cyan-500/25 bg-cyan-950/15 px-6 py-3 font-mono text-xs font-medium text-cyan-200 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-cyan-900/30 hover:text-white text-center"
                >
                  <FileCode className="h-3.5 w-3.5 text-cyan-400" />
                  <span>TRACK RECORD &amp; CODE</span>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Apple Space Black 3D Perspective Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <PerspectiveCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

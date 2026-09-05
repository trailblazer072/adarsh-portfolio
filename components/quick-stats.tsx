"use client"

import React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useSound, PERSONAS } from "@/lib/sound-context"

export default function QuickStatsBox() {
  const { currentPersona, setPersonaById, playHoverTick } = useSound()

  return (
    <div className="w-full max-w-[420px] rounded-2xl border-2 border-white/15 bg-[#141418]/90 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-white/25">
      {/* Header with Active Avatar and 3s Auto-Cycle Animation */}
      <div className="flex items-center gap-3 sm:gap-3.5 border-b border-white/10 pb-3.5">
        <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-black shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPersona.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="relative h-8 w-8 sm:h-9 sm:w-9"
            >
              <Image
                src={currentPersona.avatar}
                alt={currentPersona.label}
                fill
                sizes="38px"
                priority
                className="object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-mono text-xs font-bold tracking-wider text-white uppercase truncate">
              ADARSH RAGHUWANSHI
            </h4>
            <span className="font-mono text-[9px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded flex-shrink-0">
              VERIFIED
            </span>
          </div>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPersona.statsTag}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-[10px] sm:text-[11px] text-zinc-400 truncate"
              >
                Engineer Dossier // {currentPersona.statsTag}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Stats Table */}
      <div className="mt-3.5 flex flex-col gap-2 font-mono text-[11px] sm:text-xs">
        <div className="flex items-center justify-between gap-2">
          <span className="text-zinc-400 flex-shrink-0">Experience</span>
          <span className="font-medium text-zinc-100 text-right truncate">HotWax Commerce (OMS)</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-zinc-400 flex-shrink-0">Startup Scaled</span>
          <span className="font-semibold text-white text-right truncate">$1M+ Valuation (Beiyo)</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-zinc-400 flex-shrink-0">Collaborative Sync</span>
          <span className="font-medium text-zinc-100 text-right truncate">&lt; 15ms (Shapify)</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-zinc-400 flex-shrink-0">Education</span>
          <span className="font-medium text-zinc-100 text-right truncate">SGSITS CS &apos;26 (Indore)</span>
        </div>
      </div>

      {/* Alter-Ego Interactive Strip with 3s Cycling Progress Bar */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            Auto-Cycling (3s):
          </span>
          <span className="font-mono text-[10px] text-zinc-300 font-semibold truncate max-w-[200px]">
            {currentPersona.name}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {PERSONAS.map((p) => {
            const isActive = p.id === currentPersona.id
            return (
              <button
                key={p.id}
                onClick={() => setPersonaById(p.id)}
                onMouseEnter={() => playHoverTick()}
                className={`relative flex flex-col items-center gap-1 rounded-lg border p-1.5 overflow-hidden transition-all duration-200 ${
                  isActive
                    ? "border-white bg-white/15 shadow-[0_0_14px_rgba(255,255,255,0.22)] scale-[1.03]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.08]"
                }`}
                title={p.label}
              >
                <div className="relative h-6 w-6">
                  <Image
                    src={p.avatar}
                    alt={p.label}
                    fill
                    sizes="24px"
                    className="object-contain"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <span className="font-mono text-[9px] text-zinc-300 truncate max-w-full">
                  {p.id.toUpperCase()}
                </span>

                {/* 3-Second Active Progress Bar */}
                {isActive && (
                  <motion.div
                    key={`progress-${p.id}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-white rounded-full"
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

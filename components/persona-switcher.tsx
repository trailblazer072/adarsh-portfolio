"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useSound } from "@/lib/sound-context"

export default function PersonaSwitcher() {
  const { currentPersona, nextPersona, playHoverTick } = useSound()
  const [isBouncing, setIsBouncing] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  const handleClick = () => {
    setIsBouncing(true)
    setShowBubble(true)
    nextPersona()
    setTimeout(() => setIsBouncing(false), 260)
    setTimeout(() => setShowBubble(false), 3500)
  }

  return (
    <div className="relative inline-flex items-center">
      {/* Speech Bubble / Quote on Persona Change */}
      {showBubble && (
        <div className="absolute right-0 top-14 z-50 w-64 max-w-[calc(100vw-2rem)] rounded-xl border border-white/20 bg-[#18181b]/95 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 font-mono text-[10px] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="truncate">{currentPersona.role}</span>
          </div>
          <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-zinc-200">
            &ldquo;{currentPersona.quote}&rdquo;
          </p>
          {/* Bubble beak */}
          <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 border-l border-t border-white/20 bg-[#18181b]" />
        </div>
      )}

      {/* The Interactive Persona Button (anubhavchoubey.com style) */}
      <button
        onClick={handleClick}
        onMouseEnter={() => playHoverTick()}
        title="Click to switch persona alter-ego (auto-cycles every 3s)!"
        className={`group relative flex items-center gap-2 sm:gap-3 rounded-xl border-2 border-white bg-white p-1 pl-2 sm:pl-3.5 shadow-[0_4px_20px_rgba(255,255,255,0.22)] transition-all duration-200 hover:scale-105 active:scale-95 ${
          isBouncing ? "scale-95" : ""
        }`}
      >
        {/* Label in retro pixel arcade font with smooth 3s cross-fade: hidden on small mobile, visible on sm: */}
        <div className="overflow-hidden hidden sm:block min-w-[130px] lg:min-w-[145px] text-left">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPersona.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="block font-mono text-[11px] sm:text-[12px] font-bold tracking-tight text-black uppercase select-none truncate"
            >
              {currentPersona.label}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Pixel Avatar Frame with smooth 3s cross-fade */}
        <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-lg bg-black p-0.5 shadow-inner transition-transform group-hover:rotate-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPersona.avatar}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative h-7 w-7 sm:h-8 sm:w-8"
            >
              <Image
                src={currentPersona.avatar}
                alt={currentPersona.label}
                fill
                sizes="32px"
                priority
                className="image-pixelated object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </button>
    </div>
  )
}

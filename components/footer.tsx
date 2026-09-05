"use client"

import React, { useEffect, useState } from "react"
import { useSound } from "@/lib/sound-context"
import { ArrowUp, Clock } from "lucide-react"

export default function Footer() {
  const { playHoverTick, currentPersona } = useSound()
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Indian Standard Time
      const istString = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setTime(istString)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t border-white/10 bg-[#060608] px-4 sm:px-8 lg:px-12 py-10 text-white">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copy */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 font-mono text-xs font-bold text-cyan-200 shadow-[0_0_10px_rgba(0,242,254,0.15)]">
            AR
          </div>
          <div>
            <p className="font-mono text-xs text-zinc-300">
              © {new Date().getFullYear()} Adarsh Raghuwanshi. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-zinc-500">
              Active Persona: <span className="text-cyan-400 font-semibold">{currentPersona.label}</span>
            </p>
          </div>
        </div>

        {/* Center: Live IST Studio Clock */}
        <div className="flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-4 py-1.5 font-mono text-xs text-zinc-400">
          <Clock className="h-3.5 w-3.5 text-cyan-400" />
          <span>INDORE, IN (IST):</span>
          <span className="font-semibold text-cyan-300">{time || "19:30:00"}</span>
        </div>

        {/* Right: Back to top */}
        <div>
          <a
            href="#home"
            onMouseEnter={() => playHoverTick()}
            className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-4 py-2 font-mono text-xs font-medium text-cyan-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-900/30 hover:text-white"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
          </a>
        </div>
      </div>
    </footer>
  )
}

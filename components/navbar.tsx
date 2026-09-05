"use client"

import { useState, useEffect } from "react"
import { Menu, X, Clock } from "lucide-react"
import PersonaSwitcher from "./persona-switcher"
import { useSound } from "@/lib/sound-context"

const links = [
  { href: "#home", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState<string>("")
  const { playHoverTick } = useSound()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
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
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050508]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 sm:h-[70px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <a
          href="#home"
          onMouseEnter={() => playHoverTick()}
          className="group flex items-center gap-3 sm:gap-3.5 shrink-0 transition-all hover:opacity-95"
        >
          <div className="flex h-10 w-10 sm:h-10.5 sm:w-10.5 shrink-0 items-center justify-center rounded-xl border border-cyan-500/35 bg-gradient-to-br from-[#09253d] via-[#071626] to-[#050b14] font-mono text-sm font-bold text-cyan-200 shadow-[0_0_14px_rgba(0,242,254,0.25)] transition-all group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_22px_rgba(0,242,254,0.4)]">
            AR
          </div>
          <div className="hidden sm:flex flex-col whitespace-nowrap shrink-0">
            <span className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-white transition-colors group-hover:text-cyan-100">
              ADARSH RAGHUWANSHI
            </span>
            <span className="font-mono text-[10px] text-cyan-400 font-medium tracking-wide">
              SOFTWARE ENGINEER // 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-cyan-500/20 bg-[#090e1a]/80 p-1.5 shadow-lg backdrop-blur-xl shrink-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onMouseEnter={() => playHoverTick()}
              className="rounded-full px-3.5 lg:px-4 py-1.5 font-mono text-xs font-medium text-zinc-300 transition-all hover:bg-cyan-950/50 hover:text-cyan-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Studio Clock + Persona Switcher + Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Live IST Studio Clock */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1.5 font-mono text-xs text-zinc-400 shadow-[0_0_12px_rgba(0,242,254,0.08)] whitespace-nowrap shrink-0">
            <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span className="hidden xl:inline whitespace-nowrap text-zinc-400">INDORE, IN (IST):</span>
            <span className="inline xl:hidden whitespace-nowrap text-zinc-400">IST:</span>
            <span className="font-semibold text-cyan-300 font-mono tracking-wider whitespace-nowrap">{time || "19:09:11"}</span>
          </div>

          <PersonaSwitcher />

          <button
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white shrink-0"
            aria-label="Toggle navigation menu"
            onClick={() => {
              playHoverTick()
              setOpen((v) => !v)
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-white/10 bg-[#0c0c0e]/95 px-5 py-4 backdrop-blur-2xl md:hidden">
          <div className="mb-3 flex items-center justify-between rounded-xl border border-cyan-500/25 bg-cyan-950/30 px-3 py-2 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
              <span className="text-zinc-300">INDORE, IN (IST):</span>
            </div>
            <span className="font-semibold text-cyan-300 font-mono tracking-wider">{time || "19:09:11"}</span>
          </div>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="block rounded-lg px-3 py-2 font-mono text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

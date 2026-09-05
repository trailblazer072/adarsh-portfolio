"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
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
  const { playHoverTick } = useSound()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050508]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#home"
          onMouseEnter={() => playHoverTick()}
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-b from-[#2c2c2e] to-[#141416] font-mono text-sm font-bold text-white shadow-md transition-transform group-hover:scale-105">
            AR
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-mono text-xs font-bold tracking-wider text-white">
              ADARSH RAGHUWANSHI
            </span>
            <span className="font-mono text-[10px] text-zinc-400">
              SOFTWARE ENGINEER // 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#141418]/60 p-1.5 shadow-lg backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onMouseEnter={() => playHoverTick()}
              className="rounded-full px-4 py-1.5 font-mono text-xs font-medium text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Anubhav Choubey Persona Switcher + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <PersonaSwitcher />

          <button
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
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
        <div className="border-t border-white/10 bg-[#0c0c0e]/95 px-6 py-4 backdrop-blur-2xl md:hidden">
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

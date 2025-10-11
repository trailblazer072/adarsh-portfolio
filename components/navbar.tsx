"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-border) bg-(--color-card)/40 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a href="#home" className="font-medium tracking-wide glow-hover">
          AR
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-(--color-border) p-2 glow-hover"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:opacity-80 transition-opacity" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-(--color-border) bg-(--color-card)/40 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="block py-2 hover:opacity-80 transition-opacity"
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

"use client"

import React, { createContext, useContext, useState, useEffect, useRef } from "react"

export interface Persona {
  id: string
  name: string
  label: string
  role: string
  avatar: string
  quote: string
  statsTag: string
}

export const PERSONAS: Persona[] = [
  {
    id: "architect",
    name: "Adarsh Raghuwanshi",
    label: "I AM AN ARCHITECT",
    role: "Full-Stack & Distributed Systems Engineer",
    avatar: "/avatars/avatar_adarsh_engineer.png",
    quote: "Architecting resilient distributed backends and scalable enterprise systems.",
    statsTag: "SYSTEMS_MODE",
  },
  {
    id: "batman",
    name: "The Dark Knight",
    label: "I'LL BE BATMAN",
    role: "Silent Code Vigilante",
    avatar: "/avatars/avatar_adarsh_batman.png",
    quote: "Squashing production race conditions at 3 AM. It's not who I am underneath, but what I build that defines me.",
    statsTag: "NIGHT_OPS",
  },
  {
    id: "philosopher",
    name: "The Thinker",
    label: "I AM A PHILOSOPHER",
    role: "Product Strategist & First-Principles Thinker",
    avatar: "/avatars/avatar_adarsh_philosopher.png",
    quote: "Make it work, make it right, make it fast, make it beautiful.",
    statsTag: "FIRST_PRINCIPLES",
  },
  {
    id: "cyberpunk",
    name: "Neo / Cyberpunk",
    label: "I AM CYBERPUNK",
    role: "Real-Time WebSocket Specialist",
    avatar: "/avatars/avatar_adarsh_cyber.png",
    quote: "Sub-15ms sync. The matrix is just distributed memory buffers.",
    statsTag: "WEBSOCKET_MATRIX",
  },
]

interface SoundContextType {
  isMuted: boolean
  toggleMute: () => void
  playHoverTick: () => void
  playPersonaBlip: () => void
  playCardTilt: () => void
  playSuccessChime: () => void
  currentPersona: Persona
  personaIndex: number
  nextPersona: () => void
  setPersonaById: (id: string) => void
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
  playHoverTick: () => {},
  playPersonaBlip: () => {},
  playCardTilt: () => {},
  playSuccessChime: () => {},
  currentPersona: PERSONAS[0],
  personaIndex: 0,
  nextPersona: () => {},
  setPersonaById: () => {},
})

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted] = useState(true)
  const [personaIndex, setPersonaIndex] = useState(0)

  // Audio has been completely disabled per user request
  const toggleMute = () => {}
  const playHoverTick = () => {}
  const playPersonaBlip = () => {}
  const playCardTilt = () => {}
  const playSuccessChime = () => {}

  // Auto-cycle persona every 3 seconds
  const [isPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      setPersonaIndex((prev) => (prev + 1) % PERSONAS.length)
    }, 3000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const nextPersona = () => {
    setPersonaIndex((prev) => (prev + 1) % PERSONAS.length)
  }

  const setPersonaById = (id: string) => {
    const idx = PERSONAS.findIndex((p) => p.id === id)
    if (idx !== -1 && idx !== personaIndex) {
      setPersonaIndex(idx)
    }
  }

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        playHoverTick,
        playPersonaBlip,
        playCardTilt,
        playSuccessChime,
        currentPersona: PERSONAS[personaIndex],
        personaIndex,
        nextPersona,
        setPersonaById,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export const useSound = () => useContext(SoundContext)

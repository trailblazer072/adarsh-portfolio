"use client"

import React from "react"

export default function Cursor() {
  const dotRef = React.useRef<HTMLDivElement | null>(null)
  const ringRef = React.useRef<HTMLDivElement | null>(null)
  const pos = React.useRef({ x: 0, y: 0 })
  const lazy = React.useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMove)
    const raf = () => {
      lazy.current.x += (pos.current.x - lazy.current.x) * 0.15
      lazy.current.y += (pos.current.y - lazy.current.y) * 0.15
      if (dotRef.current) dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${lazy.current.x - 18}px, ${lazy.current.y - 18}px)`
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0 z-50" aria-hidden />
      <div ref={dotRef} className="cursor-dot fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2" aria-hidden />
    </>
  )
}

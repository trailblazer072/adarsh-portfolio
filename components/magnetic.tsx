"use client"

import type React from "react"
import { useRef } from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & { strength?: number }

export default function Magnetic({ strength = 0.2, children, className = "", ...rest }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  function onMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    const relX = e.clientX - (bounds.left + bounds.width / 2)
    const relY = e.clientY - (bounds.top + bounds.height / 2)
    ref.current.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`
  }

  function onLeave() {
    if (!ref.current) return
    ref.current.style.transform = "translate(0px, 0px)"
  }

  return (
    <div className={className} onMouseMove={onMouseMove} onMouseLeave={onLeave} data-magnetic>
      <div ref={ref}>{children}</div>
    </div>
  )
}

"use client"

import type * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

type LiquidCardProps = React.ComponentProps<"div"> & {
  as?: React.ElementType
}

export default function LiquidCard({
  as: Comp = motion.div,
  className,
  onMouseMove,
  onMouseLeave,
  children,
  ...props
}: LiquidCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mx = useSpring(x, { stiffness: 300, damping: 40, mass: 0.6 })
  const my = useSpring(y, { stiffness: 300, damping: 40, mass: 0.6 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
    onMouseMove?.(e)
  }

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // gently return to center
    x.set((e.currentTarget.clientWidth ?? 0) / 2)
    y.set((e.currentTarget.clientHeight ?? 0) / 2)
    onMouseLeave?.(e)
  }

  return (
    <Comp
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        {
          // Expose animated coordinates to CSS ::before via variables
          ["--mx" as any]: mx,
          ["--my" as any]: my,
        } as React.CSSProperties
      }
      className={cn("liquid-card", className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

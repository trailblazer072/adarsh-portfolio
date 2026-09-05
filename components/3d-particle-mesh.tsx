"use client"

import React, { useEffect, useRef } from "react"

export default function InteractiveTitaniumMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const isMobile = width < 768
    const cols = isMobile ? 32 : 48
    const rows = isMobile ? 22 : 32

    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      radius: isMobile ? 220 : 340,
      active: true,
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX
        mouse.targetY = e.touches[0].clientY
        mouse.active = true
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX
        mouse.targetY = e.touches[0].clientY
        mouse.active = true
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })

    const handleResize = () => {
      if (!canvas) return
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", handleResize)

    let time = 0

    function render() {
      if (!ctx) return
      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      ctx.clearRect(0, 0, width, height)

      // Dynamic cursor ambient light sheen (smooth spotlight that illuminates the surface in Electric Cyan)
      if (mouse.active) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.3
        )
        spotGrad.addColorStop(0, "rgba(0, 242, 254, 0.08)")
        spotGrad.addColorStop(0.35, "rgba(0, 180, 216, 0.03)")
        spotGrad.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = spotGrad
        ctx.fillRect(0, 0, width, height)
      }

      time += 0.01

      const cellW = width / (cols - 1)
      const cellH = height / (rows - 1)

      // Compute grid vertex positions with harmonic wave physics + cursor disturbance
      const grid: { x: number; y: number; highlight: number }[][] = []

      for (let r = 0; r < rows; r++) {
        grid[r] = []
        const baseY = r * cellH

        for (let c = 0; c < cols; c++) {
          const baseX = c * cellW

          // Harmonic multi-frequency undulating surface waves
          const wave1 = Math.sin(baseX * 0.0035 + time + r * 0.18) * 12
          const wave2 = Math.cos(baseY * 0.0045 - time * 0.75 + c * 0.12) * 7

          let px = baseX
          let py = baseY + wave1 + wave2

          // Cursor interactive gravitational deformation
          const dx = px - mouse.x
          const dy = py - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let highlight = 0
          if (dist < mouse.radius) {
            const force = 1 - dist / mouse.radius
            const displacement = Math.sin(force * Math.PI) * 36
            const angle = Math.atan2(dy, dx)
            px += Math.cos(angle) * displacement * 0.35
            py += Math.sin(angle) * displacement * 0.55
            highlight = force
          }

          grid[r][c] = { x: px, y: py, highlight }
        }
      }

      // Draw horizontal undulating curves with Electric Cyber Cyan accents
      ctx.lineWidth = 1
      for (let r = 0; r < rows; r++) {
        ctx.beginPath()
        for (let c = 0; c < cols; c++) {
          const pt = grid[r][c]
          if (c === 0) {
            ctx.moveTo(pt.x, pt.y)
          } else {
            const prev = grid[r][c - 1]
            const mx = (prev.x + pt.x) / 2
            const my = (prev.y + pt.y) / 2
            ctx.quadraticCurveTo(prev.x, prev.y, mx, my)
          }
        }
        const lastPt = grid[r][cols - 1]
        ctx.lineTo(lastPt.x, lastPt.y)

        // Highlight lines closest to cursor with Electric Cyan glow
        const midC = Math.min(cols - 1, Math.max(0, Math.floor((mouse.x / width) * cols)))
        const lineH = grid[r][midC]?.highlight || 0
        const alpha = 0.035 + lineH * 0.25

        if (lineH > 0.04) {
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`
        } else {
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.7})`
        }
        ctx.stroke()
      }

      // Draw subtle vertical contour ribs for true 3D surface mesh feel
      ctx.lineWidth = 0.7
      const colStep = isMobile ? 3 : 2
      for (let c = 0; c < cols; c += colStep) {
        ctx.beginPath()
        for (let r = 0; r < rows; r++) {
          const pt = grid[r][c]
          if (r === 0) {
            ctx.moveTo(pt.x, pt.y)
          } else {
            const prev = grid[r - 1][c]
            const mx = (prev.x + pt.x) / 2
            const my = (prev.y + pt.y) / 2
            ctx.quadraticCurveTo(prev.x, prev.y, mx, my)
          }
        }
        const lastPt = grid[rows - 1][c]
        ctx.lineTo(lastPt.x, lastPt.y)

        const midR = Math.min(rows - 1, Math.max(0, Math.floor((mouse.y / height) * rows)))
        const colH = grid[midR]?.[c]?.highlight || 0
        const alpha = 0.02 + colH * 0.18

        if (colH > 0.04) {
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`
        } else {
          ctx.strokeStyle = `rgba(125, 211, 252, ${alpha * 0.5})`
        }
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90"
    />
  )
}

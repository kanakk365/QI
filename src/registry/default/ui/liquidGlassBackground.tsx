"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

interface LiquidGlassBackgroundProps {
  width: number
  height: number
  className?: string
}

export const LiquidGlassBackground: React.FC<LiquidGlassBackgroundProps> = ({ width, height, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [filterId] = useState(() => `liquid-glass-3hvb6mapy`)
  const mouseRef = useRef({ x: 0, y: 0 })
  const mouseUsedRef = useRef(false)
  const animationRef = useRef<number | undefined>(undefined)

  // Utility functions - exact copies from original
  const smoothStep = (a: number, b: number, t: number): number => {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)))
    return t * t * (3 - 2 * t)
  }

  const length = (x: number, y: number): number => {
    return Math.sqrt(x * x + y * y)
  }

  const roundedRectSDF = (x: number, y: number, width: number, height: number, radius: number): number => {
    const qx = Math.abs(x) - width + radius
    const qy = Math.abs(y) - height + radius
    return Math.min(Math.max(qx, qy), 0) + length(Math.max(qx, 0), Math.max(qy, 0)) - radius
  }

  const texture = (x: number, y: number) => {
    return { type: "t", x, y }
  }

  // Enhanced fragment shader logic that works on all sides
  const fragment = (uv: { x: number; y: number }, mouse: { x: number; y: number }) => {
    const ix = uv.x - 0.5
    const iy = uv.y - 0.5

    // Adjust SDF parameters for better coverage on all sides
    const distanceToEdge = roundedRectSDF(ix, iy, 0.35, 0.25, 0.5)

    // Enhanced displacement calculation that works better on all edges
    const displacement = smoothStep(0.9, -0.1, distanceToEdge - 0.1)
    const scaled = smoothStep(0, 1, displacement)

    // Add subtle mouse influence for better interaction
    const mouseInfluence = 0.05
    const mouseDx = (mouse.x - 0.5) * mouseInfluence
    const mouseDy = (mouse.y - 0.5) * mouseInfluence

    return texture(ix * scaled + 0.5 + mouseDx * displacement, iy * scaled + 0.5 + mouseDy * displacement)
  }

  const updateShader = () => {
    const canvas = canvasRef.current
    const svg = svgRef.current
    if (!canvas || !svg) return

    const context = canvas.getContext("2d")
    if (!context) return

    // Mouse proxy to track usage - exact copy from original
    const mouseProxy = new Proxy(mouseRef.current, {
      get: (target, prop) => {
        mouseUsedRef.current = true
        return target[prop as keyof typeof target]
      },
    })

    mouseUsedRef.current = false

    const w = canvas.width
    const h = canvas.height
    const data = new Uint8ClampedArray(w * h * 4)
    let maxScale = 0
    const rawValues: number[] = []

    // Exact shader logic from original
    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w
      const y = Math.floor(i / 4 / w)
      const pos = fragment({ x: x / w, y: y / h }, mouseProxy)
      const dx = pos.x * w - x
      const dy = pos.y * h - y
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy))
      rawValues.push(dx, dy)
    }

    maxScale *= 0.8
    let index = 0

    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5
      const g = rawValues[index++] / maxScale + 0.5
      data[i] = r * 255
      data[i + 1] = g * 255
      data[i + 2] = 0
      data[i + 3] = 255
    }

    context.putImageData(new ImageData(data, w, h), 0, 0)

    // Update SVG filter
    const feImage = svg.querySelector(`#${filterId}_map`) as SVGFEImageElement
    const feDisplacementMap = svg.querySelector("feDisplacementMap") as SVGFEDisplacementMapElement

    if (feImage && feDisplacementMap) {
      feImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL())
      feDisplacementMap.setAttribute("scale", (maxScale / 0.8).toString())
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = width
    canvas.height = height

    const animate = () => {
      if (mouseUsedRef.current) {
        updateShader()
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initial shader update
    updateShader()
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [width, height])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
      updateShader()
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Hidden canvas for displacement map */}
      <canvas ref={canvasRef} style={{ display: "none" }} width={width} height={height} />

      {/* SVG Filter - exact structure from original */}
      <svg ref={svgRef} width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
        <defs>
          <filter
            id={filterId}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            <feImage id={`${filterId}_map`} width={width} height={height} />
            <feDisplacementMap in="SourceGraphic" in2={`${filterId}_map`} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Background element with original liquid glass styling */}
      <div
        ref={containerRef}
        className={`absolute inset-0 ${className}`}
        style={{
          backdropFilter: `url(#${filterId}) blur(4px) brightness(1.5) saturate(1.1)`,
          WebkitBackdropFilter: `url(#${filterId}) blur(4px) brightness(1.5) saturate(1.1)`,
          boxShadow: `
            0 4px 8px rgba(0, 0, 0, 0.25),
            0 -10px 25px inset rgba(0, 0, 0, 0.15),
            0 -1px 4px 1px inset rgba(255, 255, 255, 0.74)
          `,
        }}
      />
    </>
  )
}

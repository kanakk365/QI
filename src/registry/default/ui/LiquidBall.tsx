"use client"

import { useState, useEffect, useRef } from "react"

export default function LiquidBall({ initialPercentage = 75, size = 100 }) {
  const [percentage, setPercentage] = useState(initialPercentage)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: size, height: size })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    setPercentage(initialPercentage)
  }, [initialPercentage])

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    if (dimensions.width <= 0 || dimensions.height <= 0) return

    const displayWidth = Math.round(dimensions.width)
    const displayHeight = Math.round(dimensions.height)

    canvas.style.width = `${displayWidth}px`
    canvas.style.height = `${displayHeight}px`

    canvas.width = Math.round(displayWidth * dpr)
    canvas.height = Math.round(displayHeight * dpr)

    ctx.scale(dpr, dpr)

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    let time = 0

    const drawFlask = () => {
      ctx.clearRect(0, 0, canvas.width as number, canvas.height as number)

      const centerX = displayWidth / 2
      const centerY = displayHeight / 2
      
      const radius = Math.max(1, Math.min(centerX, centerY) - 5)
      
      ctx.save()
      
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 0.5, 0, Math.PI * 2, false)
      ctx.lineWidth = 1.5
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)'
      ctx.stroke()
      
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false)
      ctx.closePath()
      ctx.clip()

      const maxWaterHeight = radius * 2 
      const waterHeight = (percentage / 100) * maxWaterHeight
      const baseWaterY = centerY + radius - waterHeight

      const waveAmplitude = 3 + Math.sin(time * 0.3) * 1 
      const waveFrequency = 0.08 + Math.sin(time * 0.2) * 0.01

      const pointStep = 1 
      const pointCount = Math.ceil((2 * radius) / pointStep) + 4
      
      const deepWaterGradient = ctx.createLinearGradient(0, baseWaterY - 10, 0, centerY + radius)
      deepWaterGradient.addColorStop(0, "rgba(10, 90, 80, 0.95)")
      deepWaterGradient.addColorStop(0.3, "rgba(10, 90, 80, 1)")
      deepWaterGradient.addColorStop(0.7, "rgba(10, 80, 70, 1)")
      deepWaterGradient.addColorStop(1, "rgba(10, 70, 60, 1)")

      ctx.shadowColor = "rgba(10, 90, 80, 0.3)"
      ctx.shadowBlur = 6

      if (radius > 0) {
        ctx.beginPath()
        ctx.moveTo(centerX - radius - 2, baseWaterY + 10) 

        const deepWaveAmplitude = waveAmplitude * 1.2
        const deepBackWaveOffset = 2 

        for (let i = 0; i < pointCount; i++) {
          const x = centerX - radius - 2 + i * pointStep

          const wave1 = Math.sin((x + 10) * waveFrequency * 0.9 + time * 0.65) * deepWaveAmplitude * 1.1
          const wave2 = Math.sin((x + 10) * waveFrequency * 1.5 + time * 1.15) * (deepWaveAmplitude * 0.6)
          const wave3 = Math.sin((x + 10) * waveFrequency * 0.35 + time * 0.45) * (deepWaveAmplitude * 0.4)
          const wave4 = Math.sin((x + 10) * waveFrequency * 2.3 + time * 0.25) * (deepWaveAmplitude * 0.3)

          const variableOffset = Math.sin(x * 0.04 + time * 0.15) * 4 + 2
          const waveHeight = wave1 + wave2 + wave3 + wave4

          ctx.lineTo(x, baseWaterY + waveHeight + deepBackWaveOffset + variableOffset)
        }

        ctx.lineTo(centerX + radius + 2, centerY + radius)
        ctx.lineTo(centerX - radius - 2, centerY + radius)
        ctx.closePath()

        ctx.fillStyle = deepWaterGradient
        ctx.fill()

        const backWaterGradient = ctx.createLinearGradient(0, baseWaterY - 10, 0, centerY + radius)
        backWaterGradient.addColorStop(0, "rgba(20, 120, 110, 0.95)")
        backWaterGradient.addColorStop(0.3, "rgba(20, 120, 110, 1)")
        backWaterGradient.addColorStop(0.7, "rgba(20, 110, 100, 1)")
        backWaterGradient.addColorStop(1, "rgba(20, 100, 90, 1)")

        ctx.shadowColor = "rgba(20, 120, 110, 0.3)"
        ctx.shadowBlur = 7

        ctx.beginPath()
        ctx.moveTo(centerX - radius - 2, baseWaterY + 10) 
        const backWaveAmplitude = waveAmplitude * 1.4
        const baseBackWaveOffset = -1 

        for (let i = 0; i < pointCount; i++) {
          const x = centerX - radius - 2 + i * pointStep
          const wave1 = Math.sin((x + 5) * waveFrequency + time * 0.75) * backWaveAmplitude * 1.1
          const wave2 = Math.sin((x + 5) * waveFrequency * 1.7 + time * 1.25) * (backWaveAmplitude * 0.6)
          const wave3 = Math.sin((x + 5) * waveFrequency * 0.4 + time * 0.55) * (backWaveAmplitude * 0.4)
          const wave4 = Math.sin((x + 5) * waveFrequency * 2.5 + time * 0.35) * (backWaveAmplitude * 0.3)

          const variableOffset = Math.sin(x * 0.05 + time * 0.2) * 3.5 - 1
          const waveHeight = wave1 + wave2 + wave3 + wave4

          ctx.lineTo(x, baseWaterY + waveHeight + baseBackWaveOffset + variableOffset)
        }

        ctx.lineTo(centerX + radius + 2, centerY + radius)
        ctx.lineTo(centerX - radius - 2, centerY + radius)
        ctx.closePath()
        ctx.fillStyle = backWaterGradient
        ctx.fill()

        const waterGradient = ctx.createLinearGradient(0, baseWaterY - 10, 0, centerY + radius)
        waterGradient.addColorStop(0, "rgba(64, 190, 180, 0.9)")
        waterGradient.addColorStop(0.3, "rgba(64, 190, 180, 0.95)")
        waterGradient.addColorStop(0.7, "rgba(64, 180, 170, 1)")
        waterGradient.addColorStop(1, "rgba(64, 170, 160, 1)")

        ctx.shadowColor = "rgba(64, 190, 180, 0.3)"
        ctx.shadowBlur = 8

        ctx.beginPath()
        ctx.moveTo(centerX - radius - 2, baseWaterY + 10)
        for (let i = 0; i < pointCount; i++) {
          const x = centerX - radius - 2 + i * pointStep
          const wave1 = Math.sin(x * waveFrequency + time) * waveAmplitude
          const wave2 = Math.sin(x * waveFrequency * 2 + time * 1.3) * (waveAmplitude * 0.5)
          const wave3 = Math.sin(x * waveFrequency * 0.5 + time * 0.7) * (waveAmplitude * 0.3)
          const wave4 = Math.sin(x * waveFrequency * 3 + time * 0.5) * (waveAmplitude * 0.2)
          const waveHeight = wave1 + wave2 + wave3 + wave4

          ctx.lineTo(x, baseWaterY + waveHeight)
        }
        ctx.lineTo(centerX + radius + 2, centerY + radius)
        ctx.lineTo(centerX - radius - 2, centerY + radius)
        ctx.closePath()

        ctx.fillStyle = waterGradient
        ctx.fill()

        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0
        if (percentage > 0) {
          ctx.beginPath()

          for (let i = 0; i < pointCount; i += 2) {
            const x = centerX - radius - 2 + i * pointStep
            if (x <= centerX + radius + 2) {
              const wave1 = Math.sin(x * waveFrequency + time) * waveAmplitude
              const wave2 = Math.sin(x * waveFrequency * 2 + time * 1.3) * (waveAmplitude * 0.5)
              const wave3 = Math.sin(x * waveFrequency * 0.5 + time * 0.7) * (waveAmplitude * 0.3)
              const wave4 = Math.sin(x * waveFrequency * 3 + time * 0.5) * (waveAmplitude * 0.2)
              const waveHeight = wave1 + wave2 + wave3 + wave4

              ctx.lineTo(x, baseWaterY + waveHeight - 0.5)
            }
          }
          const highlightGradient = ctx.createLinearGradient(centerX - radius, baseWaterY, centerX + radius, baseWaterY)
          highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.1)")
          highlightGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)")
          highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0.1)")

          ctx.strokeStyle = highlightGradient
          ctx.lineWidth = 1
          ctx.stroke()
          
          ctx.beginPath()
          const innerRadius = Math.max(0.5, radius - 1.5)
          ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2, false)
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
          ctx.lineWidth = 1
          ctx.stroke()
        }

        const fontSize = Math.max(8, Math.min(16, radius / 2.5))
        ctx.font = `bold ${fontSize}px Arial`
        ctx.fillStyle = "#fff"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.shadowColor = "rgba(0, 0, 0, 0.4)"
        ctx.shadowBlur = 3
        
        ctx.fillText(`${Math.round(percentage)}%`, Math.round(centerX), Math.round(centerY))
        ctx.shadowBlur = 0
      }

      ctx.restore()

      time += 0.03

      animationRef.current = requestAnimationFrame(drawFlask)
    }

    drawFlask()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [percentage, dimensions]) 

  return (
    <div 
      ref={containerRef}
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full rounded-full" 
        style={{ 
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      />
    </div>
  )
}


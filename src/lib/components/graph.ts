import { ComponentData } from '../types';

export const graphComponent: ComponentData = {
  name: "Graph",
  description: "An interactive data visualization component with animated charts and dark mode support.",
  preview: () => import("@/src/registry/default/ui/Graph"),
  demo: `"use client";
import Graph from "@/src/components/ui/Graph";

export function GraphDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Graph />
    </div>
  );
}`,
  code: `"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

export default function Graph() {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="bg-card rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-border p-4 font-inter">
      <motion.div
        className=" w-[21rem] " 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
      >
        <div className="">
        <h2 className="text-lg font-semibold text-foreground font-inter mb-2">
          Analyze revenue & Projections
        </h2>
        <p className="text-muted-foreground text-sm font-inter">
          Interactive data visualization to track revenue trends and forecast future projections
        </p>
      </div>
        <svg height="300" viewBox="50 0 2000 1400" xmlns="http://www.w3.org/2000/svg" className="w-[21rem]">
          {/* Y-axis */}
          <line x1="150" y1="50" x2="150" y2="1450" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} strokeWidth="2" />
          
          {/* Y-axis labels */}
          <text x="130" y="0" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">5M</text>
          <text x="130" y="300" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">4M</text>
          <text x="130" y="600" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">3M</text>
          <text x="130" y="900" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">2M</text>
          <text x="130" y="1185" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">1M</text>
          <text x="130" y="1450" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">$0</text>
          
          {/* X-axis */}
          <line x1="150" y1="1450" x2="1900" y2="1450" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} strokeWidth="2" />
          
          {/* X-axis labels */}
          <text x="250" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Jan</text>
          <text x="550" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Feb</text>
          <text x="850" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Mar</text>
          <text x="1150" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Apr</text>
          <text x="1450" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">May</text>
          <text x="1750" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Jun</text>
          <text x="2000" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Jul</text>

          {/* Background filled area */}
          <motion.path
            d="M150 1450c21-10.4 63-36.697 105-52.002s63-3.737 105-24.524 63-55.046 105-79.411c42-24.365 63-9.514 105-42.415 42-32.9 63-89.167 105-122.089s63-6.42 105-42.521 63-94.856 105-137.983c42-43.128 63-67.313 105-77.655 42-10.341 63 1.963 105 25.946 42 23.984 63 115.147 105 93.97 42-21.178 63-174.168 105-199.857 42-25.69 63 96.87 105 71.408 42-25.462 63-134.132 105-198.717 42-64.585 63-165.105 105-124.207 42 40.898 63 305.962 105 328.697 42 22.736 63-99.36 105-215.021 42-115.66 63-276.93 105-363.282 42-86.351 63-134.053 105-68.476 42 65.578 84 317.09 105 396.362l5 841.288H150Z"
            fill={theme === 'dark' ? '#444cf71a' : '#444cf71a'}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: isHovered ? 0.6 : 0.3,
              scale: isHovered ? 1.01 : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Main stroke path */}
          <motion.path
            d="M150 1450c21-10.4 63-36.697 105-52.002s63-3.737 105-24.524 63-55.046 105-79.411c42-24.365 63-9.514 105-42.415 42-32.9 63-89.167 105-122.089s63-6.42 105-42.521 63-94.856 105-137.983c42-43.128 63-67.313 105-77.655 42-10.341 63 1.963 105 25.946 42 23.984 63 115.147 105 93.97 42-21.178 63-174.168 105-199.857 42-25.69 63 96.87 105 71.408 42-25.462 63-134.132 105-198.717 42-64.585 63-165.105 105-124.207 42 40.898 63 305.962 105 328.697 42 22.736 63-99.36 105-215.021 42-115.66 63-276.93 105-363.282 42-86.351 63-134.053 105-68.476 42 65.578 84 317.09 105 396.362"
            fill="none"
            stroke="#444cf7"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: isHovered ? 0.9 : 0.6,
              strokeWidth: isHovered ? 7 : 5,
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              strokeWidth: { duration: 0.3 },
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}`,
  cli: "npm i motion/react next-themes",
  manualSteps: [
    {
      title: "Install dependencies",
      code: "npm i motion/react next-themes",
      language: "bash"
    },
    {
      title: "Copy the source code",
      code: `"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

export default function Graph() {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  return (
    <div className="bg-card rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-border p-4 font-inter">
      <motion.div
        className=" w-[21rem] " 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
      >
        <div className="">
        <h2 className="text-lg font-semibold text-foreground font-inter mb-2">
          Analyze revenue & Projections
        </h2>
        <p className="text-muted-foreground text-sm font-inter">
          Interactive data visualization to track revenue trends and forecast future projections
        </p>
      </div>
        <svg height="300" viewBox="50 0 2000 1400" xmlns="http://www.w3.org/2000/svg" className="w-[21rem]">
          {/* Y-axis */}
          <line x1="150" y1="50" x2="150" y2="1450" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} strokeWidth="2" />
          
          {/* Y-axis labels */}
          <text x="130" y="0" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">5M</text>
          <text x="130" y="300" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">4M</text>
          <text x="130" y="600" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">3M</text>
          <text x="130" y="900" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">2M</text>
          <text x="130" y="1185" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">1M</text>
          <text x="130" y="1450" textAnchor="end" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">$0</text>
          
          {/* X-axis */}
          <line x1="150" y1="1450" x2="1900" y2="1450" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} strokeWidth="2" />
          
          {/* X-axis labels */}
          <text x="250" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Jan</text>
          <text x="550" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Feb</text>
          <text x="850" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Mar</text>
          <text x="1150" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Apr</text>
          <text x="1450" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">May</text>
          <text x="1750" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Jun</text>
          <text x="2000" y="1520" textAnchor="middle" fill={theme === 'dark' ? '#9ca3af' : '#6b7280'} fontSize="50" fontWeight="700">Jul</text>

          {/* Background filled area */}
          <motion.path
            d="M150 1450c21-10.4 63-36.697 105-52.002s63-3.737 105-24.524 63-55.046 105-79.411c42-24.365 63-9.514 105-42.415 42-32.9 63-89.167 105-122.089s63-6.42 105-42.521 63-94.856 105-137.983c42-43.128 63-67.313 105-77.655 42-10.341 63 1.963 105 25.946 42 23.984 63 115.147 105 93.97 42-21.178 63-174.168 105-199.857 42-25.69 63 96.87 105 71.408 42-25.462 63-134.132 105-198.717 42-64.585 63-165.105 105-124.207 42 40.898 63 305.962 105 328.697 42 22.736 63-99.36 105-215.021 42-115.66 63-276.93 105-363.282 42-86.351 63-134.053 105-68.476 42 65.578 84 317.09 105 396.362l5 841.288H150Z"
            fill={theme === 'dark' ? '#444cf71a' : '#444cf71a'}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: isHovered ? 0.6 : 0.3,
              scale: isHovered ? 1.01 : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Main stroke path */}
          <motion.path
            d="M150 1450c21-10.4 63-36.697 105-52.002s63-3.737 105-24.524 63-55.046 105-79.411c42-24.365 63-9.514 105-42.415 42-32.9 63-89.167 105-122.089s63-6.42 105-42.521 63-94.856 105-137.983c42-43.128 63-67.313 105-77.655 42-10.341 63 1.963 105 25.946 42 23.984 63 115.147 105 93.97 42-21.178 63-174.168 105-199.857 42-25.69 63 96.87 105 71.408 42-25.462 63-134.132 105-198.717 42-64.585 63-165.105 105-124.207 42 40.898 63 305.962 105 328.697 42 22.736 63-99.36 105-215.021 42-115.66 63-276.93 105-363.282 42-86.351 63-134.053 105-68.476 42 65.578 84 317.09 105 396.362"
            fill="none"
            stroke="#444cf7"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: isHovered ? 0.9 : 0.6,
              strokeWidth: isHovered ? 7 : 5,
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              strokeWidth: { duration: 0.3 },
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}`,
      language: "tsx",
      filename: "components/ui/Graph.tsx"
    }
  ]
}; 
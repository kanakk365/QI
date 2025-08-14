import { ComponentData } from "../types";

export const wavyCircleComponent: ComponentData = {
  name: "WavyCircle",
  description: "A radial wavy bar animation that reacts to cursor angle with smooth scaling.",
  preview: () => import("@/src/registry/default/ui/WavyCircle"),
  demo: `"use client";
import WavyCircle from "@/src/components/ui/WavyCircle";

export function WavyCircleDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <WavyCircle />
    </div>
  );
}`,
  code: `"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

interface WavyCircleProps {
  size?: number;
  radius?: number;
  lineCount?: number;
  lineHeight?: number;
  color?: string;
}

export default function WavyCircle({
  size = 400,
  radius = 150,
  lineCount = 96,
  lineHeight = 25,
  color = "#f87171",
}: WavyCircleProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lineThicknessPx = 2;

  const angles = useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => (i * 360) / lineCount);
  }, [lineCount]);

  const getDistance = (a: number, b: number) => {
    const direct = Math.abs(a - b);
    return Math.min(direct, lineCount - direct);
  };

  const getScaleY = (index: number) => {
    if (activeIndex === null) return 1;
    const d = getDistance(activeIndex, index);
    if (d === 0) return 2.0;
    if (d === 1) return 1.6;
    if (d === 2) return 1.3;
    if (d === 3) return 1.15;
    return 1;
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const rad = Math.atan2(dy, dx);
    let deg = (rad * 180) / Math.PI;
    if (deg < 0) deg += 360;
    const degFromTop = (deg + 90) % 360;
    const step = 360 / lineCount;
    const idx = Math.round(degFromTop / step) % lineCount;
    setActiveIndex(idx);
  };

  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 rounded-full " />

      {angles.map((angle, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            rotate: \`\${angle}deg\`,
          }}
        >
          <motion.div
            className="rounded-full"
            style={{
              backgroundColor: color,
              width: \`\${lineThicknessPx}px\`,
              height: \`\${lineHeight}px\`,
              translate: \`0 -\${radius}px\`,
              transformOrigin: "bottom center",
            }}
            animate={{
              scaleY: getScaleY(index),
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </div>
      ))}
    </div>
  );
}`,
  cli: "npx shadcn@latest add https://qi.kanakk.me/r/wavy-circle.json",
  manualSteps: [
    {
      title: "Install dependencies",
      code: "npm i motion/react",
      language: "bash"
    },
    {
      title: "Copy the source code",
      code: `"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

interface WavyCircleProps {
  size?: number;
  radius?: number;
  lineCount?: number;
  lineHeight?: number;
  color?: string;
}

export default function WavyCircle({
  size = 400,
  radius = 150,
  lineCount = 96,
  lineHeight = 25,
  color = "#f87171",
}: WavyCircleProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lineThicknessPx = 2;

  const angles = useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => (i * 360) / lineCount);
  }, [lineCount]);

  const getDistance = (a: number, b: number) => {
    const direct = Math.abs(a - b);
    return Math.min(direct, lineCount - direct);
  };

  const getScaleY = (index: number) => {
    if (activeIndex === null) return 1;
    const d = getDistance(activeIndex, index);
    if (d === 0) return 2.0;
    if (d === 1) return 1.6;
    if (d === 2) return 1.3;
    if (d === 3) return 1.15;
    return 1;
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const rad = Math.atan2(dy, dx);
    let deg = (rad * 180) / Math.PI;
    if (deg < 0) deg += 360;
    const degFromTop = (deg + 90) % 360;
    const step = 360 / lineCount;
    const idx = Math.round(degFromTop / step) % lineCount;
    setActiveIndex(idx);
  };

  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: size, height: size }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 rounded-full " />

      {angles.map((angle, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            rotate: \`\${angle}deg\`,
          }}
        >
          <motion.div
            className="rounded-full"
            style={{
              backgroundColor: color,
              width: \`\${lineThicknessPx}px\`,
              height: \`\${lineHeight}px\`,
              translate: \`0 -\${radius}px\`,
              transformOrigin: "bottom center",
            }}
            animate={{
              scaleY: getScaleY(index),
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </div>
      ))}
    </div>
  );
}`,
      language: "tsx",
      filename: "components/ui/WavyCircle.tsx"
    }
  ]
};



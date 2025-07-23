import { NextResponse } from 'next/server';

export async function GET() {
  const component = {
    type: "registry:component",
    name: "infinite-scroll",
    description: "A smooth infinite scrolling component with animated content and hover interactions.",
    files: [
      {
        type: "registry:file",
        name: "components/ui/infinite-scroll.tsx",
        content: `"use client";
import { Hexagon, LogsIcon } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

function InfiniteScroll() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  
  const getAnimationProps = () => {
    if (isHovered) {
      return {
        x: [currentX + "%", "-50%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 80,
          ease: "linear" as const,
          onUpdate: (latest: number) => {
            setCurrentX(latest);
          },
        },
      };
    }
    return {};
  };

  return (
    <motion.div
      className="bg-[#171717] h-[26rem] w-[20rem] rounded-lg shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] relative overflow-hidden flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6">
        <h1 className="text-base font-semibold text-neutral-100 mb-4 flex items-center gap-1">
          <LogsIcon size={17} />
          Dynamic Content
        </h1>
        <div>
          <h2 className="text-sm text-neutral-100 mb-1">
            Infinite scroll animation
          </h2>
          <p className="text-sm text-neutral-400">
            Smooth continuous movement effects
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 overflow-hidden mt-10">
        <div className="text-white text-center flex-1 h-full flex flex-col gap-2 justify-center">
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex w-max gap-2"
              animate={getAnimationProps()}
            >
              <div className="flex flex-shrink-0 gap-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={index}
                    className="border border-neutral-800 rounded-lg p-1 h-15 w-15 bg-neutral-900 text-xs flex items-center justify-center flex-shrink-0"
                  >
                    <Hexagon className="text-neutral-500" size={24} />
                  </div>
                ))}
              </div>
              <div className="flex flex-shrink-0 gap-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={\`dup1-\${index}\`}
                    className="border border-neutral-800 rounded-lg p-1 h-15 w-15 bg-neutral-900 text-xs flex items-center justify-center flex-shrink-0"
                  >
                    <Hexagon className="text-neutral-500" size={24} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex w-max gap-2"
              animate={getAnimationProps()}
            >
              <div className="flex flex-shrink-0 gap-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={index}
                    className="border border-neutral-800 rounded-lg p-1 h-15 w-15 bg-neutral-900 text-xs flex items-center justify-center flex-shrink-0"
                  >
                    <Hexagon className="text-neutral-500" size={24} />
                  </div>
                ))}
              </div>
              <div className="flex flex-shrink-0 gap-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={\`dup2-\${index}\`}
                    className="border border-neutral-800 rounded-lg p-1 h-15 w-15 bg-neutral-900 text-xs flex items-center justify-center flex-shrink-0"
                  >
                    <Hexagon className="text-neutral-500" size={24} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex w-max gap-2"
              animate={getAnimationProps()}
            >
              <div className="flex flex-shrink-0 gap-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={index}
                    className="border border-neutral-800 rounded-lg p-1 h-15 w-15 bg-neutral-900 text-xs flex items-center justify-center flex-shrink-0"
                  >
                    <Hexagon className="text-neutral-500" size={24} />
                  </div>
                ))}
              </div>
              <div className="flex flex-shrink-0 gap-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={\`dup3-\${index}\`}
                    className="border border-neutral-800 rounded-lg p-1 h-15 w-15 bg-neutral-900 text-xs flex items-center justify-center flex-shrink-0"
                  >
                    <Hexagon className="text-neutral-500" size={24} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InfiniteScroll;`
      }
    ],
    dependencies: ["motion", "lucide-react"],
    devDependencies: ["@types/react"],
    registryDependencies: []
  };

  return NextResponse.json(component);
} 
import { NextResponse } from 'next/server';

export async function GET() {
  const component = {
    type: "registry:component",
    name: "cursors",
    description: "An interactive cursor tracking demo with smooth mouse following animations.",
    files: [
      {
        type: "registry:file",
        name: "components/ui/cursors.tsx",
        content: `"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MousePointer2, MousePointerClick } from "lucide-react";

function CursorCard() {
  const [cursor1X, setCursor1X] = useState(50);
  const [cursor1Y, setCursor1Y] = useState(100);
  const [cursor2X, setCursor2X] = useState(150);
  const [cursor2Y, setCursor2Y] = useState(80);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor1X(Math.random() * 200 + 50);
      setCursor1Y(Math.random() * 150 + 50);
      setCursor2X(Math.random() * 200 + 50);
      setCursor2Y(Math.random() * 150 + 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cursorVariants = {
    idle: {
      scale: 1,
      opacity: 0.7,
    },
    hover: {
      scale: 1.2,
      opacity: 1,
    },
  };

  const nameTagVariants = {
    idle: {
      opacity: 0,
      y: -10,
    },
    hover: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div
      className="bg-card h-[26rem] w-[20rem] rounded-lg shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] relative overflow-hidden border border-border"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: \`
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          \`,
          backgroundSize: "14px 14px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: \`
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          \`,
          backgroundSize: "14px 14px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div className="relative p-6 flex flex-col h-full ">
        <h1 className="text-base  font-semibold text-foreground dark:text-neutral-100 mb-4 flex items-center gap-1">
          <MousePointerClick size={17} />
          Interactive Demo
        </h1>
        <div>
          <h2 className=" text-sm text-foreground dark:text-neutral-100  mb-1">
            Mouse tracking simulation
          </h2>
          <p className="text-sm text-muted-foreground dark:text-neutral-400">
            Dynamic cursor movement and interactions
          </p>
        </div>
        <div className="flex-1 mt-2 relative">
          <motion.div
            className="absolute"
            style={{
              x: cursor1X,
              y: cursor1Y,
            }}
            variants={cursorVariants}
            animate={isHovering ? "hover" : "idle"}
          >
            <MousePointer2
              strokeWidth={1}
              size={40}
              className="text-muted-foreground dark:text-neutral-500"
            />
            <motion.div
              className="absolute -top-8 left-6 bg-muted dark:bg-neutral-800 text-foreground dark:text-neutral-100 px-2 py-1 rounded-lg text-xs whitespace-nowrap border border-border dark:border-neutral-700"
              variants={nameTagVariants}
              animate={isHovering ? "hover" : "idle"}
            >
              User A
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute "
            style={{
              x: cursor2X,
              y: cursor2Y,
            }}
            variants={cursorVariants}
            animate={isHovering ? "hover" : "idle"}
            transition={{ delay: 0.1 }}
          >
            <MousePointer2
              strokeWidth={1}
              size={24}
              className="text-muted-foreground dark:text-neutral-500"
            />
            <motion.div
              className="absolute -top-8 left-6 bg-muted dark:bg-neutral-800 text-foreground dark:text-neutral-100 px-2 py-1 rounded-lg text-xs whitespace-nowrap border border-border dark:border-neutral-700"
              variants={nameTagVariants}
              animate={isHovering ? "hover" : "idle"}
            >
              User B
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CursorCard;`
      }
    ],
    dependencies: ["motion", "lucide-react"],
    devDependencies: ["@types/react"],
    registryDependencies: []
  };

  return NextResponse.json(component);
} 
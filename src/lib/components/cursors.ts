import { ComponentData } from '../types';

export const cursorsComponent: ComponentData = {
  name: "Cursors",
  description: "An interactive cursor tracking demo with smooth mouse following animations.",
  preview: () => import("@/src/registry/default/ui/Cursors"),
  demo: `"use client";
import CursorCard from "@/src/components/ui/Cards/Cursors";

export function CursorsDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <CursorCard />
    </div>
  );
}`,
  code: `"use client";
import { MousePointer2, MousePointerClick } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, easeInOut } from "motion/react";
import { cn } from "@/src/lib/utils";

function CursorCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursor1TargetX = useMotionValue(50);
  const cursor1TargetY = useMotionValue(100);
  const cursor2TargetX = useMotionValue(180);
  const cursor2TargetY = useMotionValue(190);

  const cursor1X = useSpring(cursor1TargetX, {
    stiffness: 50,
    damping: 25,
    mass: 0.5,
  });
  const cursor1Y = useSpring(cursor1TargetY, {
    stiffness: 50,
    damping: 25,
    mass: 0.5,
  });

  const cursor2X = useSpring(cursor2TargetX, {
    stiffness: 40,
    damping: 30,
    mass: 0.8,
  });
  const cursor2Y = useSpring(cursor2TargetY, {
    stiffness: 40,
    damping: 30,
    mass: 0.8,
  });

  const updateCursorPositions = (mouseXVal: number, mouseYVal: number) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const contentWidth = containerWidth - 48;
    const headerHeight = 100;
    const contentAreaHeight = containerHeight - headerHeight - 48;
    const cursorSize = 24;
    const minX = 10;
    const maxX = contentWidth - cursorSize - 10;
    const minY = 10;
    const maxY = contentAreaHeight - cursorSize - 10;

    const isRight = mouseXVal > containerWidth * 0.5;
    const isBottom = mouseYVal > containerHeight * 0.5;
    let cursor1TargetXVal, cursor1TargetYVal;
    if (!isRight && !isBottom) {
      cursor1TargetXVal = minX;
      cursor1TargetYVal = maxY - 20;
    } else if (isRight && !isBottom) {
      cursor1TargetXVal = maxX - 20;
      cursor1TargetYVal = maxY - 10;
    } else if (!isRight && isBottom) {
      cursor1TargetXVal = minX + 10;
      cursor1TargetYVal = contentAreaHeight * 0.3;
    } else {
      cursor1TargetXVal = contentWidth * 0.3;
      cursor1TargetYVal = contentAreaHeight * 0.3;
    }

    let cursor2TargetXVal, cursor2TargetYVal;
    if (!isRight && !isBottom) {
      cursor2TargetXVal = contentWidth * 0.5;
      cursor2TargetYVal = contentAreaHeight * 0.4;
    } else if (isRight && !isBottom) {
      cursor2TargetXVal = contentWidth * 0.25;
      cursor2TargetYVal = contentAreaHeight * 0.4;
    } else if (!isRight && isBottom) {
      cursor2TargetXVal = contentWidth * 0.5;
      cursor2TargetYVal = maxY - 10;
    } else {
      cursor2TargetXVal = contentWidth * 0.25;
      cursor2TargetYVal = maxY - 15;
    }

    cursor1TargetX.set(Math.max(minX, Math.min(maxX, cursor1TargetXVal)));
    cursor1TargetY.set(Math.max(minY, Math.min(maxY, cursor1TargetYVal)));
    cursor2TargetX.set(Math.max(minX, Math.min(maxX, cursor2TargetXVal)));
    cursor2TargetY.set(Math.max(minY, Math.min(maxY, cursor2TargetYVal)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);

      if (isHovering) {
        updateCursorPositions(x, y);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (containerRef.current) {
      const x = mouseX.get();
      const y = mouseY.get();
      updateCursorPositions(x, y);
    }
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    cursor1TargetX.set(50);
    cursor1TargetY.set(100);
    cursor2TargetX.set(180);
    cursor2TargetY.set(190);
  };

  const cursorVariants = {
    idle: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [0, -2, 2, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: easeInOut,
        },
        scale: {
          duration: 0.2,
        },
      },
    },
  };

  const nameTagVariants = {
    idle: {
      opacity: 0.8,
      y: 0,
    },
    hover: {
      opacity: 1,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "h-[26rem] w-[20rem] rounded-lg relative overflow-hidden",
        "bg-background dark:bg-neutral-900",
        "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
        "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
        "border border-border"
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: \`
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          \`,
          backgroundSize: "14px 14px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
        }}
      />
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
        {" "}
        <h1 className="text-base  font-semibold text-foreground dark:text-neutral-100 mb-4 flex items-center gap-1">
          {" "}
          <MousePointerClick size={17} />
          Interactive Demo
        </h1>{" "}
        <div>
          <h2 className=" text-sm text-foreground dark:text-neutral-100  mb-1">
            Mouse tracking simulation
          </h2>
          <p className="text-sm text-muted-foreground dark:text-neutral-400">
            Dynamic cursor movement and interactions
          </p>
        </div>{" "}
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
              User A{" "}
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
            />{" "}
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

export default CursorCard;`,
  cli: "npm i motion lucide-react",
  manualSteps: [
    {
      title: "Install dependencies",
      code: "npm i motion lucide-react",
      language: "bash"
    },
    {
      title: "Copy the source code",
      code: `"use client";
import { MousePointer2, MousePointerClick } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, easeInOut } from "motion/react";
import { cn } from "@/src/lib/utils";

function CursorCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursor1TargetX = useMotionValue(50);
  const cursor1TargetY = useMotionValue(100);
  const cursor2TargetX = useMotionValue(180);
  const cursor2TargetY = useMotionValue(190);

  const cursor1X = useSpring(cursor1TargetX, {
    stiffness: 50,
    damping: 25,
    mass: 0.5,
  });
  const cursor1Y = useSpring(cursor1TargetY, {
    stiffness: 50,
    damping: 25,
    mass: 0.5,
  });

  const cursor2X = useSpring(cursor2TargetX, {
    stiffness: 40,
    damping: 30,
    mass: 0.8,
  });
  const cursor2Y = useSpring(cursor2TargetY, {
    stiffness: 40,
    damping: 30,
    mass: 0.8,
  });

  const updateCursorPositions = (mouseXVal: number, mouseYVal: number) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const contentWidth = containerWidth - 48;
    const headerHeight = 100;
    const contentAreaHeight = containerHeight - headerHeight - 48;
    const cursorSize = 24;
    const minX = 10;
    const maxX = contentWidth - cursorSize - 10;
    const minY = 10;
    const maxY = contentAreaHeight - cursorSize - 10;

    const isRight = mouseXVal > containerWidth * 0.5;
    const isBottom = mouseYVal > containerHeight * 0.5;
    let cursor1TargetXVal, cursor1TargetYVal;
    if (!isRight && !isBottom) {
      cursor1TargetXVal = minX;
      cursor1TargetYVal = maxY - 20;
    } else if (isRight && !isBottom) {
      cursor1TargetXVal = maxX - 20;
      cursor1TargetYVal = maxY - 10;
    } else if (!isRight && isBottom) {
      cursor1TargetXVal = minX + 10;
      cursor1TargetYVal = contentAreaHeight * 0.3;
    } else {
      cursor1TargetXVal = contentWidth * 0.3;
      cursor1TargetYVal = contentAreaHeight * 0.3;
    }

    let cursor2TargetXVal, cursor2TargetYVal;
    if (!isRight && !isBottom) {
      cursor2TargetXVal = contentWidth * 0.5;
      cursor2TargetYVal = contentAreaHeight * 0.4;
    } else if (isRight && !isBottom) {
      cursor2TargetXVal = contentWidth * 0.25;
      cursor2TargetYVal = contentAreaHeight * 0.4;
    } else if (!isRight && isBottom) {
      cursor2TargetXVal = contentWidth * 0.5;
      cursor2TargetYVal = maxY - 10;
    } else {
      cursor2TargetXVal = contentWidth * 0.25;
      cursor2TargetYVal = maxY - 15;
    }

    cursor1TargetX.set(Math.max(minX, Math.min(maxX, cursor1TargetXVal)));
    cursor1TargetY.set(Math.max(minY, Math.min(maxY, cursor1TargetYVal)));
    cursor2TargetX.set(Math.max(minX, Math.min(maxX, cursor2TargetXVal)));
    cursor2TargetY.set(Math.max(minY, Math.min(maxY, cursor2TargetYVal)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);

      if (isHovering) {
        updateCursorPositions(x, y);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (containerRef.current) {
      const x = mouseX.get();
      const y = mouseY.get();
      updateCursorPositions(x, y);
    }
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    cursor1TargetX.set(50);
    cursor1TargetY.set(100);
    cursor2TargetX.set(180);
    cursor2TargetY.set(190);
  };

  const cursorVariants = {
    idle: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [0, -2, 2, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: easeInOut,
        },
        scale: {
          duration: 0.2,
        },
      },
    },
  };

  const nameTagVariants = {
    idle: {
      opacity: 0.8,
      y: 0,
    },
    hover: {
      opacity: 1,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "h-[26rem] w-[20rem] rounded-lg relative overflow-hidden",
        "bg-background dark:bg-neutral-900",
        "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
        "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
        "border border-border"
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: \`
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          \`,
          backgroundSize: "14px 14px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 25%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
        }}
      />
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
        {" "}
        <h1 className="text-base  font-semibold text-foreground dark:text-neutral-100 mb-4 flex items-center gap-1">
          {" "}
          <MousePointerClick size={17} />
          Interactive Demo
        </h1>{" "}
        <div>
          <h2 className=" text-sm text-foreground dark:text-neutral-100  mb-1">
            Mouse tracking simulation
          </h2>
          <p className="text-sm text-muted-foreground dark:text-neutral-400">
            Dynamic cursor movement and interactions
          </p>
        </div>{" "}
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
              User A{" "}
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
            />{" "}
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

export default CursorCard;`,
      language: "tsx",
      filename: "components/ui/Cards/Cursors.tsx"
    }
  ]
}; 
import { ComponentData } from '../types';

export const planComponent: ComponentData = {
  name: "Plan Card",
  description: "A pricing plan card with hover animations and feature reveal effects.",
  preview: () => import("@/components/ui/Cards/Plan"),
  demo: `"use client";
import Plan from "@/components/ui/Plan";

export function PlanDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Plan />
    </div>
  );
}`,
  code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

function Plan() {
  const [isHovered, setIsHovered] = useState(false);
  
  const initialItems = isHovered
    ? { y: -35, scale: 0.9, opacity: 0.5 }
    : {
        y: 0,
        scale: 1,
        opacity: 1,
      };
      
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-neutral-900 h-[23rem] w-[20rem] rounded-lg shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] relative overflow-hidden flex flex-col items-center justify-between gap-5"
    >
      <motion.div
        animate={{ gap: isHovered ? "-1rem" : "1rem" }}
        className="h-[11rem] w-[11rem] rounded-xl bg-neutral-800 mt-10 flex flex-col justify-center items-center"
      >
        <motion.p
          animate={initialItems}
          className="text-neutral-300 font-semibold"
        >
          Premium Plan
        </motion.p>
        <motion.h1 animate={initialItems} className="text-6xl font-light">
          $99
        </motion.h1>
        <motion.div
          animate={initialItems}
          className="bg-neutral-700 text-neutral-300 px-3 rounded-xl py-1 text-sm"
        >
          /month
        </motion.div>
        <motion.div
          className="absolute inset-0 flex flex-col gap-1 -translate-y-5 justify-center items-center z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 200,
          }}
          style={{ display: isHovered ? "flex" : "none" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-[#292929] text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Full Access
          </motion.div>
          <motion.div
            className="bg-[#292929] text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Priority Support
          </motion.div>
          <motion.div
            className="bg-[#292929] text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Advanced Features
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center justify-center text-center pb-5 px-5 gap-2">
        <h1 className="text-xl font-bold">Professional</h1>
        <p className="text-neutral-400">
          Complete solution with advanced features and premium support
        </p>
      </div>
    </div>
  );
}

export default Plan;`,
  cli: "npm i motion",
  manualSteps: [
    {
      title: "Install dependencies",
      code: "npm i motion",
      language: "bash"
    },
    {
      title: "Copy the source code",
      code: `"use client";
import { useState } from "react";
import { motion } from "motion/react";

function Plan() {
  const [isHovered, setIsHovered] = useState(false);
  
  const initialItems = isHovered
    ? { y: -35, scale: 0.9, opacity: 0.5 }
    : {
        y: 0,
        scale: 1,
        opacity: 1,
      };
      
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-neutral-900 h-[23rem] w-[20rem] rounded-lg shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] relative overflow-hidden flex flex-col items-center justify-between gap-5"
    >
      <motion.div
        animate={{ gap: isHovered ? "-1rem" : "1rem" }}
        className="h-[11rem] w-[11rem] rounded-xl bg-neutral-800 mt-10 flex flex-col justify-center items-center"
      >
        <motion.p
          animate={initialItems}
          className="text-neutral-300 font-semibold"
        >
          Premium Plan
        </motion.p>
        <motion.h1 animate={initialItems} className="text-6xl font-light">
          $99
        </motion.h1>
        <motion.div
          animate={initialItems}
          className="bg-neutral-700 text-neutral-300 px-3 rounded-xl py-1 text-sm"
        >
          /month
        </motion.div>
        <motion.div
          className="absolute inset-0 flex flex-col gap-1 -translate-y-5 justify-center items-center z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 200,
          }}
          style={{ display: isHovered ? "flex" : "none" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-[#292929] text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Full Access
          </motion.div>
          <motion.div
            className="bg-[#292929] text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Priority Support
          </motion.div>
          <motion.div
            className="bg-[#292929] text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Advanced Features
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center justify-center text-center pb-5 px-5 gap-2">
        <h1 className="text-xl font-bold">Professional</h1>
        <p className="text-neutral-400">
          Complete solution with advanced features and premium support
        </p>
      </div>
    </div>
  );
}

export default Plan;`,
      language: "tsx",
      filename: "components/ui/Plan.tsx"
    }
  ]
}; 
import { ComponentData } from '../types';

export const featureListComponent: ComponentData = {
  name: "Feature List",
  description: "An interactive feature showcase with smooth animations and card transitions.",
  preview: () => import("@/src/registry/default/ui/FeatureList"),
  demo: `"use client";
import FeatureList from "@/src/components/ui/FeatureList";

export function FeatureListDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <FeatureList />
    </div>
  );
}`,
  code: `"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { BarChart3, Users, Calendar, Users2, Activity } from "lucide-react";

const Card = ({
  bgColor,
  index,
  isHovered,
}: {
  bgColor: string;
  index: number;
  isHovered: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const firstCardAnimation = isHovered
    ? {
        x: 15,
        scale: 0.95,
        opacity: 0.6,
      }
    : {
        x: 0,
        scale: 1,
        opacity: 1,
      };

  const lastCardAnimation = isHovered
    ? {
        x: 0,
        scale: 1,
        opacity: 1,
      }
    : {
        x: 15,
        scale: 0.95,
        opacity: 0.6,
      };
  
  const cardContent = [
    {
      title: "Feature Alpha",
      description: "Primary functionality with core benefits",
      badge: "New",
      metric: "98%",
      metricLabel: "Success",
      icon: BarChart3,
    },
    {
      title: "Feature Beta",
      description: "Secondary feature for enhanced experience",
      badge: "Active",
      metric: "2.5k",
      metricLabel: "Active",
      icon: Users,
    },
    {
      title: "Feature Gamma",
      description: "Advanced functionality for power users",
      badge: "Updated",
      metric: "24",
      metricLabel: "Items",
      icon: Calendar,
    },
    {
      title: "Feature Delta",
      description: "Collaborative tools for team productivity",
      badge: "Popular",
      metric: "92%",
      metricLabel: "Rating",
      icon: Users2,
    },
  ];
  
  const content = cardContent[index];
  const IconComponent = content.icon;

  return (
    <motion.div
      ref={ref}
      className={\`w-full h-1/2 \${bgColor} rounded-l-xl pl-4 py-2 flex flex-col justify-between\`}
      animate={
        index === 0 ? firstCardAnimation : index === 3 ? lastCardAnimation : {}
      }
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <IconComponent size={20} className="text-white/80" />
            <h3 className="text-white font-semibold">{content.title}</h3>
          </div>
          <p className="text-white/70 text-sm">{content.description}</p>
        </div>
        <div className="rounded-l-lg p-3 min-w-[75px]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <div className="text-white font-bold text-lg">
                {content.metric}
              </div>
              <div className="text-white/60 text-xs">{content.metricLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function FeatureList() {
  const cardColors = [
    "bg-neutral-800",
    "bg-neutral-800",
    "bg-neutral-800",
    "bg-neutral-800",
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-neutral-900 h-[23rem] w-[42rem] rounded-lg shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] overflow-hidden"
    >
      <motion.div
        initial={{
          y: "5%",
        }}
        animate={isHovered ? { y: "-30%" } : { y: "5%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-[92%] pl-8 gap-3 flex flex-col"
      >
        {cardColors.map((color, index) => (
          <Card
            key={index}
            bgColor={color}
            index={index}
            isHovered={isHovered}
          />
        ))}
      </motion.div>
      <div className="h-[25%] absolute bottom-0 m w-full bg-neutral-900 p-1">
        <div className="h-full w-full bg-neutral-800 rounded-md flex flex-col justify-center items-center mx-auto">
          <div className="flex gap-2 font-semibold">
            <Activity size={20} /> Sample Data
          </div>
          <p className="text-sm text-neutral-400">
            Interactive component showcase
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;`,
  cli: "npx shadcn@latest add https://qi.kanakk.me/r/feature-list.json",
  manualSteps: [
    {
      title: "Install dependencies",
      code: "npm i motion lucide-react",
      language: "bash"
    },
    {
      title: "Copy the source code",
      code: `"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { BarChart3, Users, Calendar, Users2, Activity } from "lucide-react";

const Card = ({
  bgColor,
  index,
  isHovered,
}: {
  bgColor: string;
  index: number;
  isHovered: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const firstCardAnimation = isHovered
    ? {
        x: 15,
        scale: 0.95,
        opacity: 0.6,
      }
    : {
        x: 0,
        scale: 1,
        opacity: 1,
      };

  const lastCardAnimation = isHovered
    ? {
        x: 0,
        scale: 1,
        opacity: 1,
      }
    : {
        x: 15,
        scale: 0.95,
        opacity: 0.6,
      };
  
  const cardContent = [
    {
      title: "Feature Alpha",
      description: "Primary functionality with core benefits",
      badge: "New",
      metric: "98%",
      metricLabel: "Success",
      icon: BarChart3,
    },
    {
      title: "Feature Beta",
      description: "Secondary feature for enhanced experience",
      badge: "Active",
      metric: "2.5k",
      metricLabel: "Active",
      icon: Users,
    },
    {
      title: "Feature Gamma",
      description: "Advanced functionality for power users",
      badge: "Updated",
      metric: "24",
      metricLabel: "Items",
      icon: Calendar,
    },
    {
      title: "Feature Delta",
      description: "Collaborative tools for team productivity",
      badge: "Popular",
      metric: "92%",
      metricLabel: "Rating",
      icon: Users2,
    },
  ];
  
  const content = cardContent[index];
  const IconComponent = content.icon;

  return (
    <motion.div
      ref={ref}
      className={\`w-full h-1/2 \${bgColor} rounded-l-xl pl-4 py-2 flex flex-col justify-between\`}
      animate={
        index === 0 ? firstCardAnimation : index === 3 ? lastCardAnimation : {}
      }
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <IconComponent size={20} className="text-white/80" />
            <h3 className="text-white font-semibold">{content.title}</h3>
          </div>
          <p className="text-white/70 text-sm">{content.description}</p>
        </div>
        <div className="rounded-l-lg p-3 min-w-[75px]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <div className="text-white font-bold text-lg">
                {content.metric}
              </div>
              <div className="text-white/60 text-xs">{content.metricLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function FeatureList() {
  const cardColors = [
    "bg-neutral-800",
    "bg-neutral-800",
    "bg-neutral-800",
    "bg-neutral-800",
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-neutral-900 h-[23rem] w-[42rem] rounded-lg shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] overflow-hidden"
    >
      <motion.div
        initial={{
          y: "5%",
        }}
        animate={isHovered ? { y: "-30%" } : { y: "5%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-[92%] pl-8 gap-3 flex flex-col"
      >
        {cardColors.map((color, index) => (
          <Card
            key={index}
            bgColor={color}
            index={index}
            isHovered={isHovered}
          />
        ))}
      </motion.div>
      <div className="h-[25%] absolute bottom-0 m w-full bg-neutral-900 p-1">
        <div className="h-full w-full bg-neutral-800 rounded-md flex flex-col justify-center items-center mx-auto">
          <div className="flex gap-2 font-semibold">
            <Activity size={20} /> Sample Data
          </div>
          <p className="text-sm text-neutral-400">
            Interactive component showcase
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;`,
      language: "tsx",
      filename: "components/ui/FeatureList.tsx"
    }
  ]
}; 
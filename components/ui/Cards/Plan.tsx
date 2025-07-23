"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

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
      className={cn(
        "h-[23rem] w-[20rem] rounded-lg relative overflow-hidden flex flex-col items-center justify-between gap-5",
        "bg-background dark:bg-neutral-900",
        "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
        "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
        "border border-border"
      )}
    >
      <motion.div
        animate={{ gap: isHovered ? "-1rem" : "1rem" }}
        className="h-[11rem] w-[11rem] rounded-xl bg-muted dark:bg-neutral-800 mt-10 flex flex-col justify-center items-center"
      >
        {" "}
        <motion.p
          animate={initialItems}
          className="text-muted-foreground dark:text-neutral-300 font-semibold"
        >
          Premium Plan{" "}
        </motion.p>
        <motion.h1 animate={initialItems} className="text-6xl font-light text-foreground dark:text-white">
          $99{" "}
        </motion.h1>
        <motion.div
          animate={initialItems}
          className={cn(
            "text-muted-foreground dark:text-neutral-300 px-3 rounded-xl py-1 text-sm",
            isHovered ? "bg-neutral-800" : "bg-accent dark:bg-neutral-700"
          )}
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
          {" "}
          <motion.div
            className="bg-muted/80 dark:bg-[#292929] text-muted-foreground dark:text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Full Access
          </motion.div>
          <motion.div
            className="bg-muted/80 dark:bg-[#292929] text-muted-foreground dark:text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Priority Support
          </motion.div>
          <motion.div
            className="bg-muted/80 dark:bg-[#292929] text-muted-foreground dark:text-neutral-300 px-3 rounded-xl py-1 text-sm"
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Advanced Features
          </motion.div>
        </motion.div>
      </motion.div>{" "}
      <div className="flex flex-col items-center justify-center text-center pb-5 px-5 gap-2 ">
        <h1 className="text-xl font-bold text-foreground dark:text-white">Professional</h1>
        <p className=" text-muted-foreground dark:text-neutral-400 ">
          Complete solution with advanced features and premium support
        </p>
      </div>
    </div>
  );
}

export default Plan;

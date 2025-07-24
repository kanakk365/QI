import { ComponentData } from "../types";

export const listComponent: ComponentData = {
  name: "List",
  description:
    "A beautiful animated card component with hover effects and modern styling.",
  preview: () => import("@/src/registry/default/ui/List"),
  demo: `"use client";
import List from "@/src/components/ui/List";

export function ListDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <List 
        title="Custom Title" 
        description="This is a custom description for the card component."
      />
    </div>
  );
}`,
  code: `"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Icon24Hours, Icon360, IconMessage } from "@tabler/icons-react";
import { X } from "lucide-react";

interface ListProps {
  title?: string;
  description?: string;
}

function List({ title = "UI Component Library", description = "Beautifully designed components with smooth animations and modern styling for your next project." }: ListProps) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "h-[26rem] w-[20rem] rounded-lg bg-card",
            "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
            "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
            "p-4 flex flex-col border border-border"
          )}
        >
          <h1 className="text-sm font-semibold text-foreground">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
          <div className="flex items-center w-full mx-auto gap-4 ">
            <button
              className={cn(
                "flex items-center justify-center text-xs mx-auto gap-1 mt-4 cursor-pointer bg-muted text-foreground",
                "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
                "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
                "px-2 py-1 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              )}
            >
              Components
              <X size={10} className="text-muted-foreground" />
            </button>
          </div>
          <div className="relative flex-1 bg-muted border border-border border-dashed rounded-lg mt-4">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute divide-y divide-border inset-0 h-full bg-card rounded-lg border border-border flex flex-col justify-evenly"
            >
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-muted shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-border">
                  <IconMessage className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-foreground">
                    Interactive Elements
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    Responsive user interface components
                  </p>
                </div>
              </div>
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-muted shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-border">
                  <Icon24Hours className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-foreground">
                    Performance Optimized
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    Fast loading and smooth animations
                  </p>
                </div>
              </div>
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-muted shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-border">
                  <Icon360 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-foreground">
                    Customizable Design
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    Flexible theming and styling options
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default List;

// Export the props type for use in other components
export type { ListProps };`,
  cli: "npm i motion @tabler/icons-react lucide-react",
  manualSteps: [
    {
      title: "Install dependencies",
      code: "npm i motion @tabler/icons-react lucide-react clsx tailwind-merge",
      language: "bash",
    },
    {
      title: "Add util file",
      code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`,
      language: "tsx",
      filename: "lib/utils.ts",
    },
    {
      title: "Copy the source code",
      code: `"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Icon24Hours, Icon360, IconMessage } from "@tabler/icons-react";
import { X } from "lucide-react";

interface ListProps {
  title?: string;
  description?: string;
}

function List({ title = "UI Component Library", description = "Beautifully designed components with smooth animations and modern styling for your next project." }: ListProps) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "h-[26rem] w-[20rem] rounded-lg bg-card",
            "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
            "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
            "p-4 flex flex-col border border-border"
          )}
        >
          <h1 className="text-sm font-semibold text-foreground">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
          <div className="flex items-center w-full mx-auto gap-4 ">
            <button
              className={cn(
                "flex items-center justify-center text-xs mx-auto gap-1 mt-4 cursor-pointer bg-muted text-foreground",
                "shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)]",
                "dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)]",
                "px-2 py-1 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              )}
            >
              Components
              <X size={10} className="text-muted-foreground" />
            </button>
          </div>
          <div className="relative flex-1 bg-muted border border-border border-dashed rounded-lg mt-4">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute divide-y divide-border inset-0 h-full bg-card rounded-lg border border-border flex flex-col justify-evenly"
            >
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-muted shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-border">
                  <IconMessage className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-foreground">
                    Interactive Elements
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    Responsive user interface components
                  </p>
                </div>
              </div>
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-muted shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-border">
                  <Icon24Hours className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-foreground">
                    Performance Optimized
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    Fast loading and smooth animations
                  </p>
                </div>
              </div>
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-muted shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_-8px_16px_rgba(0,0,0,0.05),0_-16px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_-2px_4px_rgba(255,255,255,0.1),0_-8px_16px_rgba(255,255,255,0.05),0_-16px_32px_rgba(255,255,255,0.02)] rounded-md flex items-center justify-center border border-border">
                  <Icon360 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-foreground">
                    Customizable Design
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    Flexible theming and styling options
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default List;

// Export the props type for use in other components
export type { ListProps };`,
      language: "tsx",
      filename: "components/ui/List.tsx",
    },
  ],
};

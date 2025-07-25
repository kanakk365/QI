import { ComponentData } from "../types";

export const glassNavbarComponent: ComponentData = {
  name: "Glass Navbar",
  description: "A modern glassmorphism navbar with liquid glass animation effects and smooth scroll interactions.",
  preview: () => import("@/src/registry/default/ui/GlassNavbar"),
  demo: `"use client";
import GlassNavbar from "@/src/registry/default/ui/GlassNavbar";

export function GlassNavbarDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GlassNavbar />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Site</h1>
        <p className="text-gray-300 mb-8">Experience the beautiful liquid glass animation in the navbar above.</p>
      </div>
    </div>
  );
}`,
  code: `"use client";
import { useState, useEffect } from "react";
import type React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { LiquidGlassBackground } from "./liquidGlassBackground";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add throttling for smoother performance
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll);
    return () => window.removeEventListener("scroll", smoothScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const Logo = () => (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20">
      <span className="font-medium text-white">QI</span>
    </Link>
  );

  // Smooth scroll handler for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const NavLinks = () => (
    <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-300 font-medium hover:text-zinc-100 transition duration-300">
      <Link
        href="/#about"
        className="text-neutral-300 relative px-4 py-2 hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
        onClick={(e) => handleSmoothScroll(e, "#about")}
      >
        <span className="relative z-20">About</span>
      </Link>
      <Link
        href="/#projects"
        className="text-neutral-300 relative px-4 py-2 hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
        onClick={(e) => handleSmoothScroll(e, "#projects")}
      >
        <span className="relative z-20">Projects</span>
      </Link>
      <Link
        href="/#contact"
        className="text-neutral-300 relative px-4 py-2 hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
        onClick={(e) => handleSmoothScroll(e, "#contact")}
      >
        <span className="relative z-20">Contact</span>
      </Link>
    </div>
  );

  const ActionButtons = () => (
    <div className="flex items-center gap-4">
      <button
        className="px-3 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block hover:scale-105 hover:shadow-[0_0_32px_rgba(34,_42,_53,_0.12),_0_2px_4px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(34,_42,_53,_0.08),_0_0_8px_rgba(34,_42,_53,_0.16),_0_24px_80px_rgba(47,_48,_55,_0.1),_0_2px_0_rgba(255,_255,_255,_0.15)_inset] hover:bg-gray-100"
        data-cal-namespace="chat-with-QI"
        data-cal-link="QI/demo"
        data-cal-config='{"layout":"month_view"}'
      >
        Book a call
      </button>
    </div>
  );

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle mobile menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`tabler-icon text-white transition-transform duration-200 \${isMobileMenuOpen ? "rotate-90" : ""}\`}
      >
        {isMobileMenuOpen ? (
          <>
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </>
        ) : (
          <>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </>
        )}
      </svg>
    </button>
  );

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        y: isMobileMenuOpen ? 0 : -20,
        display: isMobileMenuOpen ? "block" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-lg border border-gray-800 overflow-hidden mobile-menu-container"
      style={{ position: "relative" }}
    >
      {/* Liquid Glass Background for Mobile Menu */}
      <LiquidGlassBackground width={400} height={300} className="rounded-2xl" />

      <div className="flex flex-col p-4 space-y-4 relative z-10">
        <Link
          href="/#about"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#about");
            setIsMobileMenuOpen(false);
          }}
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#projects");
            setIsMobileMenuOpen(false);
          }}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#contact");
            setIsMobileMenuOpen(false);
          }}
        >
          Contact
        </Link>
        <div className="border-t border-gray-700/50 pt-4 space-y-3">
          <button
            className="w-full px-4 py-3 rounded-lg bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all duration-200 shadow-md"
            data-cal-namespace="chat-with-QI"
            data-cal-link="QI/demo"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a call
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="mt-2 w-full fixed top-0 inset-x-0 z-50">
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Navbar */}
      <motion.div
        className="hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full overflow-hidden"
        style={{
          minWidth: "800px",
          willChange: "auto",
        }}
        animate={{
          boxShadow: isScrolled
            ? "rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(0, 0, 0, 0.2) 0px 4px 16px, rgba(34, 42, 53, 0.25) 0px 2px 8px, rgba(47, 48, 55, 0.2) 0px 32px 120px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(34, 42, 53, 0.7) 0px 0px 0px 1px"
            : "none",
          transform: isScrolled ? "translateY(20px)" : "none",
          width: isScrolled ? "40%" : "100%",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Liquid Glass Background for Desktop */}
        <LiquidGlassBackground width={800} height={80} className="rounded-full" />

        <div className="relative z-10 flex items-center justify-between w-full">
          <Logo />
          <NavLinks />
          <ActionButtons />
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50 overflow-hidden"
        style={{
          willChange: "auto",
          borderRadius: "2rem",
        }}
        animate={{
          boxShadow: isScrolled
            ? "rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(0, 0, 0, 0.25) 0px 4px 16px, rgba(34, 42, 53, 0.3) 0px 2px 8px, rgba(47, 48, 55, 0.25) 0px 24px 80px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(34, 42, 53, 0.6) 0px 0px 0px 1px"
            : "none",
          width: isScrolled ? "90%" : "100%",
          paddingRight: isScrolled ? "12px" : "0px",
          paddingLeft: isScrolled ? "12px" : "0px",
          transform: isScrolled ? "translateY(20px)" : "none",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Liquid Glass Background for Mobile */}
        <LiquidGlassBackground width={400} height={80} className="rounded-2xl" />

        <div className="flex flex-row justify-between items-center w-full relative z-10">
          <Logo />
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </motion.div>
    </div>
  );
};

export default Navbar;`,
  manualSteps: [
    {
      title: "Create the GlassNavbar component",
      language: "tsx",
      filename: "src/registry/default/ui/GlassNavbar.tsx",
      code: `"use client";
import { useState, useEffect } from "react";
import type React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { LiquidGlassBackground } from "./liquidGlassBackground";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add throttling for smoother performance
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll);
    return () => window.removeEventListener("scroll", smoothScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const Logo = () => (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20">
      <span className="font-medium text-white">QI</span>
    </Link>
  );

  // Smooth scroll handler for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const NavLinks = () => (
    <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-300 font-medium hover:text-zinc-100 transition duration-300">
      <Link
        href="/#about"
        className="text-neutral-300 relative px-4 py-2 hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
        onClick={(e) => handleSmoothScroll(e, "#about")}
      >
        <span className="relative z-20">About</span>
      </Link>
      <Link
        href="/#projects"
        className="text-neutral-300 relative px-4 py-2 hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
        onClick={(e) => handleSmoothScroll(e, "#projects")}
      >
        <span className="relative z-20">Projects</span>
      </Link>
      <Link
        href="/#contact"
        className="text-neutral-300 relative px-4 py-2 hover:text-neutral-100 transition-all duration-300 ease-out hover:scale-105"
        onClick={(e) => handleSmoothScroll(e, "#contact")}
      >
        <span className="relative z-20">Contact</span>
      </Link>
    </div>
  );

  const ActionButtons = () => (
    <div className="flex items-center gap-4">
      <button
        className="px-3 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-out text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block hover:scale-105 hover:shadow-[0_0_32px_rgba(34,_42,_53,_0.12),_0_2px_4px_rgba(0,_0,_0,_0.1),_0_0_0_1px_rgba(34,_42,_53,_0.08),_0_0_8px_rgba(34,_42,_53,_0.16),_0_24px_80px_rgba(47,_48,_55,_0.1),_0_2px_0_rgba(255,_255,_255,_0.15)_inset] hover:bg-gray-100"
        data-cal-namespace="chat-with-QI"
        data-cal-link="QI/demo"
        data-cal-config='{"layout":"month_view"}'
      >
        Book a call
      </button>
    </div>
  );

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle mobile menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`tabler-icon text-white transition-transform duration-200 \${isMobileMenuOpen ? "rotate-90" : ""}\`}
      >
        {isMobileMenuOpen ? (
          <>
            <path d="M18 6L6 18"></path>
            <path d="M6 6l12 12"></path>
          </>
        ) : (
          <>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </>
        )}
      </svg>
    </button>
  );

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        y: isMobileMenuOpen ? 0 : -20,
        display: isMobileMenuOpen ? "block" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-lg border border-gray-800 overflow-hidden mobile-menu-container"
      style={{ position: "relative" }}
    >
      {/* Liquid Glass Background for Mobile Menu */}
      <LiquidGlassBackground width={400} height={300} className="rounded-2xl" />

      <div className="flex flex-col p-4 space-y-4 relative z-10">
        <Link
          href="/#about"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#about");
            setIsMobileMenuOpen(false);
          }}
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#projects");
            setIsMobileMenuOpen(false);
          }}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#contact");
            setIsMobileMenuOpen(false);
          }}
        >
          Contact
        </Link>
        <div className="border-t border-gray-700/50 pt-4 space-y-3">
          <button
            className="w-full px-4 py-3 rounded-lg bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all duration-200 shadow-md"
            data-cal-namespace="chat-with-QI"
            data-cal-link="QI/demo"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a call
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="mt-2 w-full fixed top-0 inset-x-0 z-50">
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Navbar */}
      <motion.div
        className="hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full overflow-hidden"
        style={{
          minWidth: "800px",
          willChange: "auto",
        }}
        animate={{
          boxShadow: isScrolled
            ? "rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(0, 0, 0, 0.2) 0px 4px 16px, rgba(34, 42, 53, 0.25) 0px 2px 8px, rgba(47, 48, 55, 0.2) 0px 32px 120px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(34, 42, 53, 0.7) 0px 0px 0px 1px"
            : "none",
          transform: isScrolled ? "translateY(20px)" : "none",
          width: isScrolled ? "40%" : "100%",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Liquid Glass Background for Desktop */}
        <LiquidGlassBackground width={800} height={80} className="rounded-full" />

        <div className="relative z-10 flex items-center justify-between w-full">
          <Logo />
          <NavLinks />
          <ActionButtons />
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50 overflow-hidden"
        style={{
          willChange: "auto",
          borderRadius: "2rem",
        }}
        animate={{
          boxShadow: isScrolled
            ? "rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(0, 0, 0, 0.25) 0px 4px 16px, rgba(34, 42, 53, 0.3) 0px 2px 8px, rgba(47, 48, 55, 0.25) 0px 24px 80px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(34, 42, 53, 0.6) 0px 0px 0px 1px"
            : "none",
          width: isScrolled ? "90%" : "100%",
          paddingRight: isScrolled ? "12px" : "0px",
          paddingLeft: isScrolled ? "12px" : "0px",
          transform: isScrolled ? "translateY(20px)" : "none",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Liquid Glass Background for Mobile */}
        <LiquidGlassBackground width={400} height={80} className="rounded-2xl" />

        <div className="flex flex-row justify-between items-center w-full relative z-10">
          <Logo />
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </motion.div>
    </div>
  );
};

export default Navbar;`
    },
    {
      title: "Create the LiquidGlassBackground component",
      language: "tsx",
      filename: "src/registry/default/ui/liquidGlassBackground.tsx",
      code: `"use client";
import { useEffect, useRef, useState } from "react";
import type React from "react";

interface LiquidGlassBackgroundProps {
  width: number;
  height: number;
  className?: string;
}

export const LiquidGlassBackground: React.FC<LiquidGlassBackgroundProps> = ({ width, height, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [filterId] = useState(() => \`liquid-glass-\${Math.random().toString(36).substr(2, 9)}\`);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseUsedRef = useRef(false);
  const animationRef = useRef<number | undefined>(undefined);

  // Utility functions - exact copies from original
  const smoothStep = (a: number, b: number, t: number): number => {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };

  const length = (x: number, y: number): number => {
    return Math.sqrt(x * x + y * y);
  };

  const roundedRectSDF = (x: number, y: number, width: number, height: number, radius: number): number => {
    const qx = Math.abs(x) - width + radius;
    const qy = Math.abs(y) - height + radius;
    return Math.min(Math.max(qx, qy), 0) + length(Math.max(qx, 0), Math.max(qy, 0)) - radius;
  };

  const texture = (x: number, y: number) => {
    return { type: "t", x, y };
  };

  // Enhanced fragment shader logic that works on all sides
  const fragment = (uv: { x: number; y: number }, mouse: { x: number; y: number }) => {
    const ix = uv.x - 0.5;
    const iy = uv.y - 0.5;

    // Adjust SDF parameters for better coverage on all sides
    const distanceToEdge = roundedRectSDF(ix, iy, 0.35, 0.25, 0.5);

    // Enhanced displacement calculation that works better on all edges
    const displacement = smoothStep(0.9, -0.1, distanceToEdge - 0.1);
    const scaled = smoothStep(0, 1, displacement);

    // Add subtle mouse influence for better interaction
    const mouseInfluence = 0.05;
    const mouseDx = (mouse.x - 0.5) * mouseInfluence;
    const mouseDy = (mouse.y - 0.5) * mouseInfluence;

    return texture(ix * scaled + 0.5 + mouseDx * displacement, iy * scaled + 0.5 + mouseDy * displacement);
  };

  const updateShader = () => {
    const canvas = canvasRef.current;
    const svg = svgRef.current;
    if (!canvas || !svg) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Mouse proxy to track usage - exact copy from original
    const mouseProxy = new Proxy(mouseRef.current, {
      get: (target, prop) => {
        mouseUsedRef.current = true;
        return target[prop as keyof typeof target];
      },
    });

    mouseUsedRef.current = false;

    const w = canvas.width;
    const h = canvas.height;
    const data = new Uint8ClampedArray(w * h * 4);
    let maxScale = 0;
    const rawValues: number[] = [];

    // Exact shader logic from original
    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);
      const pos = fragment({ x: x / w, y: y / h }, mouseProxy);
      const dx = pos.x * w - x;
      const dy = pos.y * h - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
    }

    maxScale *= 0.8;
    let index = 0;

    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5;
      const g = rawValues[index++] / maxScale + 0.5;
      data[i] = r * 255;
      data[i + 1] = g * 255;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }

    context.putImageData(new ImageData(data, w, h), 0, 0);

    // Update SVG filter
    const feImage = svg.querySelector(\`#\${filterId}_map\`) as SVGFEImageElement;
    const feDisplacementMap = svg.querySelector("feDisplacementMap") as SVGFEDisplacementMapElement;

    if (feImage && feDisplacementMap) {
      feImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL());
      feDisplacementMap.setAttribute("scale", (maxScale / 0.8).toString());
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const animate = () => {
      if (mouseUsedRef.current) {
        updateShader();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initial shader update
    updateShader();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
      updateShader();
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hidden canvas for displacement map */}
      <canvas ref={canvasRef} style={{ display: "none" }} width={width} height={height} />

      {/* SVG Filter - exact structure from original */}
      <svg ref={svgRef} width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
        <defs>
          <filter
            id={filterId}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            <feImage id={\`\${filterId}_map\`} width={width} height={height} />
            <feDisplacementMap in="SourceGraphic" in2={\`\${filterId}_map\`} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Background element with original liquid glass styling */}
      <div
        ref={containerRef}
        className={\`absolute inset-0 \${className}\`}
        style={{
          backdropFilter: \`url(#\${filterId}) blur(0.25px) brightness(1.5) saturate(1.1)\`,
          WebkitBackdropFilter: \`url(#\${filterId}) blur(0.25px) brightness(1.5) saturate(1.1)\`,
          boxShadow: \`
            0 4px 8px rgba(0, 0, 0, 0.25),
            0 -10px 25px inset rgba(0, 0, 0, 0.15),
            0 -1px 4px 1px inset rgba(255, 255, 255, 0.74)
          \`,
        }}
      />
    </>
  );
};`
    }
  ],
  cli: "npx shadcn@latest add https://qi.kanakk.me/r/glass-navbar.json",
}; 
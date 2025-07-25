"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { motion } from "motion/react"
import Link from "next/link"
import { LiquidGlassBackground } from "./liquidGlassBackground"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Add throttling for smoother performance
    let ticking = false
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", smoothScroll)
    return () => window.removeEventListener("scroll", smoothScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const Logo = () => (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20">
      <span className="font-medium text-white">QI</span>
    </Link>
  )

  // Smooth scroll handler for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith("#")) {
      e.preventDefault()
      const el = document.getElementById(hash.substring(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

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
  )

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
  )

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
        className={`tabler-icon text-white transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
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
  )

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
            handleSmoothScroll(e, "#about")
            setIsMobileMenuOpen(false)
          }}
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#projects")
            setIsMobileMenuOpen(false)
          }}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="text-neutral-300 px-4 py-3 hover:text-neutral-100 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
          onClick={(e) => {
            handleSmoothScroll(e, "#contact")
            setIsMobileMenuOpen(false)
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
  )

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
        className="hidden top-20 lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full overflow-hidden"
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
  )
}

export default Navbar

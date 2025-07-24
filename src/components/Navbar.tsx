import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { IconBrandX } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[50] w-full border-b border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-[#0a0a0a]">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-16 max-w-[88rem] items-center px-8">
          {/* Logo Section */}
          <div className="mr-4 hidden md:flex">
            <Link
              className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
              href="/"
            >
              <div className="flex flex-col">
                <h1 className="text-black dark:text-white font-sans">
                  QI
                </h1>
              </div>
            </Link>
          </div>

          {/* Mobile Logo */}
          <Link
            className="focus-visible:ring-ring hover:text-accent-foreground mr-2 inline-flex h-9 items-center justify-center rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
            href="/"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 dark:bg-[#0a0a0a] text-sm text-white antialiased md:h-6 md:w-6">
              <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl"></div>
              <div className="relative z-20 text-sm text-emerald-500">
                <Image
                  alt="Logo"
                  width={50}
                  height={50}
                  src="/logo.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Link>

         

          {/* Right Side Actions */}
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            {/* Twitter Link */}
            <Link
              target="_blank"
              className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors"
              href="https://twitter.com/kanak_k365"
            >
             <IconBrandX />
            </Link>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Search Button */}
            {/* <button className="flex relative justify-start items-center text-sm text-muted-foreground dark:border-white/[0.2] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white dark:bg-brand">
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
                className="h-4 w-4 text-neutral-500"
              >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
              <span className="transition-colors hover:text-foreground/80 text-foreground/60 rex text-xs sm:text-sm font-medium pl-2 pr-4">
                Search{" "}
                <span className="hidden xl:inline-block">Components</span>
              </span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button> */}
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex w-full items-center justify-between rounded-md px-4 py-4">
          <Link className="flex items-center gap-1.5" href="/">
            <Image
              alt="Logo"
              width={50}
              height={50}
              src="/logo.png"
              className="h-6 w-6 object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="h-6 w-6 text-black dark:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

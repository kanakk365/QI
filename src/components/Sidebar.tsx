"use client";

import * as React from "react";
import Link from "next/link";

function AppSidebar() {
  return (
    <aside className="fixed z-30 -ml-2 hidden h-[100vh] w-full shrink-0 lg:sticky lg:top-16 lg:block lg:self-start lg:h-[calc(100vh-4rem)]">
      <div
        dir="ltr"
        className="relative overflow-hidden h-full py-6 pr-6 lg:py-8"
        style={{ position: "relative" }}
      >
        <div
          data-radix-scroll-area-viewport=""
          className="h-full w-full rounded-[inherit]"
          style={{ overflow: "hidden scroll" }}
        >
          <div style={{ minWidth: "100%", display: "table" }}>
            <div className="w-full">
              {/* Follow for updates */}
              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white">
                  Follow for updates
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <a
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="https://twitter.com/kanak_k365"
                  >
                    Twitter @kanak_k365
                  </a>
                  {/* <a
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="https://github.com/kui-library"
                  >
                    GitHub
                  </a> */}
                </div>
              </div>

              {/* Installation */}
              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white">
                  Installation
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <a
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/docs/install-nextjs"
                  >
                    Install Next.js
                  </a>
                  <a
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/docs/install-tailwindcss"
                  >
                    Install Tailwind CSS
                  </a>
                  <a
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/docs/add-utilities"
                  >
                    Add utilities
                  </a>
                  <a
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/docs/cli"
                  >
                    CLI
                  </a>
                </div>
              </div>

              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white">
                  Cards
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/list"
                  >
                    List
                  </Link>
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/featurelist"
                  >
                    Feature List
                  </Link>
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/infinitescroll"
                  >
                    Infinite Scroll
                  </Link>
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/plan"
                  >
                    Plan Card
                  </Link>
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/cursors"
                  >
                    Cursors
                  </Link>
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/graph"
                  >
                    Graph
                  </Link>
                  
                </div>
              </div>
              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white">
                  Animations
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/wave"
                  >
                    Wave
                  </Link>
                  <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/liquidball"
                  >
                    LiquidBall
                  </Link>
                </div>
              </div>
              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white">
                  Components
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link
                    className="group group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 transition duration-200 hover:translate-x-1 hover:text-black dark:hover:text-white text-muted-foreground"
                    href="/components/calendar"
                  >
                    Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { AppSidebar };

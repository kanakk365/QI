"use client";

import * as React from "react";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/appui/tabs";
import { AppSidebar } from "@/src/components/Sidebar";
import { CodeBlock } from "@/src/components/appui/CodeBlock";

export function ComponentsPage({
  selectedComponent,
  PreviewComponent,
  componentData,
}: {
  selectedComponent?: string;
  PreviewComponent?: React.ComponentType;
  componentData?: {
    name: string;
    description?: string; // Component description
    demo: string; // Demo component code
    code: string; // Implementation/source code
    cli: string;
    manualSteps?: Array<{
      title: string;
      code: string;
      language: string;
      filename?: string;
    }>;
  };
}) {
  const [theme] = React.useState("light");
  
  const components = [
    {
      name: "List",
      description: "A beautiful animated card component with hover effects and modern styling.",
      href: "/components/list"
    },
    {
      name: "Feature List",
      description: "An interactive feature showcase with smooth animations and card transitions.",
      href: "/components/featurelist"
    },
    {
      name: "Infinite Scroll",
      description: "A smooth infinite scrolling component with animated content and hover interactions.",
      href: "/components/infinitescroll"
    },
    {
      name: "Plan Card",
      description: "A pricing plan card with hover animations and feature reveal effects.",
      href: "/components/plan"
    },
    {
      name: "Cursors",
      description: "An interactive cursor tracking demo with smooth mouse following animations.",
      href: "/components/cursors"
    },
    {
      name: "Wave",
      description: "An interactive wave animation component with smooth hover effects and dynamic wave patterns.",
      href: "/components/wave"
    },
    {
      name: "Graph",
      description: "An interactive data visualization component with animated charts and dark mode support.",
      href: "/components/graph"
    },
    {
      name: "Calendar",
      description: "A beautiful full-screen calendar component with event management and responsive design.",
      href: "/components/calendar"
    }
  ];

  if (!selectedComponent) {
    return (
      <div className={theme}>
        <div className="container mx-auto w-full min-h-[100vh] max-w-[88rem] flex-1 items-start px-4 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:px-8">
          <AppSidebar />
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">UI Components</h1>
                <p className="text-lg text-muted-foreground">
                  Beautiful, interactive components built with React, TypeScript, and Framer Motion.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {components.map((component) => (
                  <Link
                    key={component.name}
                    href={component.href}
                    className="group block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {component.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {component.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium pt-2">
                        View Component →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
  const componentName = selectedComponent
    ? selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)
    : "Component";

  return (
    <div className={theme}>
      <div className="container mx-auto w-full min-h-[100vh] max-w-[88rem] flex-1 items-start px-4 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:px-8">
        <AppSidebar />
        <main className="rounded-2xl mt-4 bg-background py-6 lg:gap-10 lg:py-6 border-border border">
          <div data-algolia-crawl="true" className="px-4 md:px-8 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="pb-6 flex items-center space-x-1 text-[13px] md:text-base text-muted-foreground">
                <div className="font-medium whitespace-nowrap">Components</div>
                <span className="font-serif">→</span>
                <div data-algolia-level-0="true" className="font-medium text-foreground">
                  {componentName}
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="scroll-m-20 text-3xl text-pretty md:text-5xl tracking-tight">
                {componentName}
              </h1>
            </div>
            <div className="">
              <p className="text-sm md:text-lg text-muted-foreground pt-2 md:pt-4">
                {componentData?.description ?? `A beautiful, customizable ${componentName} component.`}
              </p>
            </div>
            <div className="mb-12 pt-8 space-y-6">
              <Tabs defaultValue="preview" className="group relative flex flex-col h-full w-full">
                <div className="flex items-center justify-between">
                  <TabsList className=" bg-transparent ">
                    <TabsTrigger value="preview" className=" bg-transparent border-0 cursor-pointer text-base ">
                      Demo
                    </TabsTrigger>
                    <TabsTrigger value="code" className="bg-transparent border-0 cursor-pointer text-base ">
                      Code
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="preview" className="mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border flex rounded-2xl">
                  <div className="w-full flex items-center justify-center rounded-2xl min-h-[530px] overflow-hidden relative max-h-[530px]">
                    {PreviewComponent ? <PreviewComponent /> : <div>Select a component to preview.</div>}
                  </div>
                </TabsContent>
                <TabsContent value="code" className="mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <CodeBlock 
                    text={componentData?.demo ?? `// Demo usage example for ${componentName}`}
                    language="jsx"
                  />
                </TabsContent>
              </Tabs>
            </div>

            <h2 id="installation" className="text-3xl md:text-4xl font-medium mb-0 py-0 mt-14 tracking-tight">Installation</h2>
            <hr className="mt-2.5" />
            <Tabs defaultValue="cli" className="relative w-full mt-4 ">
              <TabsList className="bg-transparent">
                <TabsTrigger value="cli" className="bg-transparent border-0 cursor-pointer text-base ">
                  CLI
                </TabsTrigger>
                <TabsTrigger value="manual" className="bg-transparent border-0 cursor-pointer text-base ">
                  Manual
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-5">
                <CodeBlock 
                  text={componentData?.cli ?? "npm i framer-motion @tabler/icons-react lucide-react"}
                  language="bash"
                />
              </TabsContent>
              <TabsContent value="manual" className="mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-5">
                {componentData?.manualSteps ? (
                  <div className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
                    {componentData.manualSteps.map((step, index) => (
                      <div key={index}>
                        <h3 className="font-heading relative mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-black dark:text-neutral-200">
                          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-neutral-200 dark:bg-neutral-700"></span>
                          {step.title}
                        </h3>
                        {step.filename && (
                          <p className="leading-7 text-black dark:text-white [&:not(:first-child)]:mt-6">
                            <code className="relative rounded px-4 py-1 text-sm bg-neutral-100 dark:bg-neutral-800">
                              {step.filename}
                            </code>
                          </p>
                        )}
                        <div className="mt-6 mb-4">
                          <CodeBlock 
                            text={step.code}
                            language={step.language}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <CodeBlock 
                    text={componentData?.code ?? "// Component implementation code goes here"}
                    language="jsx"
                  />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}

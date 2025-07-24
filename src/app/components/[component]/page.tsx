import Navbar from "@/src/components/Navbar";
import { ComponentsPage } from "@/src/components/components-page";
import { notFound } from "next/navigation";
import { componentMap } from "@/src/lib/component-map";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;
  const config = componentMap[component as keyof typeof componentMap];
  if (!config) return notFound();

  const { preview, ...componentData } = config;

  const componentModule = await preview();
  const PreviewComponent: React.ComponentType | undefined = (() => {
    const moduleData = componentModule as Record<string, unknown>;
    if ("default" in moduleData && typeof moduleData.default === "function") {
      return moduleData.default as React.ComponentType;
    }
    if ("Card" in moduleData && typeof moduleData.Card === "function") {
      return moduleData.Card as React.ComponentType;
    }
    if ("Arive" in moduleData && typeof moduleData.Arive === "function") {
      return moduleData.Arive as React.ComponentType;
    }
    return undefined;
  })();

  return (
    <div>
      <Navbar />
      <ComponentsPage
        selectedComponent={component}
        PreviewComponent={PreviewComponent}
        componentData={componentData}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(componentMap).map((component) => ({
    component,
  }));
}

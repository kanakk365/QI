import Navbar from "@/components/Navbar";
import { ComponentsPage } from "@/components/components-page";
import { notFound } from "next/navigation";
import { componentMap } from "@/lib/component-map";

export default async function ComponentPage({
  params,
}: {
  params: { component: string };
}) {
  const { component } = params;
  const config = componentMap[component as keyof typeof componentMap];
  if (!config) return notFound();

  const { preview, ...componentData } = config;

  const componentModule = await preview();
  const PreviewComponent =
    "default" in componentModule
      ? componentModule.default
      : (
          componentModule as {
            Card?: React.ComponentType;
            Arive?: React.ComponentType;
          }
        ).Card ||
        (
          componentModule as {
            Card?: React.ComponentType;
            Arive?: React.ComponentType;
          }
        ).Arive;

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

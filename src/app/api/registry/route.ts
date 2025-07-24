import { NextResponse } from 'next/server';

export async function GET() {
  const registry = {
    components: [
      {
        name: "list",
        description: "A beautiful animated card component with hover effects and modern styling.",
        url: "https://qi.kanakk.me/api/registry/list"
      },
      {
        name: "feature-list",
        description: "An interactive feature showcase with smooth animations and card transitions.",
        url: "https://qi.kanakk.me/api/registry/feature-list"
      },
      {
        name: "infinite-scroll",
        description: "A smooth infinite scrolling component with animated content and hover interactions.",
        url: "https://qi.kanakk.me/api/registry/infinite-scroll"
      },
      {
        name: "plan",
        description: "A pricing plan card with hover animations and feature reveal effects.",
        url: "https://qi.kanakk.me/api/registry/plan"
      },
      {
        name: "cursors",
        description: "An interactive cursor tracking demo with smooth mouse following animations.",
        url: "https://qi.kanakk.me/api/registry/cursors"
      },
      {
        name: "wave",
        description: "An interactive wave animation component with smooth hover effects and dynamic wave patterns.",
        url: "https://qi.kanakk.me/api/registry/wave"
      },
      {
        name: "graph",
        description: "An interactive data visualization component with animated charts and dark mode support.",
        url: "https://qi.kanakk.me/api/registry/graph"
      },
      {
        name: "calendar",
        description: "A beautiful full-screen calendar component with event management and responsive design.",
        url: "https://qi.kanakk.me/api/registry/calendar"
      }
    ]
  };

  return NextResponse.json(registry);
} 
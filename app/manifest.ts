import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

  return {

    name: "Fintech Dashboard PWA",

    short_name: "FintechApp",

    description: "Banking dashboard built with Next.js and Belvo",

    start_url: "/login",

    display: "standalone",

    background_color: "#020617",

    theme_color: "#0891b2",

    orientation: "portrait",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
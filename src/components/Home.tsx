"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Home() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Dashboard",
    thumbnail:
      "/home.png",
  },
  {
    title: "Attendance",
    thumbnail:
      "/attendance.png",
  },
  {
    title: "Statistics",
    thumbnail:
      "/stats.png",
  },
  {
    title: "Activity",
    thumbnail:
      "/activity.png",
  },
  {
    title: "Class",
    thumbnail:
      "/class.png",
  },
  {
    title: "Leaderboard",
    thumbnail:
      "/leaderboard.png",
  },

  {
    title: "Events",
    thumbnail:
      "/events.png",
  },
  {
    title: "Reports",
    thumbnail:
      "/reports.png",
  },
  {
    title: "Playgrounds",
    thumbnail:
      "/playgrounds.png",
  },
];

"use client";
import DotGrid from "@/components/reactbits/blocks/Backgrounds/DotGrid/DotGrid";
import Hero from "@/components/Hero";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return <Hero />;
}

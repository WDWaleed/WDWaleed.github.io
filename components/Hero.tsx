"use client";

import DotGrid from "@/components/reactbits/blocks/Backgrounds/DotGrid/DotGrid";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <DotGrid
          baseColor={currentTheme === "dark" ? "#271E37" : "#eeeeee"}
          activeColor={currentTheme === "dark" ? "#5227FF" : "#5227ff"}
          dotSize={7}
          gap={20}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Foreground Content */}
      <section className="min-h-screen flex  items-center text-primary-text justify-center flex-col gap-12 py-12">
        <div>
          <h1 className="text-5xl my-2 font-bold text-center">
            MUHAMMAD WALEED AHMED
          </h1>
          <p className="font-thin italic text-2xl text-center">
            Full-Stack Web Developer
          </p>
        </div>
        <hr className="border-slate-500 w-2/3 max-w-[375px] mx-auto" />
        {/* <p className="text-xl text-center">
          Transforming Ideas Into Seamless User Journeys
        </p> */}
        <div className="space-x-8">
          <button className="py-3 px-9   bg-btn-bg hover:bg-btn-hover text-btn-text rounded-full">
            Projects
          </button>
          <button className="py-3 px-9   bg-btn-bg hover:bg-btn-hover text-btn-text rounded-full">
            Contact
          </button>
        </div>
      </section>
    </div>
  );
}

"use client";
import DotGrid from "@/components/reactbits/blocks/Backgrounds/DotGrid/DotGrid";
import { useTheme } from "next-themes";
import { AnimatedSection } from "./wrappers/animated-section";

export default function Hero() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(theme, currentTheme);

  return (
    <div id="home">
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
      <AnimatedSection className="relative w-full h-screen overflow-hidden">
        <section className="min-h-screen flex items-center text-primary-text justify-center flex-col gap-12 py-12">
          <div>
            <h1 className=" text-4xl md:text-5xl my-2 font-bold text-center">
              MUHAMMAD WALEED AHMED
            </h1>
            <p className="font-thin italic text-xl md:text-2xl text-center">
              Full-Stack Web Developer
            </p>
          </div>
          <hr className="border-slate-500 w-2/3 max-w-[375px] mx-auto" />
          <div className="space-x-6">
            <a href="#projects">
              <button className="btn btn-md md:btn-lg bg-btn-bg hover:bg-btn-hover text-btn-text rounded-full ">
                Projects
              </button>
            </a>
            <a href="#contact">
              <button className="btn btn-md md:btn-lg bg-btn-bg hover:bg-btn-hover text-btn-text rounded-full ">
                Contact
              </button>
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

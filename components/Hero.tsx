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
      <div className="pointer-events-none absolute inset-0 -z-10">
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
      <AnimatedSection className="relative h-screen w-full overflow-hidden">
        <section className="text-primary-text flex min-h-screen flex-col items-center justify-center gap-12 py-12">
          <div>
            <h1 className="my-2 text-center text-4xl font-bold md:text-5xl">
              MUHAMMAD WALEED AHMED
            </h1>
            <p className="text-center text-xl font-thin italic md:text-2xl">
              Full-Stack Web Developer
            </p>
          </div>
          <hr className="mx-auto w-2/3 max-w-[375px] border-slate-500" />
          <div className="space-x-6">
            <a href="#projects">
              <button className="btn btn-md md:btn-lg bg-btn-bg hover:bg-btn-hover text-btn-text rounded-full border-none">
                Projects
              </button>
            </a>
            <a href="#contact">
              <button className="btn btn-md md:btn-lg bg-btn-bg hover:bg-btn-hover text-btn-text rounded-full border-none">
                Contact
              </button>
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

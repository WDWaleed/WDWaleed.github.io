import { AnimatedSection } from "./wrappers/animated-section";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="  p-4 bg-gradient-to-br  from-indigo-400 to-slate-900"
    >
      <AnimatedSection className="min-h-screen w-full max-w-[1440px] mx-auto py-16 flex flex-col justify-center">
        <h2 className="font-bold text-heading-text text-3xl md:text-4xl tracking-wide text-center uppercase mb-8 ">
          Projects
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              repo={project.repo}
              demo={project.demo}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

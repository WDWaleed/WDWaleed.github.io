import { AnimatedSection } from "./wrappers/animated-section";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-gradient-to-br from-indigo-400 to-slate-900 p-4"
    >
      <AnimatedSection className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-center py-16">
        <h2 className="text-heading-text mb-8 text-center text-3xl font-bold tracking-wide uppercase md:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
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

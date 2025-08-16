import { Link } from "lucide-react";
import { AnimatedSection } from "./wrappers/animated-section";
import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  repo: string;
  demo: string;
}

export default function ProjectCard({
  title,
  thumbnail,
  repo,
  demo,
}: ProjectCardProps) {
  return (
    <>
      <AnimatedSection className="card bg-component-bg w-96 shadow-lg">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-center">
            <a href={demo} target="_blank">
              <button className="btn btn-neutral btn-circle">
                <Link />
              </button>
            </a>
            <a href={repo} target="_blank">
              <button className="btn btn-neutral btn-circle">
                <FiGithub size={24} />
              </button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

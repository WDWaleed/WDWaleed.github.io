import projectsArray from "../../projectsData";
const Projects = () => {
  return (
    <section
      id="projects"
      className="custom-scroll-margin mb-20 w-full max-w-[1440px] mx-auto"
    >
      <h2 className="text-center text-2xl md:text-4xl">Projects</h2>
      <hr className=" border-Poseidon w-2/3 max-w-[375px] mx-auto mt-5 mb-10" />
      <div
        id="projects-container"
        className=" flex flex-col md:flex-row flex-wrap justify-center items-censter gap-10 "
      >
        {projectsArray.map((project, index) => {
          return (
            <div
              key={index}
              className="project-tile w-full max-w-[500px] shadow-2xl rounded-xl overflow-hidden"
            >
              <div
                className="thumbnail w-full aspect-[1920/913] outline outline-2 outline-Poseidon "
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: "contain",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="project-details px-4 py-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <hr className="border-Poseidon w-full mx-auto mt-4 mb-8" />

                <div className="stack-icons flex justify-center gap-4 mb-2">
                  {project.techStack.map((icon, index) => {
                    return (
                      <img
                        key={index}
                        src={icon}
                        alt="Tech Stack"
                        height={48}
                        width={48}
                      />
                    );
                  })}
                </div>

                <div className="links flex justify-center gap-4 mb-4">
                  <a href={`${project.repo}`} target="_blank">
                    <img
                      src="/assets/icons8-github-48.png"
                      alt="Source"
                      height={48}
                      width={48}
                    />
                  </a>
                  <a href={`${project.demo}`} target="_blank">
                    <img
                      src="/assets/icons8-link-48.png"
                      alt="Demo"
                      height={48}
                      width={48}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;

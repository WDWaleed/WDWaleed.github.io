import { AnimatedSection } from "./wrappers/animated-section";

export default function TechStack() {
  const icons = [
    {
      name: "HTML",
      url: "/html.svg",
    },
    {
      name: "CSS",
      url: "/css.svg",
    },
    {
      name: "JS",
      url: "/javascript.svg",
    },
    {
      name: "React",
      url: "/react.svg",
    },
    {
      name: "Tailwind CSS",
      url: "/tailwindcss.svg",
    },
    {
      name: "Node JS",
      url: "/nodejs.svg",
    },
    {
      name: "Express JS",
      url: "/expressjs.svg",
    },
    {
      name: "MongoDB",
      url: "/mongodb.svg",
    },
    {
      name: "Next JS",
      url: "/next-js.svg",
    },
    {
      name: "Typescript",
      url: "/typescript.svg",
    },
  ];
  return (
    <div
      id="projects"
      className="  p-4 bg-gradient-to-br  from-indigo-400 to-slate-900"
    >
      <AnimatedSection className="min-h-screen w-full max-w-[1440px] mx-auto py-16 flex flex-col justify-center">
        <h2 className="font-bold text-4xl tracking-wide text-center uppercase my-8 ">
          TechStack
        </h2>
        <div className="flex flex-wrap gap-12 justify-center">
          {icons.map((icon, index) => (
            <div className="h-16 w-16" key={index}>
              <img src={icon.url} alt={icon.name} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

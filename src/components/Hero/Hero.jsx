import "./Hero.css";
const Hero = () => {
  return (
    <section
      id="hero"
      className="custom-scroll-margin max-w-[1440px] h-[100vh] mx-auto flex flex-col justify-center items-center gap-12 py-12 "
    >
      <div>
        <h1
          id="name"
          className="my-2 text-4xl md:text-5xl font-semibold text-center "
        >
          Muhammad Waleed Ahmed
        </h1>
        <p
          id="title"
          className="text-xl md:text-2xl font-light italic text-center"
        >
          Frontend Web Developer
        </p>
      </div>
      <hr className=" border-Poseidon w-2/3 max-w-[375px] mx-auto " />

      <p id="tagline" className="text-center">
        Transforming Ideas into Seamless User Journeys
      </p>
      <div id="hero-cta" className="flex flex-col gap-4 md:flex-row md:gap-12">
        <a
          href="#projects"
          className="py-2 px-12 outline-Poseidon bg-Gainsboro outline-[2px] outline rounded-lg transition-colors hover:bg-Poseidon hover:text-Gainsboro focus:outline-[3px] "
        >
          Projects
        </a>
        <a
          href="#contact"
          className="py-2 px-12 bg-Poseidon text-Gainsboro outline outline-Poseidon  outline-[2px] rounded-lg transition-colors hover:bg-Gainsboro hover:text-Poseidon focus:outline-[3px] "
        >
          Contact
        </a>
      </div>
    </section>
  );
};
export default Hero;

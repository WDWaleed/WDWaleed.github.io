type Project = {
  id: number;
  title: string;
  thumbnail: string;
  repo: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MERN Task Manager",
    thumbnail: "/screenshot-mern-task-manager.png",
    repo: "https://github.com/WDWaleed/MERN-Task-Manager-Frontend",
    demo: "https://mern-task-manager-frontend-eight.vercel.app",
  },
  {
    id: 2,
    title: "Fylo Dark Theme Landing Page",
    thumbnail: "/screenshot-fylo-dark.webp",
    repo: "https://github.com/WDWaleed/Fylo-Landing-Page-Frontend-Mentor",
    demo: "https://wdwaleed.github.io/Fylo-Landing-Page-Frontend-Mentor/",
  },
  {
    id: 3,
    title: "Interactive Card Details Form",
    thumbnail: "/screenshot-interactive-cards.webp",
    repo: "https://github.com/WDWaleed/Interactive-Card-Details-Form-Frontend-Mentor",
    demo: "https://wdwaleed.github.io/Interactive-Card-Details-Form-Frontend-Mentor/",
  },
  {
    id: 4,
    title: "Newsletter Sign Up Form",
    thumbnail: "/screenshot-signup-form.webp",
    repo: "https://github.com/WDWaleed/Newsletter-Sign-Up-With-Success-Message",
    demo: "https://wdwaleed.github.io/Newsletter-Sign-Up-With-Success-Message/",
  },
  {
    id: 5,
    title: "Intro Section With Dropdown Navigation",
    thumbnail: "/screenshot-intro-section.webp",
    repo: "https://github.com/WDWaleed/Intro-Section-With-Dropdown-Navigation-Frontend-Mentor",
    demo: "https://wdwaleed.github.io/Intro-Section-With-Dropdown-Navigation-Frontend-Mentor/",
  },
];

export default projects;

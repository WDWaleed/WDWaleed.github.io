import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="bg-component-bg w-full shadow-md sticky top-0 border-b border-component-border">
      <header className="max-w-[1440px] mx-auto p-4 flex justify-between items-center">
        <h1 className="text-heading-text font-heading font-bold text-2xl">
          <span className="text-accent font-extrabold">WD</span>Waleed
        </h1>
        <nav>
          <ul className="flex justify-center items-center gap-8 font-semibold">
            {["Home", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <li>
                  {item}
                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </li>
              </a>
            ))}
          </ul>
        </nav>
        {/* <ThemeToggle /> */}
      </header>
    </div>
  );
}

import HamburgerMenu from "./HamburgerMenu";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="bg-component-bg text-primary-text border-component-border sticky top-0 z-10 -mb-16 w-full border-b shadow-md">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between p-4">
        <h1 className="text-heading-text font-heading text-2xl font-bold">
          <span className="text-accent-custom font-extrabold">WD</span>Waleed
        </h1>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-8 font-semibold">
            {["Home", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative"
              >
                <li>
                  {item}
                  {/* underline animation */}
                  <span className="bg-accent-custom absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </a>
            ))}
          </ul>
        </nav>
        <HamburgerMenu />
        {/* <ThemeToggle /> */}
      </header>
    </div>
  );
}

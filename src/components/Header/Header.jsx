import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header>
      <div
        id="wrapper"
        className="w-fullmax-w-[1440px] mx-auto flex justify-between items-center py-4 px-8 "
      >
        <div id="logo" className="font-Raleway font-bold text-2xl text-Text">
          WDWaleed
        </div>
        <div id="nav-container">
          <nav
            id="navbar"
            className={`transform transition-transform duration-300 ease-in-out ${
              navOpen ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0`}
          >
            <ul className="flex list-none gap-8">
              <li>
                <a href="#hero" onClick={() => setNavOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setNavOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setNavOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setNavOpen(false)}
                  className="contact-btn py-2 px-12 bg-Poseidon text-Gainsboro outline outline-Poseidon outline-[2px] rounded-lg transition-colors hover:bg-Gainsboro hover:text-Poseidon focus:outline-[3px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            aria-label="Toggle Navigation"
            id="toggle-nav"
            className={`${
              navOpen ? "bg-Close" : "bg-Hamburger"
            } md:hidden absolute top-2 right-4 w-12 h-12 `}
            onClick={() => setNavOpen(!navOpen)}
          ></button>
        </div>
      </div>
    </header>
  );
};
export default Header;

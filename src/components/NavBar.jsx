import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";
import { scrollToSmooth } from "../constants/functions.js";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo contact-btn flex-row items-center gap-1" onClick={(e) => scrollToSmooth(e, "opening")}>
          <img
            alt="Pias logo"
            src="/projectImages/Logo.svg"
            width="48"
            height="48"
          />
          ia Carola Probst
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ targetId, name }) => (
              <li key={name} className="group">
                <a
                  className="group cursor-pointer"
                  onClick={(e) => scrollToSmooth(e, targetId)}
                >
                  <div className="inner">
                    <span>{name}</span>
                    <span className="underline" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a onClick={(e) => scrollToSmooth(e, 'contact')} className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;

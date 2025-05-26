import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";
import { scrollToSmooth } from "../constants/functions.js";
import { Link } from "react-router-dom";

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
        <Link className="logo" to='/#opening'>
          <img
            alt="Pias logo"
            src="/projects/Logo.svg"
            width="48"
            height="48"
          />
          ia Carola Probst
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ target, name }) => (
              <li key={name} className="group">
                {/* <a
                  className="group cursor-pointer"
                  onClick={(e) => scrollToSmooth(e, targetId)}
                >
                  <div className="inner">
                    <span>{name}</span>
                    <span className="underline" />
                  </div>
                </a> */}
                <Link
                  className="group cursor-pointer"
                  to={target}
                >
                  <div className="inner">
                    <span>{name}</span>
                    <span className="underline" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a onClick={(e) => scrollToSmooth(e, 'contact')} className="">
          <div className="contact-btn group">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;

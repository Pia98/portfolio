import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { showcaseProjects } from "../constants";
import { Link } from "react-router-dom";
import { handleMouseMove } from "../constants/functions";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.from(".first-project-wrapper", {
      xPercent: -100,
      opacity: 0,
      transformOrigin: "left left",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#showcase",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });

    gsap.utils.toArray(".project").forEach((project, index) => {
      gsap.from(project, {
        xPercent: 100,
        opacity: 0,
        transformOrigin: "right right",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: project,
          start: "top bottom-=200",
          toggleActions: "restart none none none",
        },
      });
    });
  }, []);

  return (
    <section id="showcase" className="app-showcase">
      <div className="w-full flex flex-col gap-10 items-center">
        <div className="showcase-layout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div
              className="card card-border image-wrapper"
              onMouseMove={handleMouseMove(0, cardRefs)}
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <div className="glow" />
              <img
                src={showcaseProjects[0].imgPath}
                alt={showcaseProjects[0].name}
              />
            </div>
            <div className="text-content">
              <h2>{showcaseProjects[0].title}</h2>
              <p className="text-white md:text-xl">
                {showcaseProjects[0].short_desc}
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            {showcaseProjects.map((project, index) => {
              if (index < 3 && index != 0) {
                return (
                  <div className="project" key={project.name}>
                    <div
                      ref={(el) => (cardRefs.current[index] = el)}
                      onMouseMove={handleMouseMove(index, cardRefs)}
                      className="card card-border image-wrapper bg-linear-to-b from-light-blue-t to-transparent"
                    >
                      <div className="glow" />
                      <img src={project.imgPath} alt={project.name} />
                    </div>
                    <h2>{project.title}</h2>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <Link
          className="md:w-80 md:h-16 h-12 anim-text"
          id="projects_btn"
          to="/projects"
        >
          <div className="cta-link-button w-100 group">
            <p className="text">See more projects!</p>
            <div className="arrow-wrapper">
              <img src="/general/arrow-right.svg" alt="Arrow right" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Showcase;

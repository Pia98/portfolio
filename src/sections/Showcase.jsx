import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { showcaseProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {

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
      <div className="w-full">
        <div className="showcase-layout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
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
              if (index < 3) {
                return <div className="project" key={project.name}>
              <div className="image-wrapper bg-linear-to-b from-light-blue-t to-transparent">
                <img
                  src={project.imgPath}
                  alt={project.name}
                />
              </div>
              <h2>{project.title}</h2>
            </div>;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

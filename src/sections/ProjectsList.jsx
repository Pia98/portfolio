import { showcaseProjects } from "../constants";
import { useRef } from "react";
import { handleMouseMove } from "../constants/functions";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectsList = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {

    gsap.utils.toArray(".project").forEach((project, index) => {
      gsap.fromTo(project,
        {
          y: 50,
          opacity: 0,
        },{
        y:0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: project,
          start: "top bottom-=100"
        },
      });
    });
  }, []);

  return (
    <section id="projects-list" className="projects-list-layout">
      <div className="grid-4-cols projects-list-container">
        {showcaseProjects.map((project, index) => {
          if(project.published)
          return (
            <Link
              className="project"
              key={project.name}
              to={project.pathLink}
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={handleMouseMove(index, cardRefs)}
                className="card card-border image-wrapper"
              >
                <div className="glow" />
                <img src={project.imgPath} alt={project.name} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;

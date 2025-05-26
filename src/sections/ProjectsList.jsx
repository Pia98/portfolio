import { showcaseProjects } from "../constants";
import { useRef } from "react";
import { handleMouseMove } from "../constants/functions";

const ProjectsList = () => {
  const cardRefs = useRef([]);
  return (
    <section id="projects-list" className="projects-list-layout">
      <div className="grid-4-cols projects-list-container">
        {showcaseProjects.map((project, index) => {
          return (
            <div className="project" key={project.name}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={handleMouseMove(index, cardRefs)}
                className="card card-border image-wrapper"
              >
                <div className="glow" />
                <img src={project.imgPath} alt={project.name} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;

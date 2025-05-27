import PageOpener from "../components/PageOpener.jsx";
import ProjectsList from "../sections/ProjectsList.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ThreeDSimpleExperience from "../components/threeDModels/ThreeDSimpleExperience.jsx";

const Projects = () => {
  const projectRef = useRef([]);
  useGSAP(() => {
    gsap.fromTo(
      projectRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <div ref={projectRef}>
      <PageOpener
        title="My Projects"
        subtitle="Showcasing My Work"
        id="opening"
      >
        <figure>
          <div className="header-3d-layout">
            <ThreeDSimpleExperience />
          </div>
        </figure>
      </PageOpener>
      <ProjectsList />
      {/* placeholder for list so that the footer does not appear behind */}
      <div class="spacer"></div>
    </div>
  );
};

export default Projects;

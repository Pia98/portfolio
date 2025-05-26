import PageOpener from "../components/PageOpener.jsx";
import ProjectsList from "../sections/ProjectsList.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Projects = () => {
  const projectRef = useRef([]);
  useGSAP(() => {
      gsap.fromTo(projectRef.current,
        {
          opacity: 0,
        },{
        opacity: 1,
        duration: 1,
      });
  }, []);

  return (
    <div ref={projectRef}>
      <PageOpener title="My Projects" subtitle="Showcasing My Work" id="opening"/>
      <ProjectsList/>
    </div>
  );
};

export default Projects;

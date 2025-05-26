import PageOpener from "../components/PageOpener.jsx";
import ProjectsList from "../sections/ProjectsList.jsx";

const Projects = () => {
  return (
    <>
      <PageOpener title="My Projects" subtitle="Showcasing My Work" id="opening"/>
      <ProjectsList/>
    </>
  );
};

export default Projects;

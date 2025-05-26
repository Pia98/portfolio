import TitleHeader from "../components/TitleHeader";

const Projects = () => {
  return (
    <section id="opening" className="relative overflow-hidden">
      <div className="header-layout">
        <header className="flex flex-col justify-center absolute xl:w-[50%] left-0 md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="header-text">
              <TitleHeader
                title="My Projects"
                sub="Showcasing My Work"
              />
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Projects;

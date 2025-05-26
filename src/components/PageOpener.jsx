import TitleHeader from "../components/TitleHeader";
import ThreeDSimpleExperience from "../components/threeDModels/ThreeDSimpleExperience.jsx";

const PageOpener = ({ title, subtitle, id }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="opener-layout">
        <header className="flex flex-col justify-center absolute xl:w-[30%] left-0 md:w-full w-screen md:px-20 px-5 xl:-mt-50">
          <div className="flex flex-col gap-7">
            <div className="header-text">
              <TitleHeader title={title} sub={subtitle} />
            </div>
          </div>
        </header>
        {/* 3D scene bg */}
        <figure>
          <div className="header-3d-layout">
            <ThreeDSimpleExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default PageOpener;

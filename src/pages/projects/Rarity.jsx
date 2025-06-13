import PageOpener from "../../components/PageOpener.jsx";
import ThreeDSimpleExperience from "../../components/threeDModels/ThreeDSimpleExperience.jsx";

const Rarity = () => {
  return (
    <>
      <PageOpener
        title="Rarity"
        subtitle="A website to showcase endangered species"
        id="opening"
      >
        <figure>
          <div className="header-3d-layout">
            <ThreeDSimpleExperience />
            <div className="rounded-lg absolute w-[40%] right-0 mr-10 md:px-20 px-5 xl:top-70 md:top-100 top-220 z-10">
              <img
                className="rounded-lg"
                src="/projects/rarity/header.png"
                alt="Rarity Logo"
              ></img>
            </div>
          </div>
        </figure>
      </PageOpener>
    </>
  );
};

export default Rarity;

import PageOpener from "../../components/PageOpener.jsx";
import ThreeDSimpleExperience from "../../components/threeDModels/ThreeDSimpleExperience.jsx";

const RatsVsScience = () => {
  return (
    <>
      <PageOpener
        title="Rats Vs Science"
        subtitle="A website to showcase endangered species"
        id="opening"
      >
        <figure>
          <div className="header-3d-layout">
            <ThreeDSimpleExperience/>
          </div>
        </figure>
      </PageOpener>
    </>
  );
};

export default RatsVsScience;

import PageOpener from "../../components/PageOpener.jsx";
import ThreeDSimpleExperience from "../../components/threeDModels/ThreeDSimpleExperience.jsx";

const DistancesInCVR = () => {
  return (
    <>
      <PageOpener
        title="Distances in Cinematic Virtual Reality"
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

export default DistancesInCVR;

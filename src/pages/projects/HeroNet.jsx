import PageOpener from "../../components/PageOpener.jsx";
import ThreeDLogoExperience from "../../components/threeDModels/ThreeDLogoExperience.jsx";
import { HeroNetLogo } from "../../components/threeDModels/HeroNetLogo.jsx";
import { heroNetData } from "../../constants";
import ImageText from "../../components/ImageText.jsx";

const HeroNet = () => {

  return (
    <>
      <PageOpener
        title="Hero.Net"
        subtitle="An interactive Mixed-Reality Gameshow"
        id="opening"
      >
        <figure>
          <div className="header-3d-layout">
            <ThreeDLogoExperience>
              <HeroNetLogo />
            </ThreeDLogoExperience>
          </div>
        </figure>
      </PageOpener>
      <ImageText data={heroNetData}/>
      
    </>
  );
};

export default HeroNet;

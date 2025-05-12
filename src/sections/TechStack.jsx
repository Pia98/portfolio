import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/iconModels/techIcon";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="I Realised Projects with these Technologies and more..."
          sub="Skills I Bring to the Table"
        />
        <div className="tech-grid">
          {!isMobile &&
            techStackIcons.map((icon, index) => (
              <div key={icon.name} className="card-border tech-card overflow-hidden group">
                <div className="tech-card-content z-30">
                  <div className="tech-icon-wrapper">
                    <TechIcon model={icon} index={index} key={icon.name} />
                  </div>
                </div>
              </div>
            ))}

          {isMobile &&
            techStackIcons.map((icon) => (
              <div key={icon.name} className="card-border tech-card group overflow-hidden">
                <div className="tech-card-content z-30">
                  <div className="tech-icon-wrapper">
                    <img
                      src={icon.imgPath}
                      alt={icon.name}
                      className="size-20 tech-icon"
                    />
                  </div>
                  <div className="padding-x w-full">
                      <p>{icon.name}</p>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

techStackIcons.forEach((model) => {
  useGLTF.preload(model.modelPath);
});

export default TechStack;

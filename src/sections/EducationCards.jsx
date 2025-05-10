import { schools } from "../constants";
import TitleHeader from "../components/TitleHeader";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.from(".cards-section", {
      xPercent: -100,
      opacity: 0,
      transformOrigin: "left left",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#education",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });
  }, []);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //angle of the mouse to card center
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    //normalize angle to 0-360
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };
  return (
    <div className="w-full padding-x-lg" id="education">
      {/* <TitleHeader title="Education" sub="💻 My Studies" /> */}
      <div className="mx-auto grid-3-cols cards-section">
        {schools.map((school, index) => (
          // TODO: add glowcard here instead own card... maybe glowcard needs a param classname
          <div
            key={school.title}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="glow" />
            <div className="z-0 absolute bottom-0 opacity-30">
                <img src={school.imgPath} alt={school.title} />
            </div>
            <div className="z-10">
            <p className="my-5 text-white-50">📆 {school.duration}</p>
            <h3 className="text-white text-2xl font-semibold mt-2">
              {school.title}
            </h3>
            <p className="text-white text-lg">{school.desc}</p>
            {school.thesis != "" && (
              <div>
                <p className="text-light-purple italic">Thesis</p>
                <p className="text-lg">{school.thesis}</p>
              </div>
            )}

            <div>
              <p className="text-light-purple italic">Final Grade (1.0 best to 6.0)</p>
              <p className="text-lg">{school.grade}</p>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

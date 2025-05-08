import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";
import React, { useRef } from "react";

const FeatureCards = () => {
  const cardRefs = useRef([]);

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
    <div className="w-full padding-x-lg">
      <TitleHeader title="Education" sub="💻 My Studies" />
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          // TODO: add glowcard here instead own card... maybe glowcard needs a param classname
          <div
            key={title}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="glow" />
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

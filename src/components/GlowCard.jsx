import React, { useRef } from "react";
import { handleMouseMove } from "../constants/functions";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index, cardRefs)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;

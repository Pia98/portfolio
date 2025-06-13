import { handleMouseMove } from "../constants/functions";
import { useRef } from "react";

const ImageText = (props) => {
  const cardRefs = useRef([]);
  return (
    <div className="image-text-container grid-2-cols">
      <div className="">
        <div className="h-full">
          <div
            className="card card-border image-wrapper"
            onMouseMove={handleMouseMove(0, cardRefs)}
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <div className="glow" />
            <img
              className="rounded-lg"
              src={props.data.imgPath}
              alt={props.data.title}
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="mb-5 text-white-50">📆 {props.data.date}</p>
        <h1 className="font-semibold text-3xl">{props.data.title}</h1>
        <p className="text-light-purple italic mb-5">{props.data.subtitle}</p>        
        <p className="text-justify">{props.data.description}</p>
      </div>
    </div>
  );
};

export default ImageText;

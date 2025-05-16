import { scrollToSmooth } from "../constants/functions";

const FancyButton = ({ text, className, id, targetId }) => {
    return (
     <a className={`${className ?? ''} cta-wrapper`}
     id={id}
     onClick={(e) => scrollToSmooth(e, targetId)}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{ text }</p>
            <div className="arrow-wrapper">
                <img src="/general/arrow-down.svg" alt="Arrow down"/>
            </div>
        </div>
     </a>
    );
}

export default FancyButton;
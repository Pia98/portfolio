const FancyButton = ({ text, className, id, onClick }) => {
    return (
     <a className={`${className ?? ''} cta-wrapper`} id={id} onClick={onClick}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{ text }</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="Arrow down"/>
            </div>
        </div>
     </a>
    );
}

export default FancyButton;
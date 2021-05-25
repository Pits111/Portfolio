import { useState, useRef } from "react";
import Chevron from './Chevron';
import './Agile.css';
import './AgileImgs'; 


const Agile = (props) => {


    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        )
        console.log(content.current.scrollHeight)
    }


    return (
        <div className="accordion__section">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <p className="accordion__title">{props.title}</p>
                    <Chevron className={`${setRotate}`} width={15} fill={"#777"} />
                </button>
                    <div 
                        ref={content} 
                        style={{ maxHeight: `${setHeight}`}} 
                        className="accordion__content">
                        <div 
                            className="accordion__text"
                            dangerouslySetInnerHTML = {{ __html: props.content }} 
                        />
                    </div>
                </div>
    );

};

export default Agile; 
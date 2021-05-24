import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import "./Intro.css"; 


const useStyles = makeStyles((theme) => ({
    hidden: {
        display: "-webkit-box",
        WebkitLineClamp: 1,
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
    },
}));

function ReadMore({ children }) {
    const classes = useStyles();
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className="container-btn">
            <div className={isHidden ? classes.hidden : null}>{children}</div>
            <button onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? (
                    <p className="intro-btn">⬇ Show More</p>
                ) : (
                    <p className="intro-btn">⬆ Show Less</p>
                )}
            </button>
        </div>
    );
};

export default ReadMore; 
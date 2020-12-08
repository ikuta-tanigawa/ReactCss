import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./WhitePage.css"

const WhitePage: React.FC = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push("/black")
    };
    return (
        <div>
            <button onClick={handleClickButton}>Go to Black</button>
        </div>
    );
}

export default WhitePage;

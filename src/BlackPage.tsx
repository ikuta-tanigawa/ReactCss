import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./BlackPage.css"

const BlackPage: React.FC = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push("/white")
    };
    return (
        <div>
            <button onClick={handleClickButton}>Go to White</button>
        </div>
    );
}

export default BlackPage;

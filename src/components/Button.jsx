import React from "react";

function SubmitButton({text, onClick}){
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default SubmitButton
import React from "react";
import '../stylesheets/LabelOneField.css'

function LabelTwoFields( {labelText, inputId, inputType, inputPlaceholder,
    labelText2, inputId2, inputType2, inputPlaceholder2} ){
    return(
        <div className="two-field-container">
            <div className="one-field-container">
                <label htmlFor={inputId}>{labelText}</label>
                <input id={inputId} type={inputType} placeholder={inputPlaceholder}/>
            </div>
            <div className="one-field-container">
                <label htmlFor={inputId2}>{labelText2}</label>
                <input id={inputId2} type={inputType2} placeholder={inputPlaceholder2}/>
            </div>
        </div>
    );
}

export default LabelTwoFields;

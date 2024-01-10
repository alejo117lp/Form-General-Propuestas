import React from "react";
import '../stylesheets/LabelOneField.css'


function LabelOneField( {labelText, inputId, inputType, inputPlaceholder } ){
    return(
        <div className="one-field-container">
            <label htmlFor={inputId}>{labelText}</label>
            <input id={inputId} type={inputType} placeholder={inputPlaceholder}/>
        </div>
    );
}

export default LabelOneField;
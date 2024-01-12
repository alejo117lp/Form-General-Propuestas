import React from "react";
import '../stylesheets/LabelOneField.css'


function TestCode( {labelText0,labelText, inputId, inputType, inputPlaceholder,
    labelText2, inputId2, inputType2, inputPlaceholder2, 
    labelText3, inputId3, inputType3, inputPlaceholder3} ){
    return(
        <div className="two-field-container">
           <div className="three-field-container">
                <div className="one-field-container">
                    <label>{labelText0}</label>
                </div>
                <div className="one-field-container">
                    <label htmlFor={inputId2}>{labelText2}</label>
                    <input id={inputId2} type={inputType2} placeholder={inputPlaceholder2}/>
                </div>
                <div className="one-field-container">
                    <label htmlFor={inputId3}>{labelText3}</label>
                    <input id={inputId3} type={inputType3} placeholder={inputPlaceholder3}/>
                </div>
           </div>
        </div>
    );
}

export default TestCode;
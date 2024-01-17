import React from "react";
import '../stylesheets/LabelOneField.css'

function LabelTwoFields( {labelText, inputId, inputType, inputPlaceholder,
    labelText2, inputId2, inputType2, inputPlaceholder2,
    readOnly, required, required2} ){

    const handleKeyDown = (event) => {
        // Permite solo caracteres numéricos (0-9)
        if (inputType === 'number' && !/[0-9]/.test(event.key)
            && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };
    return(
        <div className="two-field-container">
            <div className="one-field-container">
                <label htmlFor={inputId}>{labelText}</label>
                <input id={inputId} type={inputType} placeholder={inputPlaceholder} required={required}
                readOnly={readOnly} min={inputType === 'number' ? '0' : undefined}
                onKeyDown={handleKeyDown}/>
            </div>
            <div className="one-field-container">
                <label htmlFor={inputId2}>{labelText2}</label>
                <input id={inputId2} type={inputType2} placeholder={inputPlaceholder2}
                readOnly={readOnly} required={required2}
                min={inputType === 'number' ? '0' : undefined}
                onKeyDown={handleKeyDown}/>
            </div>
        </div>
    );
}

export default LabelTwoFields;

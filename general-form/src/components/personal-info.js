import React from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import '../stylesheets/PersonalInfo.css';

function PersonalInfo(props){
   return(
    <div className="personal-info-container">
        <h3>Información Personal</h3>
        <div className="form-box">
            <form  className="info-box">
                <div className="labels-container data-row">
                    <label>Nombre Completo:</label>
                    <br/>
                    <label>Fecha de Nacimiento:</label>
                </div>
                <div className="inputs-container date-row">
                    <input name="name" type="text" placeholder="Nombre completo"></input>
                    <br/>
                    <div className="birth-info">
                        <DateTime className="date-time-props"
                        name="birth-date"
                        inputProps={{ placeholder: "dd/mm/aaaa" }}
                        dateFormat="DD/MM/YYYY"
                        timeFormat={false}
                        />
                        <label className="intermediate-form-item">Lugar de Nacimiento:</label>
                        <input name="place-birth" type="text" placeholder="Lugar de nacimiento"></input>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
   );
}

export default PersonalInfo;
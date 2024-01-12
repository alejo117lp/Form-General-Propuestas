import React from "react";
import LabelThreeFields from "./LabelThreeFields";

function SocialSecurity( {nameBox} ){
    return(
        <div className="form-box">
            <h3>{nameBox}</h3>
            <LabelThreeFields 
                labelText={"EPS:"}
                inputId={"eps"}
                inputPlaceholder={"Nombre EPS"}
                inputType={"text"}

                labelText2={"Pensiones:"}
                inputId2={"pensiones"}
                inputPlaceholder2={"Nombre Fondo de Pensiones"}
                inputType2={"text"}

                labelText3={"Cesantías:"}
                inputId3={"cesantias"}
                inputPlaceholder3={"Nombre Fondo Cesantías"}
                inputType3={"text"}
            />
        </div>
    );
}

export default SocialSecurity;


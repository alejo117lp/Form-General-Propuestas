import React from "react";
import LabelOneField from "./LabelOneField";
import LabelTwoFields from "./LabelTwoFields";
import LabelThreeFields from "./LabelThreeFields";

function HomeInformation( {nameBox} ){
    return (
        <div className="form-box">
            <h3>{nameBox}</h3>
            <LabelOneField 
                labelText={"Dirección de residencia:"}
                inputId={"home-address"}
                inputPlaceholder={"Dirección de residencia"}
                inputType={"text"}
            />
            <LabelTwoFields 
                labelText={"Barrio:"}
                inputId={"neighborhood"}
                inputPlaceholder={"Nombre Barrio"}
                inputType={"text"}

                labelText2={"Municipio"}
                inputId2={"municipality"}
                inputPlaceholder2={"Nombre municipio"}
                inputType2={"text"}
            />

            <LabelThreeFields 
                labelText={"Teléfono 1:"}
                inputId={"phone-1"}
                inputPlaceholder={"Teléfono 1"}
                inputType={"number"}

                labelText2={"Teléfono 2:"}
                inputId2={"phone-2"}
                inputPlaceholder2={"Teléfono 2"}
                inputType2={"number"}

                labelText3={"Celular:"}
                inputId3={"cellphone"}
                inputPlaceholder3={"Celular"}
                inputType3={"number"}
            />

            <LabelOneField 
                labelText={"Correo Electrónico:"}
                inputId={"Email"}
                inputPlaceholder={"Correo Electrónico"}
                inputType={"text"}
            />
        </div>
    );
}

export default HomeInformation;
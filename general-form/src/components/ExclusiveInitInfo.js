import React from "react";
import LabelTwoFields from "./LabelTwoFields";
import "react-datetime/css/react-datetime.css";
import TwoCheckbox1 from "./TwoCheckBox1";
import LabelOneField from "./LabelOneField";

function ExclusiveInitInfo( {nameBox} ){
    return(

        <div className="form-box">
            <h3>{nameBox}</h3>

            <LabelOneField 
                readOnly={true}
                labelText={"Correo Electrónico Laboral: "}
                inputId={"email"}
                inputPlaceholder={"E-mail Corporativo"}
                inputType={"text"}
            />

             <LabelTwoFields
                readOnly={true}
                labelText={"Cargo: "}
                inputId={""}
                inputPlaceholder={"Cargo Empleado"}
                inputType={"text"}

                labelText2={"Fecha de ingreso:"}
                inputId2={""}
                inputPlaceholder2={"Fecha de Ingreso Empleado"}
                inputType2={"text"}
            />

            <LabelTwoFields
                readOnly={true}
                labelText={"Proyecto:"}
                inputId={""}
                inputPlaceholder={"Proyecto"}
                inputType={"text"}
                

                labelText2={"Centro de Costos:"}
                inputId2={""}
                inputPlaceholder2={"Centro de Costos"}
                inputType2={"text"}
            />

            <LabelTwoFields
                readOnly={true}
                labelText={"Nivel de Riesgo (ARL):"}
                inputId={"level_risk"}
                inputPlaceholder={"Nivel de Riesgo"}
                inputType={"text"}

                labelText2={"Salario Asignado:"}
                inputId2={""}
                inputPlaceholder2={"Salario empleado"}
                inputType2={"text"}
            />

            <LabelTwoFields
                readOnly={true}
                labelText={"Jornada:"}
                inputId={""}
                inputPlaceholder={"MT / TC"}
                inputType={"text"}

                labelText2={"Estrato:"}
                inputId2={""}
                inputPlaceholder2={"social_stratum"}
                inputType2={"text"}
            />
            


        </div>
       
    );
}

export default ExclusiveInitInfo;
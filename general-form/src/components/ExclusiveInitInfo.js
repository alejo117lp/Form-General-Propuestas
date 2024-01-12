import React from "react";
import LabelOneField from "./LabelOneField";
import LabelTwoFields from "./LabelTwoFields";
import LabelThreeFields from "./LabelThreeFields";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import TestCode from "./Test";

function ExclusiveInitInfo( {nameBox} ){
    return(
        <div>
            <h3>{nameBox}</h3>
            <div className="form-box">
                <div className="box-date">
                    <div className="one-field-container">
                        <label>Fecha de ingreso: </label>
                        <DateTime className="date-time-props"
                        name="birth-date"
                        inputProps={{ placeholder: "dd/mm/aaaa" }}
                        dateFormat="DD/MM/YYYY"
                        timeFormat={false}
                        />
                    </div>
                    <div className="one-field-container">
                        <label>Cargo:</label>
                        <input name="place-birth" type="text" placeholder="Ingrese el cargo del empleado"></input>
                    </div>  
                </div>
                <LabelTwoFields
                    labelText={"Proyecto:"}
                    inputId={""}
                    inputPlaceholder={"Ingrese el proyecto"}
                    inputType={"text"}

                    labelText2={"Centro de Costos:"}
                    inputId2={""}
                    inputPlaceholder2={"Centro de Costos"}
                    inputType2={"text"}
                />

                <LabelTwoFields
                    labelText={"Nivel de Riesgo (ARL):"}
                    inputId={""}
                    inputPlaceholder={"Ingrese Nivel de Riesgo"}
                    inputType={"text"}

                    labelText2={"Salario Asignado:"}
                    inputId2={""}
                    inputPlaceholder2={"Salario empleado"}
                    inputType2={"text"}
                />

                <TestCode 
                    labelText0={"Jornada:"}

                    labelText={"MT:"}
                    inputId={""}
                    inputPlaceholder={""}
                    inputType={"checkbox"}

                    labelText2={"TC:"}
                    inputId2={""}
                    inputPlaceholder2={""}
                    inputType2={"checkbox"}

                    labelText3={"Estrato:"}
                
                />
            </div>
        </div>
    );
}

export default ExclusiveInitInfo;
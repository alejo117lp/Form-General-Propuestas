import React from "react";
import DateTime from "react-datetime";
import LabelOneField from "./LabelOneField";
import LabelTwoFields from "./LabelTwoFields";
import LabelThreeFields from "./LabelThreeFields";
import "react-datetime/css/react-datetime.css";
import LabelOneSelect from "./LabelOneSelect";

function PersonalInformation( {nameBox} ){
    return(
        <div className="form-box">
            <h3>{nameBox}</h3>
            <LabelOneField 
                labelText={"Nombre Completo: "}
                inputPlaceholder={"Nombre Completo"}
                inputId={"full_name"}
                inputType={"text"}
            />

            <div className="box-date">
                <div className="one-field-container">
                <label>Fecha de nacimiento: </label>
                    <DateTime className="date-time-props"
                    id="birth_date"
                    inputProps={{ placeholder: "aaaa/mm/dd" }}
                    dateFormat="YYYY/MM/DD"
                    timeFormat={false}
                    />
                </div>
                <div className="one-field-container">
                <label>Lugar de Nacimiento:</label>
                    <input id="birth_place" type="text" placeholder="Lugar de nacimiento"></input>
                </div>  
            </div>
            
            <LabelTwoFields
                labelText="Documento de Identidad:"
                inputPlaceholder="Número de documento"
                inputId={"id_document"}
                inputType={"text"}
                required={true}

                labelText2={"De: "}
                inputPlaceholder2={"Lugar de expedición"}
                inputId2={"city-id-document"}
                inputType2={"text"}
                required2={true}
            />

            <LabelOneSelect
                labelText={"Género:"} 
                initialOptions={['Masculino', 'Femenino']}
            />

            <LabelThreeFields 
                labelText="Libreta Militar:"
                inputPlaceholder="Número Libreta Militar"
                inputId={"military_document"}
                inputType={"number"}

                labelText2={"Clase:"}
                inputPlaceholder2={"Primera/Segunda"}
                inputId2={"military_document_class"}
                inputType2={"text"}

                labelText3={"Distrito:"}
                inputPlaceholder3={" ## "}
                inputId3={"military_document_district"}
                inputType3={"number"}
            />

            <LabelTwoFields 
                labelText={"No. Cuenta Bancaria:"}
                inputPlaceholder={"No. Cuenta"}
                inputId={"bank_account_number"}
                inputType={"number"}

                labelText2={"Entidad Bancaria: "}
                inputPlaceholder2={"Nombre Entidad Bancaria"}
                inputId2={"bank_name"}
                inputType2={"text"}
            />

            <LabelTwoFields 
                labelText={"Código (Si aplica):"}
                inputPlaceholder={"Código de tripulación"}
                inputId={"code-number"}
                inputType={"number"}

                labelText2={"RH: "}
                inputPlaceholder2={"RH"}
                inputId2={"blood_type"}
                inputType2={"text"}
            />
        </div>
    
    );
}

export default PersonalInformation;
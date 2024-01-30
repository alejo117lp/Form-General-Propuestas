import React from "react";
import LabelTwoFields from "./LabelTwoFields";
import "react-datetime/css/react-datetime.css";
import LabelOneField from "./LabelOneField";

function ExclusiveInitInfo( {nameBox, project} ){

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
                inputId={"employee_rol"}
                inputPlaceholder={"Cargo Empleado"}
                inputType={"text"}

                labelText2={"Fecha de ingreso:"}
                inputId2={"entry_date"}
                inputPlaceholder2={"Fecha de Ingreso Empleado"}
                inputType2={"text"}
            />

            <LabelTwoFields
                readOnly={true}
                labelText={"Proyecto:"}
                inputId={"employee_project "}
                inputPlaceholder={'Proyecto'}
                inputType={"text"}
                

                labelText2={"Centro de Costos:"}
                inputId2={"cost_center"}
                inputPlaceholder2={"Centro de Costos"}
                inputType2={"text"}
            />


            {project === 'ASEO' && (
                <LabelOneField 
                readOnly={true}
                labelText={"Zona: "}
                inputId={"employee_zone"}
                inputPlaceholder={"Zona asignada"}
                inputType={"text"}
                />
                )
            }
            
            {project === 'METRO' && (
                <LabelOneField 
                readOnly={true}
                labelText={"Código de Tripulación: "}
                inputId={"employee_code"}
                inputPlaceholder={"Código de tripulación empleado"}
                inputType={"text"}
                />
                )
            }

            <LabelTwoFields
                readOnly={true}
                labelText={"Nivel de Riesgo (ARL):"}
                inputId={"level_risk"}
                inputPlaceholder={"Nivel de Riesgo"}
                inputType={"text"}

                labelText2={"Salario Asignado:"}
                inputId2={"salario"}
                inputPlaceholder2={"Salario empleado"}
                inputType2={"text"}
            />

            <LabelTwoFields
                readOnly={true}
                labelText={"Jornada:"}
                inputId={"working_day"}
                inputPlaceholder={"MT / TC"}
                inputType={"text"}

                labelText2={"Estrato:"}
                inputId2={"social_stratum"}
                inputPlaceholder2={"Estrato Empleado"}
                inputType2={"text"}
            />
            
        </div>
       
    );
}

export default ExclusiveInitInfo;
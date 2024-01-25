import React from "react";
import LabelOneSelect from "./LabelOneSelect";


function EndowmentEmvariasForm( {nameBox} ){
  return(
    <div className='form-box'>
      <h3>{nameBox}</h3>  
      <div>
        <LabelOneSelect 
          labelText={'Estilo vestimenta:'}
          selectText={'Elija su estilo de dotación'}
          initialOptions={['Hombre', 'Mujer']}
        />
      </div>

    </div>
  );
}

export default EndowmentEmvariasForm;
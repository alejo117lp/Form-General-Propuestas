import React, {useState} from "react";
import LabelOneSelect from "./LabelOneSelect";


function EndowmentEmvariasForm( {nameBox} ){

  const pantManSize = ['28', '30', '32', '34', '36', '38','40', '42', '44', '46', '48'];
  const pantWomanSize = ['8', '10', '12', '14', '16', '18','20', '22', '24'];

  const shirtManSize = ['30', '32', '36', '38','40', '42', '44', '46', '52'];
  const shirtWomanSize = ['8', '10', '12', '14', '16', '18','20', '22', '24'];

  const [selectedStyle, setSelectedStyle] = useState('');

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  return(
    <div className='form-box'>
      <h3>{nameBox}</h3>  
      <div>
        <LabelOneSelect 
          labelText={'Estilo vestimenta:'}
          selectText={'Elija su estilo de dotación'}
          initialOptions={['Hombre', 'Mujer']}
          onChange={handleStyleChange}
        />

        {selectedStyle === 'Hombre' ? (
          <div> 
            <LabelOneSelect 
              labelText={"Talla Pantalón: "}
              selectText={"Seleccione su talla de Pantalón"}
              initialOptions= {pantManSize}
            />

            <LabelOneSelect 
              labelText={"Talla Camisa: "}
              selectText={"Seleccione su talla de Camisa"}
              initialOptions= {shirtManSize}
            />
          </div>
          
        ): (
          <div>
            <LabelOneSelect 
              labelText={"Talla Pantalón: "}
              selectText={"Seleccione su talla de Pantalón"}
              initialOptions= {pantWomanSize}
            />
            <LabelOneSelect 
              labelText={"Talla Camisa: "}
              selectText={"Seleccione su talla de Camisa"}
              initialOptions= {shirtWomanSize}
            />
          </div>
        )}


      </div>

    </div>
  );
}

export default EndowmentEmvariasForm;
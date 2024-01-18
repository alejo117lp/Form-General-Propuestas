import './App.css';
import Header from './components/Header';
import FormBox from './components/FormBox'; //No Borrar FormBox
import PersonalInformation from './components/PersonalInfo';
import HomeInformation from './components/HomeInfo';
import SocialSecurity from './components/SocialSecurity';
import ExclusiveInitInfo from './components/ExclusiveInitInfo';
import EndowmentInformation from './components/Endowment';
import React, { useState } from 'react';


function App() {


  const manSize = ['28', '30', '32', '34', '36', '38'];
  const womanSize = ['6', '8', '10', '12', '14', '16', '18'];

  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (gender) => {
    //console.log("Género seleccionado:", gender); // Debería mostrar 'Masculino' o 'Femenino'
    setSelectedGender(gender);
};

  const sizeOptions = selectedGender === 'Masculino' ? manSize : womanSize;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
        console.log('Formulario válido. Procesando envío...');
        // Aquí puedes procesar los datos del formulario
    } else {
        console.log('Formulario inválido. Por favor, completa todos los campos requeridos.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Header
          menu1="Inicio"
          menu2="Empleado"
          menu3="Personal Fundación"
        />
        <div className='principal-container'>
          <h1>Datos Generales</h1>
          <ExclusiveInitInfo 
            nameBox={"Información Administrativa"}
          />
          <br/>
          <PersonalInformation 
            nameBox={"Información Personal"}
            onGenderChange={handleGenderChange}
          />
          <br/>
          <HomeInformation 
            nameBox={"Información Domicilio"}
          />
          <br/>
          <SocialSecurity 
            nameBox={"Información  Seguridad Social"}
          />
          <br/>
          <EndowmentInformation
            nameBox={"Información Dotación"}
            gender={selectedGender}
            sizeOptions={sizeOptions}
          />
          <br/>
          <button className='principal-button' type="submit">Enviar</button>
        </div>
        <br/>
      </form>
      <br/>
    </div>
  );
}

export default App;

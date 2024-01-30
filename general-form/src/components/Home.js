import React from "react";
import Login from './Login';
function Home(){
  return(
    <div className='principal-container'>
      <Login 
        labelUsername={'Usuario:'}
        idUsername={'username'}
        usernamePlaceholder={'Ingresa tu usuario'}
        labelPassword={'Contraseña:'}
        idPassword={'password'}
        passwordPlaceholder={'Ingresa tu contraseña'}
      />
    </div>
  );
}

export default Home;
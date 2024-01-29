import React from "react";
import '../stylesheets/Login.css';


function Login( {labelUsername, labelPassword, idUsername, idPassword, 
                  usernamePlaceholder, passwordPlaceholder} ){
  return(
    <div className='secondary-container'>
      <div className='form-box-login'>
        <form className='Login-box'>
          <div className='register-container'>
            <label htmlFor={idUsername} type='text'>{labelUsername}</label>
            <input id={idUsername} type='text' placeholder={usernamePlaceholder} 
              required={true}/>
          </div>
          <div className='register-container'>
            <label>{labelPassword}</label>
            <input id={idPassword} type='password' placeholder={passwordPlaceholder}
              required={true}/>
          </div>
          <div className='register-container'>
            <button className='principal-button' type="submit">Iniciar Sesión</button>
          </div>
        </form>
    </div>
    </div>
    
  );
}

export default Login;
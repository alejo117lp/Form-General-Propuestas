import React, { useState } from 'react';
import FormBox from './FormBox';
import '../App.css';
import '../stylesheets/LabelOneField.css';
import '../stylesheets/UploadPicture.css';


function UploadPicture( {labelText} ){

  const [imageSrc, setImageSrc] = useState('#'); // Inicializa el estado para la imagen

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /*const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Aquí puedes añadir más lógica para manejar el envío del formulario
  };*/

  return(
     <form className='two-field-container' method="post" /*onSubmit={handleSubmit}*/>
      <div className='upload-pic-container'>
        <label className='label-upload-file'>{labelText}</label>
        <div>
          <input id='profile_picture_input' type="file" name="admin_picture" onChange={handleImageChange} />
          <i className='fa fa-camera'></i>
        </div>
        <div className='clearfix'></div>
      </div>
      <div className='img-container'>
        <img src={imageSrc} id="profile_picture" alt="Uploaded" />
      </div>
      {/*<button className='btn btn-dark mt-15'>Upload Picture</button>*/}
    </form>
  );
}

export default UploadPicture;
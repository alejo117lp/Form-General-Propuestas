import React from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import '../stylesheets/PersonalInfo.css';

function PersonalInfo(){
  return(
    <div className="personal-info-container">
        <h3>Información Personal</h3>
        <div className="form-box">
          <form  className="info-box">
            <div className="labels-container data-row">
              <label>Nombre Completo:</label>
                <br/>
                <label>Fecha de Nacimiento:</label>
                <br/>
                <label>Documento de identidad:</label>
                <br/>
                <label>Libreta Militar: </label>
                <br/>
                <label>No. Cuenta Bancaria: </label>
                <br/>
                <label>Entidad Bancaria: </label>
                <br/>
                <label>Código (Solo si aplica): </label>
            </div>
            <div className="inputs-container date-row">
              <input name="name" type="text" placeholder="Nombre completo"></input>
              <br/>
              <div className="birth-info double-data">
                  <DateTime className="date-time-props"
                  name="birth-date"
                  inputProps={{ placeholder: "dd/mm/aaaa" }}
                  dateFormat="DD/MM/YYYY"
                  timeFormat={false}
                  />
                  <label className="intermediate-form-item">Lugar de Nacimiento:</label>
                  <input name="place-birth" type="text" placeholder="Lugar de nacimiento"></input>
              </div>
              <br/>
              <div className="id-info-box double-data">
                  <input name="id-document" type="text" placeholder="Número de Documento"></input>
                  <label className="intermediate-form-item-short"> De: </label>
                  <input name="city-id-document" type="text" placeholder="Lugar de Expedición"></input>
              </div>
              <br/>
              <div className="military-info-box double-data">
                  <input name="military-card" type="number" placeholder="Número libreta"></input>
                  <label className="intermediate-form-item-short-2">Clase:</label>
                  <input name="military-card-class" type="text" placeholder="Primera/Segunda"></input>
                  <label className="intermediate-form-item-short-2">Distrito:</label>
                  <input name="military-district" type="number" placeholder="Número distrito"></input>
              </div>
              <br/>
              <input name="bank-number" type="number" placeholder="Número Cuenta Bancaria"></input>
              <br/>
              <input name="bank" type="text" placeholder="Nombre Entidad Bancaria"></input>
              <br/>
              <div className="double-data">
                <input name="code-number" type="number" placeholder="Código de tripulación"></input>
                <label className="intermediate-form-item-short-2">RH:</label>
                <input name="rh" type="text" placeholder="RH"></input>
              </div>
            </div>
          </form>
        </div>
    </div>
   );
}

export default PersonalInfo;
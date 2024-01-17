import './App.css';
import Header from './components/Header';
import FormBox from './components/FormBox';
import PersonalInformation from './components/PersonalInfo';
import HomeInformation from './components/HomeInfo';
import SocialSecurity from './components/SocialSecurity';
import ExclusiveInitInfo from './components/ExclusiveInitInfo';

function App() {

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
          <button className='principal-button' type="submit">Enviar</button>
        </div>
        <br/>
      </form>
      <br/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import FormBox from './components/FormBox';
import PersonalInformation from './components/PersonalInfo';
import HomeInformation from './components/HomeInfo';
import SocialSecurity from './components/SocialSecurity';
import ExclusiveInitInfo from './components/ExclusiveInitInfo';

function App() {
  return (
    <div className="App">
      <Header
        menu1="Inicio"
        menu2="Empleado"
        menu3="Personal Fundación"
      />
      <div className='principal-container'>
        <h1>Datos Generales</h1>
        
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
      </div>
      <br/>
    </div>
  );
}

export default App;

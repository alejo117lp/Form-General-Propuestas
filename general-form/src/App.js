import './App.css';
import PersonalInfo from './components/personal-info';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header
        menu1="Inicio"
        menu2="Corporativo"
        menu3="Proyectos"
        menu4="Actualidad"
        menu5="Convocatorias"
        menu6="Contacto"
      />
      <div className='principal-container'>
        <h1>Datos Generales</h1>
        <PersonalInfo />
      </div>
    </div>
  );
}

export default App;

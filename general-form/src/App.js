import './App.css';
import Header from './components/Header';
import FormBox from './components/FormBox'; //No Borrar FormBox
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import GeneralForm from './components/GeneralForm';


function App() {
  
  return (
    <Router>
      <div className="App">
        <ResponsiveSidebar
          headerText={'Menú Navegación'}
          footerText={''}
        />
        <Header />
        <Routes>
          <Route path="/GeneralForm" element={<GeneralForm />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import FormBox from './components/FormBox'; //No Borrar FormBox
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInformation from './components/PersonalInfo';
import HomeInformation from './components/HomeInfo';
import SocialSecurity from './components/SocialSecurity';
import ExclusiveInitInfo from './components/ExclusiveInitInfo';
import EndowmentInformation from './components/Endowment';
import React, { useState } from 'react';
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

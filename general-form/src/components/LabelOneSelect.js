import React, { useState } from 'react';
import '../stylesheets/LabelOneSelect.css';



const LabelOneSelect = ({ initialOptions, labelText }) => {
    const [options] = useState(initialOptions || []);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return (
      <div className='select-label-container'>
        <div>
            <label>{labelText}</label>
        </div>
        <div className='select-container'>
            <select value={selectedOption} onChange={handleSelectChange}>
            <option value="" disabled>Selecciona una opción</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                {option}
                </option>
            ))}
            </select>
        </div>
      </div>
    );
  };
  
  export default LabelOneSelect;
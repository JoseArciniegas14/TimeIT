import React, { useState } from 'react';
import './globals.css';
import './css/styleguide.css';
import './css/style.css';
import './App.css'; // Asegúrate de importar tus estilos de Tailwind CSS según la configuración de tu proyecto

const App = () => {
  const [isLeft, setIsLeft] = useState(false);

  const handleSwitchClick = () => {
    setIsLeft((prevIsLeft) => !prevIsLeft);
  };

  return (
    <div>
      <div className={`alarm-container relative w-56 h-24 rounded ${isLeft ? 'left' : ''}`}>
        <div className="Time-set absolute h-8 font-medium text-white text-2xl text-center tracking-normal">4:50</div>
        <div className="time--day--night absolute h-4 font-medium text-white text-xs text-center tracking-normal">a. m.</div>
        <div className={`sphere-container absolute w-14 h-8 ${isLeft ? 'left' : ''}`}>
          <div className={`sphere relative w-6 h-6 ${isLeft ? 'left' : ''}`} onClick={handleSwitchClick}></div>
        </div>
        <img className="bell-fill absolute w-6 h-6" src="img/bell-fill.svg" alt="Bell" />
        <div className="Time-set-2 absolute h-4 font-medium text-white text-xs text-center tracking-normal">13h y 31m</div>
      </div>
    </div>

    
  );
};

export default App;

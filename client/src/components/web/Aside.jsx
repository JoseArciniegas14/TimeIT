

import { useState } from "react";
import { gsap } from "gsap";
import { Button } from "semantic-ui-react";

function Aside() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
    const aside = document.querySelector(".aside");
    gsap.to(aside, {
      width: isAsideOpen ? 0 : "100%",
      duration: 0.3,
      opacity: isAsideOpen ? 0 : 1,
    });
  };

  const createAlarm = () => {
    // Lógica para crear una alarma
  };

  const deleteAlarm = () => {
    // Lógica para eliminar una alarma
  };

  return (
    <>
      <div className={`aside ${isAsideOpen ? "open" : ""}`}>
        {/* Componente de Alarma */}
        <div className="alarm">
          {/* Contenido de la alarma */}
        </div>
        {/* Botones */}
        <div className="buttons">
          <Button
            onClick={createAlarm}
            color="blue"
            className="font-bold"
          >
            Crear Alarma
          </Button>
          <Button
            onClick={deleteAlarm}
            color="red"
            className="font-bold"
          >
            Eliminar Alarma
          </Button>
        </div>
      </div>

      <div className="box">
        <h2>Inicio</h2>
        <Button
          onClick={toggleAside}
          color="gray"
          className="font-bold"
        >
          Alternar Aside
        </Button>
      </div>
    </>
  );
}
  
export { Aside };




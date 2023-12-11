import "../../../css/web/Home.css";
import { IconoMenu1 } from "../IconoMenu1";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Bar = () => {
  const tituloRef = useRef(null);
  const iconoMenuRef = useRef(null);

  useEffect(() => {
    gsap.from(tituloRef.current, { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(iconoMenuRef.current, { opacity: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="recuadro">
      <div className="overlap">
        <div className="overlap-group mt-96 ml-96">
          <IconoMenu1
            ref={iconoMenuRef}
            className="logo-grande center ml-96"
            divClassName="logo-grande-2"
            divClassNameOverride="logo-grande-3"
            rectangleClassName="icono-menu-instance"
            rectangleClassNameOverride="design-component-instance-node"
          />
          <div ref={tituloRef} className="titulo mt-10 ml-96">TimeIT</div>
        </div>
      </div>
    </div>
  );
};

export { Bar };

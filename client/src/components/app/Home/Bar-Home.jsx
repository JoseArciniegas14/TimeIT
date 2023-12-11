import "../../../css/web/Home.css";
import { IconoMenu1 } from "../IconoMenu1";

const Bar = () => {
  return (
    <div className="recuadro">
      <div className="overlap">
        <div className="overlap-group mt-96 ml-96">
        <IconoMenu1
          className="logo-grande center ml-96"
          divClassName="logo-grande-2"
          divClassNameOverride="logo-grande-3"
          rectangleClassName="icono-menu-instance"
          rectangleClassNameOverride="design-component-instance-node"
        />
        <div className="titulo mt-10 ml-96">TimeIT</div>
      </div>

   
        </div>
      </div>
  
  );
};

export { Bar };

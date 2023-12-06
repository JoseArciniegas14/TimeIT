import { NavLink } from "react-router-dom";
import { BtnUser } from "./BtnUser";
import "../../css/inicio/style.css";


function HeaderNav() {
  return (
    <nav className="MENU relative w-full h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center justify-between h-16">
          <div className="flex-shrink-0">
          <div className="logo-with-text absolute w-48 h-12">
            <img className="icono-menu absolute w-12 h-12 top-0 left-0" src="client\src\assets\img\ICONO.svg" />
        <div className="titulo absolute h-10 font-semibold text-3xl text-center tracking-normal">TimeiT</div>
        </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 ">
              
              <NavLink
              
                to="/home"
                activeClassName="text-white"
                className="text-gray-300 text-xl hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md"
              >
                
                Inicio
              </NavLink>
              
              <NavLink
                to="/alarms"
                activeClassName="text-white"
                className="text-gray-300 text-xl hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md"
              >
                Recordatorios
              </NavLink>
              <NavLink
                to="/notes"
                activeClassName="text-white"
                className="text-gray-300 text-xl hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md"
              >
                Notas
              </NavLink>
              <NavLink
                to="/routines"
                activeClassName="text-white"
                className="text-gray-300 text-xl hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md"
              >
                Hábitos
              </NavLink>
            </div>
          </div>
          
        </div>
        <BtnUser />
      </div>
    </nav>
  );
}

export { HeaderNav };

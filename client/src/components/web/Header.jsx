import { NavLink } from "react-router-dom";
import { BtnUser } from "./BtnUser";
import "../../css/inicio/style.css";

function HeaderNav() {
  return (
    <nav className="MENU relative w-full h-24 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="logo-with-text absolute w-48 h-12">
              <svg
                className="icono-menu absolute w-12 h-12 top-0 left-0"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16.6665"
                  y="16.666"
                  width="25"
                  height="25"
                  rx="1"
                  stroke="#363636"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
                <rect
                  x="16.6665"
                  y="58.334"
                  width="25"
                  height="25"
                  rx="1"
                  stroke="black"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
                <rect
                  x="58.3335"
                  y="58.334"
                  width="25"
                  height="25"
                  rx="1"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
                <rect
                  x="58.3335"
                  y="16.666"
                  width="25"
                  height="25"
                  rx="1"
                  stroke="#878787"
                  strokeWidth="10"
                  strokeLinejoin="round"
                />
              </svg>

              
              <div className="titulo absolute h-10 font-semibold text-3xl text-center tracking-normal">
                TimeiT
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 ">
              <NavLink
                to="/home"
                activeClassName="text-white"
                className="text-gray-300 text-xl mt-7 hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md "
              >
                Inicio
              </NavLink>

        
              <NavLink
                to="/notes"
                activeClassName="text-white"
                className="text-gray-300 text-xl mt-7 hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md"
              >
                Notas
              </NavLink>
              <NavLink
                to="/routines"
                activeClassName="text-white"
                className="text-gray-300 text-xl mt-7 hover:text-white font-bold tracking-normal text-center no-underline px-3 py-2 rounded-md"
              >
                Hábitos
              </NavLink>
              <BtnUser />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { HeaderNav };

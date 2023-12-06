import { NavLink } from "react-router-dom";
import { BtnUser } from "./BtnUser";

function HeaderNav() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white">Navbar</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/home"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </NavLink>
              <NavLink
                to="/alarms"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Recordatorios
              </NavLink>
              <NavLink
                to="/notes"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Notas
              </NavLink>
              <NavLink
                to="/routines"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Hábitos
              </NavLink>
            </div>
          </div>
          <BtnUser />
        </div>
      </div>
    </nav>
  );
}

export { HeaderNav };

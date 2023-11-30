import { NavLink } from "react-router-dom";
import { BtnUser } from "./BtnUser";
import "./header.scss";

function HeaderNav() {
  return (
    <nav>
      <h1>Nabvar</h1>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/alarms"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Recordatorios
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Notas
      </NavLink>
      <NavLink
        to="/routines"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Habitos
      </NavLink>
      <BtnUser />
    </nav>
  );
}

export { HeaderNav };

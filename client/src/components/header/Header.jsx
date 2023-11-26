import { Link } from "react-router-dom";
import { BtnUser } from "../btnUser";
import "../scss/header.scss";

function HeaderNav() {
  return (
    <nav>
      <h1>Nabvar</h1>
      <Link to="/home">Inicio</Link>
      <Link to="/alarm">Recordatorios</Link>
      <Link to="/notes">Notas</Link>
      <Link to="/routines">Habitos</Link>
      <BtnUser />
    </nav>
  );
}

export { HeaderNav };

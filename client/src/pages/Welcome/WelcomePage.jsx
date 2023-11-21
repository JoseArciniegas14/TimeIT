import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage() {

  // Est funcion es solo un ejemplo mio para simular el viaje XD
  function goTo() {
    const Ruta = <Route path="/homepage/*"/>
    return Ruta
  }

  return (
    <div>
      <h3>Esta seria la pagina de inicio antes de un register/login (Esta pagina es Barbie puede ser lo que quiera ser)</h3>
      <p><br /></p>
      <p>De aqui se salta a dos direcciones depende el boton que el usuario elija</p>
      <p><br /></p>
      <p>1: Tipico Register (Pagina intermediaria para luego guardar coockies(si puedo) y luego a Home)</p>
      <button><Link to="/">Register(No "funciona" aun esta tronando xd)</Link></button>
      <p><br /></p>
      <p>2: Tipico Login (Voy a aprender sobre coockies para logeo directo que lo llevaria a la Home)</p>
      <button><Link to="/homepage">Login</Link></button>

    </div>
  )
}

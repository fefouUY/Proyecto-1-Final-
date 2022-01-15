import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <h1>Snesretrouy</h1>
             <nav>
            <ul id="main-nav" class="Navegation"></ul>
            <li>
            <Link to='/Home' >Home</Link>
            <Link to='/Analisis' >Analisis</Link>
            <Link to='/LoginForm' >Ingresar</Link>
            <Link to='/Historia' >Historia</Link>
            <Link to='/Carrito' >Carrito</Link>
            <Link to='/Contactos' >Contacto</Link>
            </li>
        </nav>
        </div>
  );
}

export default Navigation;

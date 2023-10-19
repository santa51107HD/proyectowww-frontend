import React from "react";
import { useLocation} from "react-router-dom";
import "./Comp_Contacto.css";

export function Comp_Contacto({ avatar, apodo, nombre, correo }) {
  const location = useLocation();
  const isContactosPage = location.pathname === "/contactos";

  const handleButtonClick = () => {
    if (isContactosPage) {
      // Lógica para eliminar el contacto

    } else {
      // Lógica para añadir el contacto

    }
  };

  return (
    <div>
      <section className="contenedor-contacto">
        <div className="contenedor-dividido-contacto">
          <div className="campo-item-cuenta">
            <img className="avatar-contacto" src={`../../../img/${avatar}.svg`} alt="icono"></img>
          </div>
          <div className="datos-contacto">
            <h3>Apodo: {apodo}</h3>
            <h3>Nombre: {nombre}</h3>
            <h3>Correo: {correo}</h3>
          </div>
          <div className="campo-item-cuenta">
            <button
              className={isContactosPage ? "boton-eliminar-contacto" : "boton-anadir-contacto"}
              onClick={handleButtonClick}
            >
              {isContactosPage ? "Eliminar Contacto" : "Añadir Contacto"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

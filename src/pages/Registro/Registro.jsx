import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import "./Registro.css";

export default function Registro() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (numero) => {
    setShowPopup(!showPopup);
    console.log(numero);
  };
  return (
    <div>
      <div className="campo-boton-registro">
        <Link to="/">
          <button className="boton-registro">Iniciar sesión</button>
        </Link>
      </div>
      <section className="contenedor-registro">
        <div className="cabecera-registro">
          <h1>Registrarse</h1>
        </div>
        <div className="formulario-registro">
          <div className="campo-registro">
            <input type="email" id="email" placeholder="Correo electrónico" />
          </div>
          <div className="campo-registro">
            <input type="text" id="nombre" placeholder="Nombre completo" />
          </div>
          <div className="campo-registro">
            <input type="text" id="apodo" placeholder="Apodo" />
          </div>
          <div className="campo-registro">
            <input type="password" id="contraseña" placeholder="Contraseña" />
          </div>
          <div className="campo-boton-registro">
            <div>
              <button className="boton-avatar-registro" onClick={togglePopup}>
                Seleccionar Avatar
              </button>
              {showPopup && (
                <section className="image-light show">
                  <div className="ventana-avatar">
                    <div>
                      <img
                        src="../../../male1.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("1")}
                      />
                      <img
                        src="../../../female1.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("2")}
                      />
                      <img
                        src="../../../male2.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("3")}
                      />
                      <img
                        src="../../../female2.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("4")}
                      />
                    </div>
                    <div>
                      <img
                        src="../../../male3.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("5")}
                      />
                      <img
                        src="../../../female3.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("6")}
                      />
                      <img
                        src="../../../male4.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("7")}
                      />
                      <img
                        src="../../../female4.svg"
                        className="agregar-imagen"
                        alt="Imagen en lightbox"
                        onClick={() => togglePopup("8")}
                      />
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
          <div className="campo-boton-registro">
            <button className="boton-continuar">Continuar</button>
          </div>
        </div>
      </section>
    </div>
  );
}

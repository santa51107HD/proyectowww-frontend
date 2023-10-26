import React, { useState } from "react";
import { Base } from "../../components/Base/Base.jsx";
import "./Eventos.css";

export default function Eventos() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (numero) => {
    setShowPopup(!showPopup);
  };
  return (
    <div>
      <Base titulo="Eventos" />
      <div className="campo-boton-registro">
        <div>
          <button className="boton-crear-eventos" onClick={togglePopup}>
            Crear Evento
          </button>
          {showPopup && (
            <section className="image-light show">
              <div className="ventana-avatar">
                <div className="campo-crear-eventos">
                  <input
                    className="texto-crear-eventos a"
                    type="text"
                    id="nombre-evento"
                    placeholder="Nombre del evento"
                  />
                </div>
                <div>
                  <textarea
                    className="texto-crear-eventos"
                    id="customTextarea"
                    rows="10"
                    cols="23"
                    placeholder="Descripcion"
                  ></textarea>
                </div>
                <div className="campo-crear-eventos">
                  <input
                    className="texto-crear-eventos"
                    type="text"
                    id="tipo-evento"
                    placeholder="Tipo de evento"
                  />
                </div>
                <div>
                    <p>Selecciona un icono</p>
                </div>
                <div>
                  <img
                    src="../../../male1.svg"
                    className="agregar-imagen"
                    alt="Imagen en lightbox"
                  />
                  <img
                    src="../../../female1.svg"
                    className="agregar-imagen"
                    alt="Imagen en lightbox"
                  />

                </div>
                <div className="campo-crear-eventos">
                <img
                    src="../../../male2.svg"
                    className="agregar-imagen"
                    alt="Imagen en lightbox"
                  />
                  <img
                    src="../../../female2.svg"
                    className="agregar-imagen"
                    alt="Imagen en lightbox"
                  />
                </div>
                <div>
                  <button className="boton-crear-eventos" onClick={togglePopup}>Crear Evento</button>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

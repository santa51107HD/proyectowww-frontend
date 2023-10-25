import React, { useState } from "react";
import "./Avatar.css"

export function Avatar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (numero) => {
    setShowPopup(!showPopup);
    console.log(numero)
  };

  return (
    <div>
      <button onClick={togglePopup}>Seleccionar Avatar</button>
      {showPopup && (
        <section className="image-light show">
          <div className="ventana-avatar">
          <div>
          <img
            src="../../../male1.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("1")}
          />
          <img
            src="../../../female1.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("2")}
          />
          <img
            src="../../../male2.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("3")}
          />
          <img
            src="../../../female2.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("4")}
          />
          </div>
          <div>
          <img
            src="../../../male3.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("5")}
          />
          <img
            src="../../../female3.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("6")}
          />
          <img
            src="../../../male4.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("7")}
          />
          <img
            src="../../../female4.svg"
            className="agregar-imagen"
            alt="Imagen en lightbox"
            onClick={()=>togglePopup("8")}
          />
          </div>
          </div>
        </section>
      )}
    </div>
  );
}
import React, { useState, useEffect, useRef } from "react";
import "./Base.css";

export function Base({ titulo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    // Detener la propagación del evento para que no llegue al documento y que no se cierre el menu debido al closeMenu
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    console.log("toggleMenu");
  };

  const closeMenu = (event) => {
    if (isMenuOpen && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      console.log("closeMenu");
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <div>
        <img
          src="../../../img/bx-menu-alt-right.svg"
          className={`hamburger`}
          onClick={toggleMenu}
          //Alt, si no carga la imagen se muestra esto
          alt="Hamburger Menu"
        />
        <nav
          className={`menu-navegacion ${isMenuOpen ? "spread" : ""}`}
          ref={menuRef}
        >
          <a href="/">Inicio</a>
          <a href="/cuenta">Cuenta</a>
          <a href="/contactos">Contactos</a>
          <a href="/eventos">Eventos</a>
        </nav>
      </div>
      <div className="contenedor head">
        <h1>{titulo}</h1>
      </div>
    </div>
  );
}

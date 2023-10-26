import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../components/Avatar/Avatar";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../../api/django.api";
import "./Registro.css";

export default function Registro() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePopup = (numero) => {
    setShowPopup(!showPopup);
    setSelectedAvatar(numero);
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!selectedAvatar) {
      alert("Debes seleccionar un avatar");
      return;
    }
    // Incluye el campo del avatar en los datos del formulario
    const formData = { ...data, avatar: selectedAvatar };
    //console.log(formData);
    const res = await crearUsuario(data)
    console.log(res)
  });

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
          <form onSubmit={onSubmit}>
            <div className="campo-registro">
              <input type="email" id="email" placeholder="Correo electrónico" {...register("email", {required:  true})}/>
              {errors.email && <span>Este campo es requerido</span>}
            </div>
            <div className="campo-registro">
              <input type="text" id="nombre" placeholder="Nombre completo" {...register("nombre", {required:  true})}/>
              {errors.nombre && <span>Este campo es requerido</span>}
            </div>
            <div className="campo-registro">
              <input type="text" id="apodo" placeholder="Apodo" {...register("apodo", {required:  true})}/>
              {errors.apodo && <span>Este campo es requerido</span>}
            </div>
            <div className="campo-registro">
              <input type="password" id="contraseña" placeholder="Contraseña" {...register("password", {required:  true})}/>
              {errors.password && <span>Este campo es requerido</span>}
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
                          onClick={() => togglePopup("male1")}
                          {...register("avatar", {required:  true})}
                        />
                        <img
                          src="../../../female1.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("female1")}
                        />
                        <img
                          src="../../../male2.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("male2")}
                        />
                        <img
                          src="../../../female2.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("female2")}
                        />
                      </div>
                      <div>
                        <img
                          src="../../../male3.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("male3")}
                        />
                        <img
                          src="../../../female3.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("female3")}
                        />
                        <img
                          src="../../../male4.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("male4")}
                        />
                        <img
                          src="../../../female4.svg"
                          className="agregar-imagen"
                          alt="Imagen en lightbox"
                          onClick={() => togglePopup("female4")}
                        />
                      </div>
                    </div>
                  </section>
                )}
              </div>
              {selectedAvatar === "" && <span>Debes seleccionar un avatar</span>}
            </div>
            <div className="campo-boton-registro">
              <button className="boton-continuar">Continuar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

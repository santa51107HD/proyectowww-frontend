import { Base } from "../../components/Base/Base.jsx";
import "./Cuenta.css";

export default function Cuenta() {
  return (
    <div>
      <Base titulo="Cuenta" />
      <section className="contenedor-cuenta">
      <div className="campo-boton-cuenta">
      <button className="boton-inactivar-cuenta">Inactivar Cuenta</button>
      </div>
        <div className="contenedor-dividido-cuenta">
          <div className="contenedor-avatar-cuenta">
            <img src="../../../images/perfil.png" alt="Servicio"></img>
            <button className="boton-cambiar">Cambiar Avatar</button>
          </div>
          <div className="contenedor-datos-cuenta">
            <form className="formulario-cuenta">
              <div className="campo">
                <h3 className="">Correo electrónico</h3>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="campo">
                <h3>Nombre completo</h3>
                <input type="text" id="nombre" placeholder="Pepito Pérez" />
              </div>
              <div className="campo">
                <h3>Apodo</h3>
                <input type="text" id="apodo" placeholder="Pipe" />
              </div>
              <div className="campo">
                <h3>Contraseña</h3>
                <input
                  type="password"
                  id="contraseña"
                  placeholder="*********"
                />
              </div>
              <div className="campo-boton-cuenta">
              <button className="boton-guardar-cuenta">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

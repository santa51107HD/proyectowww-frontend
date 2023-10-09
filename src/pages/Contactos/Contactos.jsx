import { Base } from "../../components/Base/Base.jsx";
import "./Contactos.css";

export default function Contactos() {
    return(    
        <div>
        <Base titulo="Contactos" />
        <section className="buscador-contactos">
            <div className="contenedor-datos-contactos">
                <input className="input-contactos" type="text" id="correo-inicio" placeholder="Buscar contactos por su correo" />
                <div className="">
              <button className="boton-buscar-contactos">Buscar</button>
              </div>
            </div>
            
        </section>
        </div>
        )

}
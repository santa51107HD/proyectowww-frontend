import { Base } from "../../components/Base/Base.jsx";
import "./Inicio.css";

export default function Inicio() {
    return(    
        <div>
        <Base titulo="Inicio" />
        <section className="buscador-inicio">
            <div className="contenedor-datos-inicio">
                <input className="input-inicio" type="text" id="correo-inicio" placeholder="Añadir contactos por su correo" />
                <div className="">
              <button className="boton-buscar-inicio">Buscar</button>
              </div>
            </div>
            
        </section>
        </div>
        )

}
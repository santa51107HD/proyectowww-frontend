import { Base } from "../../components/Base/Base.jsx";
import { Comp_Contacto } from "../../components/Comp_Contacto/Comp_Contacto.jsx";
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
        <Comp_Contacto avatar="female1" apodo="Mafe" nombre="Maria Fernanda" correo="mafe@gmail.com"/>
        </section>
        </div>
        )

}
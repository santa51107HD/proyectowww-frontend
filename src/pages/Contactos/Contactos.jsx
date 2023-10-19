import { Base } from "../../components/Base/Base.jsx";
import { Comp_Contacto } from "../../components/Comp_Contacto/Comp_Contacto.jsx";
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
        <Comp_Contacto avatar="male1" apodo="Pepe" nombre="Pepito" correo="pepe@gmail.com"/>
        <Comp_Contacto avatar="female2" apodo="Peppa" nombre="Pepita" correo="pepa@gmail.com"/>
        </section>
        </div>
        )

}
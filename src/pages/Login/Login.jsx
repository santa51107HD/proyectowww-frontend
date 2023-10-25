import React from "react";
import {Link} from "react-router-dom";
import "./Login.css";

export default function Login(){
    return(
        <div>
            <div className="campo-boton-login">
                <Link to= "/registro">
                    <button className="boton-login">Registrarse</button>
                </Link>
            </div>
            <section className="contenedor-login">
                <div className="cabecera-login">
                    <h1>Inicia sesión</h1>
                </div>
                <form className="formulario-login">
                    <div className="campo-login">
                        <input
                            type ="email"
                            id= "email"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="campo-login">
                        <input
                            type ="password"
                            id= "contraseña"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="campo-boton-login">
                        <button className="boton-continuar-login">Continuar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
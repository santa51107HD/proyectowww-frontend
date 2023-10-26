import React from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { logearse } from "../../api/django.api";
import "./Login.css";

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        // Incluye el campo del avatar en los datos del formulario
        console.log("Data",data);
        const res = await logearse(data)
        console.log(res)
      });

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
                <form className="formulario-login" onSubmit={onSubmit}>
                    <div className="campo-login">
                        <input
                            type ="email"
                            id= "email"
                            placeholder="Correo electrónico"
                            {...register("email", {required:  true})}
                        />
                        {errors.email && <span>Este campo es requerido</span>}
                    </div>
                    <div className="campo-login">
                        <input
                            type ="password"
                            id= "contraseña"
                            placeholder="Contraseña"
                            {...register("password", {required:  true})}
                        />
                        {errors.password && <span>Este campo es requerido</span>}
                    </div>
                    <div className="campo-boton-login">
                        <button className="boton-continuar-login">Continuar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
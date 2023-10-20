import "./Registro.css";

export default function Registro(){
    return(
        <div>
            <div className="campo-boton-registro">
                <button className="boton-registro">Iniciar sesión</button>
            </div>
            <section className="contenedor-registro">
                <div className="cabecera-registro">
                    <h1>Registrarse</h1>
                </div>
                <form className="formulario-registro">
                    <div className="campo">
                        <input
                            type ="email"
                            id= "email"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="campo">
                        <input
                            type ="text"
                            id= "nombre"
                            placeholder="Nombre completo"
                        />
                    </div>
                    <div className="campo">
                        <input
                            type ="text"
                            id= "apodo"
                            placeholder="Apodo"
                        />
                    </div>
                    <div className="campo">
                        <input
                            type ="password"
                            id= "contraseña"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="campo-boton-registro">
                        <button className="boton-registro">Seleccione un avatar</button>
                     </div>
                    <div className="campo-boton-registro">
                    <button className="boton-continuar">Continuar</button>
                    </div>
                </form>
            </section>

        </div>
    );

}
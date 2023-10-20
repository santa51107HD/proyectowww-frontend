import "./Registro_Avatar.css";

export default function Registro_Avatar(){
    return(
        <div className="contenedor-registro-avatar">
            <div>
                <img className="avatar" src={`../../../images/male1.svg`}></img>
                <img className="avatar" src={`../../../images/female1.svg`}></img>
                <img className="avatar" src={`../../../images/male2.svg`}></img>
                <img className="avatar" src={`../../../images/female2.svg`}></img>
            </div>
            <div>
                <img className="avatar" src={`../../../images/male3.svg`}></img>
                <img className="avatar" src={`../../../images/female3.svg`}></img>
                <img className="avatar" src={`../../../images/male4.svg`}></img>
                <img className="avatar" src={`../../../images/female4.svg`}></img>
            </div>
        </div>
    );
}
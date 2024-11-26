import { useState } from "react";
import Child from "./Child";

export default Parent;
function Parent(){
    const[mensajeHijo,setMensajeHijo] = useState("");
    function mostrarRespuesta(mensajeDesdeHijo){
        setMensajeHijo(mensajeDesdeHijo);
    }

    return(

    <div>
        <h2>Este es el componente padre</h2>
        <Child mensajeDePadre="Esto es un mensaje desde el padre" onRecibirMensaje={mostrarRespuesta}/>
        <p>Este es el mensaje del hijo: {mensajeHijo}</p>
    </div>
    );
}
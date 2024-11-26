export default Child;
import Parent from "./Parent";

function Child({mensajeDePadre, onRecibirMensaje}){
    const mensajeParaPadre = "Hola desde hijo";

    function enviarAPadre(){
        onRecibirMensaje(mensajeParaPadre);
    }
    return(
        <div>
            <h3>Este es el componente hijo</h3>
            <p>Este es el mensaje que ha enviado el padre: {mensajeDePadre}</p>
            <button onClick={enviarAPadre}>Enviar mensaje al padre</button>
        </div>
    );
}
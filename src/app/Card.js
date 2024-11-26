export default Card;

function Card({titulo,descripcion,imagen}){
    return(
        <div>
            <h1>Ejercicio 2</h1>
            <h3>{titulo}</h3>
            <h5>{descripcion}</h5>
            <img src = {imagen}/>
        </div>
    );

}
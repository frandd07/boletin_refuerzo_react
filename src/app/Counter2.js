
import { useState } from "react";
export default function Counter2(){
    const[contador, setContador] = useState(0);
    return(
        <>
        <h1>Ejercicio 9</h1>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        <p>{contador}</p>
        </>
    );
}
import { useState } from "react";
export default function LoginControl(){
    const[login, setLogin] = useState(false);
    return(
    <>
    <h1>Ejercicio 10</h1>
    <button onClick={() => setLogin(!login)}>
        {login ? "Iniciar sesión" : "Cerrar sesión"}
    </button>
    </>
    );
}
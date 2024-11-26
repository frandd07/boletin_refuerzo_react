import { useState } from "react";

export default function ContactForm(){
const [nombre,setNombre] = useState("");
const [correo,setCorreo] = useState("");
const [mensaje,setMensaje] = useState("");
const [exito, setExito] = useState(false);

const enviarFormulario = (e) => {
    e.preventDefault();
    if(nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === ""){
        setExito(false);
        alert("Rellena todos los campos");
        return;
    } 
    setExito(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
};


return(
    <>
    <h1>Ejercicio 12</h1>
    <h3>Formulario de contacto</h3>
    <form onSubmit={enviarFormulario}>
        <label>Nombre </label>
        <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
        />
        <br/>
        <label>Correo Electrónico </label>
        <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        placeholder="Escribe tu correo electrónico"/>
        <br/>
        <label>Mensaje </label>
        <textarea
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje"/>
        <br/>
        <br/>
        <button>Enviar</button>
    </form>
    </>
    
);
}
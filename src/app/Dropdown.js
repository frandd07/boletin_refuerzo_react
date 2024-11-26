import { useState } from "react";

export default function Dropdown() {
  const opciones = ["Rojo", "Amarillo", "Verde", "Naranja", "Morado"];
  const [seleccionado, setSeleccionado] = useState("");

  return (
    <>
      <h1>Ejercicio 14</h1>
      <select value={seleccionado} onChange={(e) => setSeleccionado(e.target.value)}>
        <option value="" disabled>
          Selecciona un color
        </option>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      {seleccionado && <p>Has seleccionado: {seleccionado}</p>}
    </>
  );
}

import { useState } from "react";

export default function ShoppingList() {
  const productos = ["Lápiz", "Bolígrafo", "Carpeta", "Folio", "Borrador", "Ordenador"];
  const [lista, setLista] = useState(productos);
  const eliminarProducto = (producto) => {
    setLista(lista.filter((item) => item !== producto));
  };


  return (
    <>
      <h1>Ejercicio 13</h1>
      <h4>Lista de cosas para el colegio</h4>
      <ul>
        {lista.map((producto, index) => (
          <li key={index}>
            {producto} 
            <button 
              onClick={() => eliminarProducto(producto)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

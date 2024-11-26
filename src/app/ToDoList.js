import { useState } from "react";

export default function ToDoList() {
  const [lista, setLista] = useState([]);
  const [tarea, setTarea] = useState("");

  const anadirTarea = () => {
    if (tarea.trim() === "") return;
    setLista([...lista, { texto: tarea, completada: false }]);
    setTarea("");
  };

  const eliminarTarea = (tarea) => {
    setLista(lista.filter((item) => item.texto !== tarea));
  };

  const completarTarea = (tarea) => {
    setLista(
      lista.map((item) =>
        item.texto === tarea ? { ...item, completada: !item.completada } : item
      )
    );
  };

  return (
    <>
      <h1>Ejercicio 8</h1>
      <h4>Lista de la compra</h4>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Añadir tarea"
      />
      <button onClick={anadirTarea}>Añadir tarea</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completada}
              onChange={() => completarTarea(item.texto)}
            />
            <span
              style={{ textDecoration: item.completada ? "line-through" : "none" }}
            >
              {item.texto}
            </span>
            <button onClick={() => eliminarTarea(item.texto)}>Eliminar tarea</button>
          </li>
        ))}
      </ul>
    </>
  );
}

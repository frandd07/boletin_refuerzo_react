export default App2;
import UserCard from "./UserCard";

function App2(){
    const usuarios = [
        { nombre: 'Manuloko', edad: 61, email: 'manuloko@gmail.com' },
        { nombre: 'Pepepino', edad: 43, email: 'erpepino@gmail.com' },
        { nombre: 'Castor', edad: 35, email: 'castorfeo@hotmail.com' }
      ];


    return(
        <div>
            <h1>Ejercicio 5</h1>
            <h3>Lista de mis colegones</h3>
             {usuarios.map((usuario,id) => (
                <div key={id}>
                <UserCard nombre={usuario.nombre} edad={usuario.edad} email={usuario.email}/>
                </div>
             ))}
        </div>
    );
}
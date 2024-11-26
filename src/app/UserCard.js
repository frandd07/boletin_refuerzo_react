export default UserCard;

function UserCard({nombre,edad,email}){
    return(
        <div>
        <h2>Nombre: {nombre} </h2>
        <p>Edad: {edad}</p>
        <p>Email: {email}</p>
        </div>
      
    );
}
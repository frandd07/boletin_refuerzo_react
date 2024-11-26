export default Product;
function Product({nombre,precio,descripcion}){
    return(
        <div>
        <h1>Ejercicio 4</h1>
        <h3>{nombre}</h3>
        <p>Precio: {precio}</p>
        <p>Descrpcion: {descripcion}</p>
        </div>
    );
}
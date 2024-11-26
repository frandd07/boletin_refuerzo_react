
export default function ImageGallery(){
const imagenes = [
    {src: "https://www.ibercaja.es/public/img/tarjetas/tarjeta-visa-mas-one.png"},
    {src: "https://www.ibercaja.es/public/img/tarjetas/tarjeta-visa-mas-one.png"},
    {src: "https://www.ibercaja.es/public/img/tarjetas/tarjeta-visa-mas-one.png"},
];

return(
    <>
    <h1>Ejercicio 15</h1>
    <h3>Galería de imágenes</h3>
    <div>
        {imagenes.map((imagen,index) => {
           return <img key={index} src={imagen.src}/>
        })};
    </div>

    </>
);
}
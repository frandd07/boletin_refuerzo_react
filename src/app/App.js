import Card from "./Card";

export default App;
function App(){
    return(
        <div>
            <Card titulo = "Tarjeta 1" 
            descripcion = "Visa azul" 
            imagen = "https://www.ibercaja.es/public/img/tarjetas/tarjeta-visa-mas-one.png"/>
            
            <Card 
            titulo = "Tarjeta 2" 
            descripcion = "Tarjeta de crédito" 
            imagen="https://www.mastercard.es/content/dam/public/mastercardcom/eu/es/images/Consumidores/escoge-tu-tarjeta/credito/credito-world/1280x720-mc-sym-card-wrld-ci-5BIN-mm.png"/>
        </div>
        
    );
}
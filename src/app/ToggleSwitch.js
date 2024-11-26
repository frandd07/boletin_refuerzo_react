import { useState } from "react";

export default function ToogleSwitch(){
    const [isOn, setIsOn] = useState(false);
   
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
    
    return(
        <>
        <h1>Ejercicio 7</h1>
        <button onClick={toggleSwitch}>
        {isOn ? "ON" : "OFF"}
    </button>
        </>
    );
}
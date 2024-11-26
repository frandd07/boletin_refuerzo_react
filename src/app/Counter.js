"use client"
export default Counter;
import React,{ useState } from 'react';

function Counter(){

    const[contador,setContador] = useState(0);

    function click(){
        setContador(contador+1);
    }
    return(
        <>
        <h1>Ejercicio 3</h1>
        <button onClick={click}>Click!</button>
        <p>{contador}</p>
        
        </>
        
    );
}
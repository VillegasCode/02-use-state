// Importando el hook useState
import React, {useState} from 'react'

export const MiPrimerEstado = () => {
  
    //Problemática
    // let nombre = "Alex Villegas";

    // const cambiarNombre = e => {
    //     nombre = "Evita Velarde";
    // };
  

    //Desestructurando un hook useState según la problemática anterior

    const [ nombre, setNombre ] = useState("Evita Bonita");

    const cambiarNombre = e => {
        setNombre("Erick Villegas");
    }

    return (
    <div>
        
        <h3>COMPONENTE: MiPrimerEstado</h3>
        <strong>
            //Arriba esta desestructurado con el HOOk useState
            {nombre}
        </strong>
        &nbsp;
        <button id='cambiar' onClick={ cambiarNombre }>Cambiar</button>
    </div>
  )
}

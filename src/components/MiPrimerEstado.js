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

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target)
    }

    return (
    <div>
        
        <h3>COMPONENTE: MiPrimerEstado</h3>
        <strong className='label'>
            {/* //Arriba esta desestructurado con el HOOk useState */}
            {nombre}
        </strong>
        &nbsp;
        <button id='cambiar' onClick={ e => cambiarNombre(e, "Erick") }>
                    Cambiar Nombre
        </button>

        &nbsp;
        {/* Con e.target.value estoy pasándole el valor que tiene allí mismo el propio input*/}
        {/* <input onKeyUp={ e => cambiarNombre(e, e.target.value) } placeholder="Escribe tu nombre..." ></input> */}
        
        {/* El input hace lo mismo que el keyDown pero de forma más instantánea */}
        <input onChange={ e => cambiarNombre(e, e.target.value) } placeholder="Escribe tu nombre..." ></input>
    </div>
  )
}

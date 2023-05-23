import React from 'react'

export const MiPrimerEstado = () => {
  
    let nombre = "Alex Villegas";

    const cambiarNombre = e => {
        nombre = "Evita Velarde";
    };
  
    return (
    <div>
        
        <h3>COMPONENTE: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>

        <button onClick={ cambiarNombre }Cambiar></button>
    </div>
  )
}

import React from 'react'

export const EjercicioComponent = ({year}) => {
  return (
    <div>
        <h2>Ejercicio con Eventos y useState</h2>
        <strong className='label label-green'>
            {year}
        </strong>
    </div>
  )
}

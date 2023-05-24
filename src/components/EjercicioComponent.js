import React, {useState} from 'react'
// IMPORTAMOS PROP TYPES
import PropTypes from "prop-types";

export const EjercicioComponent = ({year}) => {
  
  // Convirtiendo nuestra variable en reactiva
  const [yearNow, setYearNow] = useState(year);

  // Aumentar el año de 1 en 1
  const siguiente = e => {
    setYearNow(yearNow + 1);
  }

  // Reducir el año de 1 en 1
  const anterior = e => {
    setYearNow(yearNow - 1);
  }

  //Restablecer a año actual
  const fecha = new Date();
  let yearActual = e => {
    yearActual = fecha.getFullYear();
    setYearNow(yearActual); 
  }
  
  // Validar si el dato ingresado en el input es un número entero
  const cambiarYear = e => {
    //Con parseInt convertimos el número ingresado por teclado a INTEGER
    let dato = parseInt(e.target.value);

    //validamos con un if
    if (Number.isInteger(dato)){
      setYearNow(dato);
    } else {
      setYearNow(year);
    }
  }

  return (
    <div>
        <h2>Ejercicio con Eventos y useState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>
        <p>
          <button onClick={anterior}>Anterior</button>
          &nbsp;
        <button onClick={siguiente}>Siguiente</button>
          &nbsp;
        <button onClick={yearActual}>Reset</button>
        </p>
        <p>Cambiar año:
          <input
              onChange={ cambiarYear }
              type='text'
              placeholder='Cambia el año'>
          </input>
        </p>
    </div>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired,
}

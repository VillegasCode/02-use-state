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
    </div>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired,
}

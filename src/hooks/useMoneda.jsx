import React, { Fragment, useState } from 'react'

const useMoneda = (label, stateInicial, opciones) => {

    //* state del custom hook
    const [state, actualizarState] = useState(stateInicial)
    
    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
            <option value="">--- Seleccionar</option>
            {   
                opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))
            }
            </select>
        </Fragment>
    );

    //* devuelve state, interfaz y funcion
    return [state, Seleccionar, actualizarState]
    
}

export default useMoneda;

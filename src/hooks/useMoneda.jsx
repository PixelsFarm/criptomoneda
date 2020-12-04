import React, { Fragment, useState } from 'react'

const useMoneda = () => {

    //* state del custom hook
    const [state, actualizarState] = useState()
    
    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
            <option value="MXN" selected="selected">Peso Mexicano</option>
            <option value="US">$</option>
            </select>
        </Fragment>
    );

    //* devuelve state, interfaz y funcion
    return [state, Seleccionar, actualizarState]
    
}

export default useMoneda;

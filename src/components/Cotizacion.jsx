import React from 'react'

const Cotizacion = ({resultado}) => {
    
    if (Object.keys(resultado).length === 0) return null;

    return (
        <div>
            <p>Cotización: <span>{resultado.PRICE}</span></p>
            <p>Cotización más alta del día: <span>{resultado.HIGHDAY}</span></p>
            <p>Cotización más baja del día: <span>{resultado.LOWDAY}</span></p>
            <p>Variación durante las últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{resultado.LASTUPDATE}</span></p>
        </div>
    );
}
 
export default Cotizacion;
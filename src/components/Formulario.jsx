import React, { useEffect, useState } from 'react'
import useCriptomoneda from '../hooks/useCriptomoneda'
import useMoneda from '../hooks/useMoneda'
import styled from '@emotion/styled';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #326ac0;
    }
`

const Formulario = () => {

    //* state listado Criptomonedas
    const [ listacripto, guardarCriptomonedas ] = useState([])
    const [error, guardarError] = useState(false)

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar EEUU' },
        { codigo: 'MXN', nombre: 'Peso mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ]

    //* sacamos y pasamos datos de useMoneda
    const [ moneda, SelectMonedas ] = useMoneda('Elige tu moneda', '', MONEDAS);
    
    //* sacamos y pasamos datos de criptomeneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda', '', listacripto)

    //* llamada a API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            //console.log(resultado.data.Data)
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    //* al hace submit
    const cotizarMoneda = e => {
        e.preventDefault()

        //* validación
        if (moneda === '' || criptomoneda === '') {
            guardarError(true)
            return
        }

        //* pasar datos a componente principal
        guardarError(false)
    }

    return (
        <form onSubmit={cotizarMoneda}>

            { error ? 'hay un error' : null }

            <SelectMonedas />

            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;
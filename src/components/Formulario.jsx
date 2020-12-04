import React, { Fragment, useState } from 'react'
import useMoneda from '../hooks/useMoneda'
import styled from '@emotion/styled';

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

    //* sacamos datos de useMoneda
    const [ moneda, SelectMonedas, actualizarState ] = useMoneda();
    console.log(SelectMonedas)


    return (
        <form>
            <SelectMonedas />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;
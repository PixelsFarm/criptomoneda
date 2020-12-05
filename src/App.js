import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from '@emotion/styled';
import Formulario from "./components/Formulario";
import imagen from './cryptomonedas.png';

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;

	@media (max-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Imagen = styled.img`
	max-width: 100%;
	margin-top: 5rem;
`;

const Heading = styled.h1`
	font-family: 'Bebas Neue', cursive;
	color: #ffffff;
	text-align: left;
	font-weight: 700;
	font-size: 50px;
	margin-bottom: 50px;
	margin-top: 80px;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		display: block;
		background-color: #66A2FE;
	}
`;

function App() {

	const [moneda, guardarMoneda] = useState('')
	const [criptomoneda, guardarCriptomoneda] = useState('')

	useEffect(() => {

		const cotizarCriptomoneda = async () => {
			//* prevenimos calculo justo después de cargar aplicación
			if (moneda === '') return

			//console.log('cotizando...')
			//* consultar api para cotización
			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
			const resultado = await axios.get(url)
			console.log(resultado.data.DISPLAY[criptomoneda][moneda])
		}
		cotizarCriptomoneda()

	}, [moneda, criptomoneda])

	return (
		<Contenedor>
			<div>
				<Imagen 
				src={imagen} 
				alt="imagen cripto"
				/>
			</div>

			<Heading>
				Cotiza Criptomendas al instante
			</Heading>

			<Formulario 
				guardarMoneda={guardarMoneda}
				guardarCriptomoneda={guardarCriptomoneda}
			/>
		</Contenedor>
	);
}

export default App;

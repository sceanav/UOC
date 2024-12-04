import { useRef } from "react";

const App = () => {
	const contenidoInput = useRef();
	const divRef = useRef();

	const cambio = (valor) => {
		const cambio = valor * 1.2;
		console.log(cambio);
		return cambio;
	};

	divRef.current.innerHTML = valorCambio;
	return (
		<div>
			<input type="number" ref={contenidoInput} />
			<button onclick={cambio(contenidoInput)}></button>
			<div ref={divRef}></div>
		</div>
	);
};

export default App;

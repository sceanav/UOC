import { useRef } from "react";

const App = () => {
	const inputCentigrados = useRef();
	const outputFarenheit = useRef();

	const Farenheit = () => {
		const valorFarenheit = (inputCentigrados.current.value * 9) / 5 + 32;
		outputFarenheit.current.innerHTML = valorFarenheit;
	};

	return (
		<div>
			<label htmlFor="centig">Introduce valor en Centígrados</label>
			<br />
			<input type="number" ref={inputCentigrados} id="centig" />
			<button onClick={Farenheit}r>Convertir</button>
			<div ref={outputFarenheit}></div>
		</div>
	);
};

export default App;

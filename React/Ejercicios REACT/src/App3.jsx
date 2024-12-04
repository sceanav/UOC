import { useRef } from "react";

const App = () => {
	const inputHeight = useRef();
	const inputWidth = useRef();
	const outputArea = useRef();

	const calculaArea = () => {
		const valorArea = inputHeight.current.value * inputWidth.current.value;
		outputArea.current.innerHTML = valorArea;
	};

	return (
		<div>
			<label htmlFor="alto">Introduce alto:</label>
			<br />
			<input type="number" id="alto" ref={inputHeight} />
			<br />
			<label htmlFor="ancho">Introduce ancho:</label>
			<br />
			<input type="number" id="ancho" ref={inputWidth} />
			<br />
			<button onClick={calculaArea}>Calcular Area</button>
			<div ref={outputArea}></div>
		</div>
	);
};

export default App;

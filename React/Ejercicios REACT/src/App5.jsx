import { useRef, useState } from "react";

const App = () => {
	const inputCentigrados = useRef();
	const [numero, setNumero] = useState(0);

	const Farenheit = () => {
		const valorFarenheit = (inputCentigrados.current.value * 9) / 5 + 32;
		setNumero(valorFarenheit);
	};

	return (
		<div>
			<label htmlFor="centig">Introduce valor en Centígrados</label>
			<br />
			<input type="number" ref={inputCentigrados} id="centig" />
			<button onClick={Farenheit}>Convertir</button>
			<p>{numero}</p>
		</div>
	);
};

export default App;
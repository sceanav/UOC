import { useRef, useState } from "react";

const App = () => {
	const nombreRef = useRef();
	const [numero, setNumero] = useState(0);

	const cambio = () => {
        const valor = nombreRef.current.value;
		setNumero(valor * 1.2);
	};

	return (
		<div>
			<label htmlFor="dolares">Introduce USD</label>
			<br />
			<input type="numbers" id="dolares" ref={nombreRef} />
			<button onClick={cambio}>Cambio</button>

			<h2>Valor en Euros</h2>
			<p>{numero}</p>
		</div>
	);
};

export default App;

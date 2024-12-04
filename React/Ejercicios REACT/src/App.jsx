import { useRef } from "react";

const App = () => {
	const nombreRef = useRef();
	const resultadoRef = useRef();

	const cambio = () => {
		const valor = nombreRef.current.value;
    resultadoRef.current.innerHTML = valor*1.1;	};

	return (
		<div>
      <label htmlFor="dolares">Introduce USD</label>
      <br />
			<input type="numbers" ref={nombreRef} id="dolares"/>
			<button onClick={cambio}>Cambiar</button>
      <h2>Valor en Euros</h2>
			<div ref={resultadoRef}></div>
		</div>
	);
};

export default App;

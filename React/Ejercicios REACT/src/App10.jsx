import { useState } from "react";

const App = () => {
	const [alto, setAlto] = useState(0);
	const [ancho, setAncho] = useState(0);
	const [area, setArea] = useState(0);

	return (
		<div>
			<p>Introduce alto : </p>
			<input
				type="number"
				onChange={(inputAlto) => setAlto(inputAlto.target.value)}
			/>
			<br />
			<p>Introduce ancho:</p>
			<input
				type="number"
				onChange={(inputAncho) => setAncho(inputAncho.target.value)}
			/>
			<br />
            <br />
			<button onClick={(btn1) => setArea(alto * ancho)}>Calcula área</button>
			<h4>El área es: {area}</h4>
		</div>
	);
};

export default App;

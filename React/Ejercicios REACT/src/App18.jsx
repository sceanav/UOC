import React from "react";
import { useState } from "react";

const App = () => {
	const [contador, setContador] = useState(0);

	return (
		<div>
			{contador % 2 === 0 ? <p>Me ves</p> : <p>No me ves</p>}
			<button onClick={() => setContador(contador + 1)}>Alternador</button>
		</div>
	);
};
export default App;

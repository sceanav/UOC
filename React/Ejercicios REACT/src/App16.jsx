import React from "react";
import { useState } from "react";
import Componente1 from "./Components/Componente1";
import Componente2 from "./Components/Componente2";

const App = () => {
    const [result,setResult] = useState(0);
	return (
		<div>
			<Componente1 calcula={ v => setResult(v)}></Componente1>
			<Componente2 resultado={result}></Componente2>
		</div>
	);
};

export default App;
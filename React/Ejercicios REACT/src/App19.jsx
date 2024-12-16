import React from "react";
import { useState } from "react";
import teatro from "../src/Data/teatro.json";
import { P } from "../src/App/styles.js";
import { BUTTON } from "../src/App/styles.js";

const App = () => {
	const [numParrafo, setNumParrafo] = useState(0);
	return (
		<div>
			<div>
				<BUTTON
					onClick={() => {
						if (numParrafo != 0) setNumParrafo(numParrafo - 1);
					}}
				>
					Atrás
				</BUTTON>
				<BUTTON
					onClick={() => {
						if (numParrafo != teatro.length - 1) setNumParrafo(numParrafo + 1);
					}}
				>
					Adelante
				</BUTTON>
			</div>
			{teatro.map((linea, index) => (
				<P marcado={index === numParrafo}>{linea}</P>
			))}
		</div>
	);
};

export default App;

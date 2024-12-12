import React from "react";
import "./App.css";
import cartas from "./data/cartas2";
import PintaBaraja from "./components/PintaBaraja";

const App = () => {
	/* Creo la baraja con dos cartas de cada tipo */

	let baraja = [];
	cartas.map((e) => {
		baraja.push(e);
});

	/* Aleateariamente desordeno la baraja */

	const barajar = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	baraja = barajar(baraja);

	

	return (
		<div>
			<PintaBaraja mazo={baraja}></PintaBaraja>
		</div>
	);
};

export default App;

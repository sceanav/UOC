import { useState } from "react";

const PintaBaraja = ({ mazo }) => {
	const [obj, setObj] = useState();
	const parejaDeKeys = [];

	const handleClick = (e) => {
		if (parejaDeKeys.length != 2) {
			parejaDeKeys.push(e.imagen.key);
			e.descubierta = !e.descubierta;
			alert(e.imagen.key);
		} else {
			alert("estoy en else");
			mazo[parejaDeKeys[0]].imagen.descubierta = false;
			mazo[parejaDeKeys[1]].imagen.descubierta = false;
			parejaDeKeys.pop();
			parejaDeKeys.pop();
		}
		setObj(e);
	};

	return (
		<div>
			{mazo.map((e, index) => (
				<img
					key={index}
					src={e.descubierta || e.adivinada ? e.imagen : e.reverso}
					onClick={() => {
						handleClick(e);
					}}
				/>
			))}
		</div>
	);
};

export default PintaBaraja;

import { useState } from "react";

const PintaBaraja = ({ mazo }) => {
	const [obj, setObj] = useState();
	const [pareja, setPareja] = useState([]);

	const handleClick = (carta) => {
		if (!carta.adivinada) {
			let parejaTratada = pareja;
			parejaTratada.push(carta);
			setPareja(parejaTratada);

			alert(parejaTratada.length);

			if (parejaTratada.length === 2) {
				if (parejaTratada[0].imagen === parejaTratada[1].imagen) {
					alert("Acertaste, son iguales");
					mazo[parejaTratada[0].key].adivinada = true;
					mazo[parejaTratada[1].key].adivinada = true;
				}
				parejaTratada = [];
				setPareja(parejaTratada);
			}
		}

		carta.descubierta = !carta.descubierta;
		setObj(carta);
		setTimeout(() => {
			carta.descubierta = false;
			setObj(carta);
		}, 20);
	};

	return (
		<div>
			{mazo.map((cadaCarta, index) => (
				<img
					key={index}
					src={
						cadaCarta.descubierta || cadaCarta.adivinada
							? cadaCarta.imagen
							: cadaCarta.reverso
					}
					onClick={() => {
						handleClick(cadaCarta);
					}}
				/>
			))}
		</div>
	);
};

export default PintaBaraja;

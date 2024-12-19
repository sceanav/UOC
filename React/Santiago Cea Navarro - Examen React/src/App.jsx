import { useState } from "react";
import Selecciona from "./Components/Selecciona";
import RadioSelector from "./Components/RadioSelector";
import Promocional from "./Components/Promocional";
import Entrega from "./Components/Entrega";

const App = () => {
	const [price, setPrice] = useState(6);
	const [correctionPrice, setCorrectionPrice] = useState(0);
	const [descuento, setDescuento] = useState(1);
	const [aDomicilio, setADomicilio] = useState(0);
	let resultado = 6;

	return (
		<div>
			<Selecciona param={setPrice}></Selecciona>
			<RadioSelector param={setCorrectionPrice}></RadioSelector>
			<Promocional promo={setDescuento}></Promocional>
			<br />
			<Entrega param={setADomicilio}></Entrega>

			<div>
				<h2>
					Tu precio es:{" "}
					{
						(resultado = (
							Number(aDomicilio) +
							(Number(price) + Number(correctionPrice)) *
								Number(descuento)).toFixed(2))
					}
				</h2>
			</div>
		</div>
	);
};

export default App;

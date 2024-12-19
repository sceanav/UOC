import { useState } from "react";

const Selecciona = ({ param }) => {
	const [basePrice, setBasePrice] = useState(6);
	const options = [
		{ price: 6, label: "Margarita" },
		{ price: 7, label: "Vegetal" },
		{ price: 8, label: "Carbonara" },
		{ price: 9, label: "Barbacoa" },
	];
	return (
		<div>
			<h2>Seleciona tipo de pizza</h2>
			<select
				value={basePrice}
				onChange={(e) => {
					setBasePrice(e.target.value);
				}}
			>
				{options.map((option) => (
					<option key={option.price} value={option.price}>
						{option.label}
					</option>
				))}
			</select>
			{param(basePrice)}
		</div>
	);
};

export default Selecciona;

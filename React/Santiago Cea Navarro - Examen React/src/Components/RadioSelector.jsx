import { useState } from "react";

const RadioSelector = ({ param }) => {
	const [correctionPrize, setCorrectionPrize] = useState(0);

	return (
		<div>
			<div>
				<br />
				<h2>Elige el tamaño</h2>
				<label htmlFor="">
					<input
						type="radio"
						name="radiogroup"
						value="-2"
						onClick={(e) => setCorrectionPrize(e.target.value)}
					/>
					Pequeña
				</label>
			</div>
			<div>
				<label htmlFor="">
					<input
						type="radio"
						name="radiogroup"
						value="0"
						onClick={(e) => setCorrectionPrize(e.target.value)}
					/>
					Mediana
				</label>
			</div>
			<div>
				<label htmlFor="">
					<input
						type="radio"
						name="radiogroup"
						value="2"
						onClick={(e) => setCorrectionPrize(e.target.value)}
					/>
					Grande
				</label>{" "}
				{param(correctionPrize)}
			</div>
		</div>
	);
};

export default RadioSelector;

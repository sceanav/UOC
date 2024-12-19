import { useState } from "react";

const Entrega = ({ param }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [valorTransporte, setValorTransporte] = useState(0);

	return (
		<div>
			<label htmlFor="">
				Entrega a domicilio:
				<input
					type="checkbox"
					checked={isChecked}
					onChange={(e) => {
						if (!isChecked) {
							setValorTransporte(4);
						} else {
							setValorTransporte(0);
						}
						setIsChecked(!isChecked);
					}}
				/>
			</label>
            {param(valorTransporte)}
		</div>
	);
};

export default Entrega;

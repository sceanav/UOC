import { useState } from "react";

const Promocional = ({ promo }) => {
	const [dto, setDto] = useState("1");
	const palabro = "esfamiau";

	return (
		<div>
			<br />
			<h2>Codigo promocional</h2>
			<label htmlFor="">
				<input
					type="texto"
					name="inputBox"
					onInput={(e) => {
						if (e.target.value === palabro) setDto("0.6");
						else setDto("1");
					}}
				/>
			</label>
			
			{promo(dto)}
		</div>
	);
};

export default Promocional;

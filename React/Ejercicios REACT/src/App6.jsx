import { useState } from "react";

const App = () => {
	const [outValue, setOutValue] = useState(0);
	return (
		<div>
			<input
				type="number"
				name="usdvalue"
				id="usd"
				onChange={(e) => setOutValue(e.target.value * 1.2)}
			/>
			<br />
			<output>
				<p>El valor en euros es: {outValue}</p>
			</output>
		</div>
	);
};

export default App;

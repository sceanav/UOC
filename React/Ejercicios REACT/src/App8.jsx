import { useState } from "react";

const App = () => {
	const [farenheit, setFarenheit] = useState(0);
	let celsius = (farenheit * 9) / 5 + 32;
	return (
		<div>
			<input
				type="number"
				name="faren"
				id="farenDegrees"
				onChange={(degrees) => setFarenheit(degrees.target.value)}
			/>
			<br />
			<div>
				<h4>{celsius} grados Cº</h4>
			</div>
		</div>
	);
};

export default App;

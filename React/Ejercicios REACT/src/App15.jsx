import React from "react";
import IncreDecre from "./Components/IncreDecre";
import { useState } from "react";

const App = () => {
	const [val, setVal] = useState(0);
	return (
		<div>
			<IncreDecre value={val} updateVal={setVal}></IncreDecre>
			{val}
		</div>
	);
};

export default App;

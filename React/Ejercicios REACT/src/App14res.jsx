import React from "react";
import { useState } from "react";
import CompoIn from "./Components/CompoIn";
import CompoOut from "./Components/CompoOut";

const App = () => {
    const [result,setResult] = useState(0);
	return (
		<div>
			<CompoIn calculate={ v => setResult(v)}></CompoIn>
			<CompoOut res={result}></CompoOut>
		</div>
	);
};

export default App;
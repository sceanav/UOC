import { useState } from "react";

import Questions from "./assets/data/questions";

function App() {
	let index = 0;
	return (
		<>
			<p>{Questions[index].question}</p>
			<ul>
				{Questions[index].answers.map((resp) => (
					<div>
						<button id={resp}>X</button> <li>{resp.txt}</li>
					</div>
				))}
			</ul>
		</>
	);
}

export default App;

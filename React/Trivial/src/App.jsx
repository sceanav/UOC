import { useState } from "react";
import Questions from "./assets/data/questions";
import { Container } from "./App/styles";
import { Row } from "./App/styles";
import { Imagen } from "./App/styles";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function App() {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const q = Questions[questionIndex];
	shuffleArray(q.answers);

	console.log(q);
	return (
		<div>
			<h2
				style={{
					fontSize: 30,
					fontWeight: "bold",
					color: "#333",
					textAlign: "center",
					marginBottom: "50px",
					marginTop: "50px",
				}}
			>
				{q.question}
			</h2>
			<Container>
				<Row>
					{q.answers.map((resp) => (
						<div>
							<img src={resp.img} alt="" />
							<p>
								<button
									id={resp}
									onClick={() => {
										if (resp.isRight) {
											if (Questions.length - 1 != questionIndex) {
												setQuestionIndex(questionIndex + 1);
											} else {
												setQuestionIndex(0);
												setOpen(true);
											}
										} else if (questionIndex != 0) {
											setQuestionIndex(questionIndex - 1);
										}
									}}
								>
									X
								</button>{" "}
								{resp.txt}
							</p>
						</div>
					))}
				</Row>
				<Imagen src={q.img} alt=""></Imagen>
				<Popup open={open} position="center" onClose={() => setOpen(false)}>
					<div>
						<h2>HAS GANADO</h2>
						<p>Felicitaciones, eres un sabio</p>
						<button onClick={() => setOpen(false)}>Continuar</button>
					</div>
				</Popup>
			</Container>
		</div>
	);
}

export default App;

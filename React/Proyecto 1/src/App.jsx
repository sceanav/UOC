import { useRef } from "react";

const App = () => {
	// const hacerCosas = () => alert("hola");
	// const cositas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	// const pintaCositas = (cosa) => <p>{cosa}</p>;
	const inputRef = useRef();
	const divRef = useRef();
  console.log(inputRef);

	const hacerOtros = () => {
		divRef.current.innerHTML = inputRef.current.value;
	};
  
	return (
		<div>
			
			<input type="text" ref={inputRef} />
			<button onClick={hacerOtros}>Mi Botón</button>
      <div ref={divRef}></div>

      {/*
      {cositas.map(pintaCositas)}
			<p>
				Amor<span>{4 + 6}</span>
			</p>
			<hr></hr>
			<p>Probamos</p>
			<button onClick={hacerCosas}>Hacer cosas</button> */}
		</div>
	);
};

export default App;

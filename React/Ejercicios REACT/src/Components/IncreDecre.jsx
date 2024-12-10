import { useState } from "react";

const IncreDecre = ({updateVal}) => {
	const [res, setRes] = useState(0);

	return (
		<div>
			<button
				onClick={() => {
					setRes(res - 1);
					updateVal(res - 1);
				}}
			>
			-
			</button>
			<input
				type="number"
				value={res}
				onChange={(e) => {
					setRes(e.target.value);
					updateVal(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setRes(Number(res) + 1);
					updateVal(Number(res) + 1);
				}}
			>
				+
			</button>
		</div>
	);
};

export default IncreDecre;

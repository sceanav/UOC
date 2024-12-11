const Component = ({ value, sendValue }) => {
	return (
		<div>
			<button
				onClick={() => {
					sendValue(value - 1);
				}}
			>
				-
			</button>
			<input
				type="text"
				value={value}
				onChange={(e) => {
					sendValue(value + 1 );
				}}
			/>
			<button
				onClick={() => {
					value = Number(value) + 1;
					sendValue(value);
				}}
			>
				+
			</button>
		</div>
	);
};

export default Component;

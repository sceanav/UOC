import { useState } from "react";

const App = () => {
	const [myPic, setMyPic] = useState("");

	return (
		<div>
			<button onClick={(btn1) => setMyPic("../public/111x111.png")}>
				imagen 111x111
			</button>
			<button onClick={(btn2) => setMyPic("../public/222x222.png")}>
				imagen 222x222
			</button>
			<button onClick={(btn3) => setMyPic("../public/333x333.png")}>
				imagen 333x333
			</button>
			<br />
			<img src={myPic} alt="" srcset="" />
		</div>
	);
};

export default App;

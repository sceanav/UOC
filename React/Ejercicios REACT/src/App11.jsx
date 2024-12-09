import { useState } from "react";

const ANIMAL_IMAGES = {
	img1: "http://via.placeholder.com/111x111",
	img2: "http://via.placeholder.com/222x222",
	img3: "http://via.placeholder.com/333x333",
};

const App = () => {
	const [myPic, setMyPic] = useState("");

	return (
		<div>
			<button onClick={() => setMyPic(ANIMAL_IMAGES.img1)}>
				imagen 111x111
			</button>
			<button onClick={() => setMyPic(ANIMAL_IMAGES.img2)}>
				imagen 222x222
			</button>
			<button onClick={() => setMyPic(ANIMAL_IMAGES.img3)}>
				imagen 333x333
			</button>
			<br />
			<img src={myPic} alt="" srcset="" />
		</div>
	);
};

export default App;

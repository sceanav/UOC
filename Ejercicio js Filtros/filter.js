const colorFilter = (myColor) => {
	if (myColor != "white") {
		document.querySelectorAll(".squareBox").forEach((obj) => {
			obj.style = "display: flex";
			if (
				!obj.classList.toString().includes(myColor) &&
				obj.classList.toString().includes("squareBox")
			) {
				obj.style = "display: none";
			}
		});
	}
    else { document.querySelectorAll(".squareBox").forEach((obj) => {
        obj.style = "display: block";});
    };
};

const obtenColor = (myObj) => {
	selectedColor = myObj.id.toString();
	return selectedColor;
};

document.querySelectorAll("a").forEach((obj) => {
	obj.addEventListener("click", () => {
		const finalColor = obtenColor(obj);
		colorFilter(finalColor);
	});
});

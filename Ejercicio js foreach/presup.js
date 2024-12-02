const calculatePrice = () => {
	let suma = 0;
	if (document.querySelector("input[class=shop]:checked")) suma = suma + 200;
	if (document.querySelector("input[class=member]:checked")) suma = suma + 240;
	if (document.querySelector("input[class=design]:checked")) suma = suma + 200;
	document.querySelector("output").value = suma;
};
document.querySelector("button").addEventListener("click", calculatePrice);

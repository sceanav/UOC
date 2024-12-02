const compontexto = () => {

	let textoFinal = "";
    
	document.querySelectorAll("input[class=choosed]:checked").forEach((obj) => {
        
		textoFinal = textoFinal + obj.value;

	});
    document.querySelector('output').value=textoFinal;
};

document.querySelector("button").addEventListener("click", compontexto);

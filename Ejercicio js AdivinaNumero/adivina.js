
const numToGuess = Math.floor(Math.random() * 5) + 1;
alert(numToGuess);
let tries = 0;

const testNumber = () => {
    tries++;
	const numToTest = Number(document.querySelector('input').value);
    alert('Intento '+(tries));
        if (tries!==4){
       
	    if (numToTest === numToGuess) {
          
		    document.querySelector('output').value = "HAS TENIDO SUERTE, NO HABILIDAD.";
	    } else {
            
		    document.querySelector('output').value = "MAL MAL MAL, NO ERES PEOR PORQUE NO TE ENTRENAS";
	        
		}
    }
    else {
        alert ('MEJOR DEDÍCATE A OTRA COSA')
    
    };
}

document.querySelector('#btn1').addEventListener('click', testNumber);
function verdadero(valor){
    if (valor){
        return "verdadero";
    }else{
        return "falso";
    }
}

function hoyQuieroComer (comida){
    console.log("Hoy quiero comer " + comida);
}

function calcularVelocidad(kmh){
    let mps = kmh * 1000 / 3600;
    return mps;
}

function calcularArea(alto, ancho){
    let area = alto * ancho;
    return area;    
}

function echo(parametro){
    return parametro;
}

function saludar(nombre){
    return "Hola " + nombre;        
}

function test(val) {
	if (val>=   10 && val<=20) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}

function testEqual(val) {
	if (val === 12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}


function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	} 
    else
	{
		result = "Menor o igual a 5";
	}
	return result;
}

function testElse(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} 
    else if (val < 5) {
	result = "Smaller than 5";
    }   
    	else    {
		result = "Equal to 5";
	}
	return result;
}


function testSize(number){
    if (number < 5) {
        return("Tiny")
    }
    else if (number < 10) {
        return("Small")
    }
    else if (number < 15) {
        return("Medium")
    }
    else if (number < 20) {
        return("Large")
    }
    else {
        return("Huge")
    }
}


function nand(a, b) {
    return !(a && b);  }

function xor(a, b) {
    return (a || b) && !(a && b);   }




hoyQuieroComer("pizza");
verdadero(true);
console.log (calcularVelocidad(100));
console.log (calcularArea(10, 20));

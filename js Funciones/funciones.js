/*

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
    return !(a && b);   }




hoyQuieroComer("pizza");
verdadero(true);
console.log (calcularVelocidad(100));
console.log (calcularArea(10, 20)); */
   

/* FUNCIONES FLECHA */

/*
const cubo = n => n*n*n;
console.log(cubo(3));

const metroshora = velocidad => velocidad * 1000;
console.log(metroshora(100));

const area = (alto, ancho) => alto * ancho;
console.log(area(10, 20));

const areatriangulo = (base, altura) => (base * altura) / 2;
console.log(areatriangulo(10, 20)); 

const calculatePerimeter = radius => 2 * Math.PI * radius;
console.log(calculatePerimeter(5));

const calculateArea = radius => Math.PI * radius * radius;
console.log(calculateArea(5));  

/* FUNCIONES DE CADENA 

const logintud = nombre => nombre.length;
console.log(logintud("pepe"));

const devuelvePrimeraLetra = nombre => nombre[0];
console.log(devuelvePrimeraLetra("pepe"));  

const devuelveUltimaLetra = nombre => nombre[nombre.length - 1];
console.log(devuelveUltimaLetra("pepe"));

const devuelveEnesimaLetra = (nombre, n) => 
    {
    if (n>1 && n < nombre.length+1) {
        return nombre[n-1];
    }
    else return "Fuera de Rango";
}
console.log(devuelveEnesimaLetra("pepe", 5));

const tresSiete = nombre => nombre.substring(3,7);
console.log(tresSiete("pepe es un poco aburrido"));

const toCase = nombre => nombre.toLowerCase()+'-'+nombre.toUpperCase();
console.log(toCase("pEpe"));

const shorcut = (nombre, apellido) => nombre[0] +  apellido[0]; 
console.log(shorcut("Pepe", "Perez"));

const firstChar = (nombre) => {
    let i=0;
    while (nombre[i]==' ') {
        i++;
    }
    return nombre[i];
}

console.log(firstChar("  Santi  "));

const devuelveMasLarga = (cadena1, cadena2) => {
    if (cadena1.length > cadena2.length) {
        return cadena1;
    }
    else {
        return cadena2;
    }
}   

console.log(devuelveMasLarga("Pepe", "Pepito"));

const devuelveMasLarga2 = (cadena1, cadena2) => {   
    if (cadena1.length > cadena2.length) {
        return cadena1; 
    }
    else if (cadena2.length > cadena1.length) {
        return cadena2;
    }
    else {
        return "Son iguales";
    }
}

const generarNombre = (a,b,c) => {
    if (a.length <5 || b.length <5 || c.length <5) {
        return "Error";
    }
    else {
        return a.substring(0,2)+b.substring(0,2)+c.substring(0,2);
    }   
}

console.log(generarNombre("Peppee", "Papito", "Concha"));

const generarNombre2 = (a,b,c) => {
    if (a.length <5 || b.length <5 || c.length <5) {
        return "Error";
    }
    else {
        return a[a.length-1]+b[b.length-1]+c[c.length-1];
    }   
}

console.log(generarNombre2("Peppee", "Papito", "Concha"));

const generarNombre3    = (a,b,c) => {
    if (a.length <5 || b.length <5 || c.length <5) {
        return "Error";
    }
    else {
        return a.substring(a.length - 3) + b.substring(b.length - 3) + c.substring(c.length - 3);
    }   /* Puedo hacerlo también con slice, que acepta valores negativos 
}

console.log(generarNombre3("Peppes", "Papito", "Concha"));

const tieneLetra = (cadena, letra) => {
    let i = 0;
    cadena = cadena.toLowerCase();
    letra = letra.toLowerCase();
    while (i<cadena.length && cadena[i] != letra) {
        i++;
    }
    if (i<cadena.length) {
        return true;
    }
    else {
        return false;
    }
}

console.log(tieneLetra("Contiene la letra p", "c"));  

const nuevaPalabra = (letra, num) => {
   return letra.repeat(num);
};
    
console.log(nuevaPalabra("a", 5)); */

const aleatorio = () => Math.floor(Math.random()*3+5);
console.log(aleatorio());

/* Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
nombre.charAt();
nombre.length; */

const nombre="Santi";
const letrasAleatorias = (nom) => nom.charAt(Math.floor(Math.random()*nom.length));

let micadena="";
for(let i=0;i<50;i++){
   micadena=micadena+nombre.charAt(letrasAleatorias (nombre));
}
console.log(micadena);

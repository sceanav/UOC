console.log("Hola");
console.log("Adios");
// Comentario
let text = "Hola que tal";
let num = 7;

console.log(typeof text);
console.log(typeof num);

let i=8;
let j=4;
console.log(i+j);

// Ambos de los siguientes metodos convierten a string
let number = 5;
let numberConvertedInText1 = String(number);
let numberConvertedInText2 = ''+number;

console.log(numberConvertedInText1);
console.log(numberConvertedInText2);

//Ambos de los siguientes métodos convierten a entero
let txt= '5';
let number1 = Number(txt);
let number2 = +txt;
let number3 = parseInt(txt); // Esto lo convierte a un número entero, eliminando los decimales si los hubiese
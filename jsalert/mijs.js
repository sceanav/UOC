/* 
//HECHO CON WHILE

const numero = Math.floor(Math.random()*5+1);
let miNumero = prompt("Ingresa un numero del 1 al 5");
let intentos = 3;

while (intentos>1 && Number(miNumero)!=numero){
    intentos--;
    miNumero = prompt("Ingresa un numero del 1 al 5");
};

numero===Number(miNumero)? alert("Bien Hecho!") : alert("Has perdido");  */

// HECHO CON REPEAT

const numero = Math.floor(Math.random()*5+1);
let miNumero = "";
let intentos = 3;

do{
    miNumero = prompt("Ingresa un numero del 1 al 5");
    intentos--;
}
while (intentos>0 && Number(miNumero)!=numero);

numero===Number(miNumero)? alert("Bien Hecho!") : alert("Has perdido :(");
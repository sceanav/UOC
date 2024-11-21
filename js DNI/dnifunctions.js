
const letrasPosibles = "TRWAGMYFPDXBNJZSQVHLCKE";
let dni="";

do
{
   dni=prompt("Introduce tu DNI");
}
while(dni.length != 8 || isNaN(dni)); 

const calculaLetra = (num) =>  letrasPosibles.charAt(num % 23);

alert("Tu letra es " + calculaLetra(dni));

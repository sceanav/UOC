const arrs = ['Juan', 'Pedro', 'Pablo', 'Mateo'];
arrs.forEach((element) => {
    console.log("Conozco a alguien llamado "+element);
});

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersArray.forEach((element) => {
    console.log(element*2);
});

const numbersArray2 = [1, -2, 3, 0, 5, -3, 6, 7, -8, 9, 10];
let positives=0;
let negatives=0;
let zros=0;
numbersArray2.forEach(MiFuncion = elemento => {
    if (elemento>0) {
        positives++;
    } else if (elemento<0) {
        negatives++;
    } else {
        zros++; 
    }
});
console.log("El número de positivos es "+positives);
console.log("El número de negativos es "+negatives);        
console.log("El número de ceros es "+zros);

const numbersArray3 = [3, -2, 3, -2, -2, 3, 3, -2, 3, 0];
let sumaNegativos=0;
let sumaPositivos=0;
let positivos=0;
let negativos=0;
numbersArray3.forEach(elemento =>{
    if (elemento>0) {
        sumaPositivos=sumaPositivos+elemento;
        positivos++;
    } 
    else{ if (elemento < 0){
        sumaNegativos += elemento;
        negativos++;}
    }
}
)
console.log("La media de los positivos es: "+sumaPositivos/positivos);
console.log("La media de los negativos es: "+sumaNegativos/negativos);





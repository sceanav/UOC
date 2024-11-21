const nombres = ['jose', 'maria', 'pablo', 'luis', 'david', 'ana', 'carlos'];

const saludo = (nombres) => {
    for (element of nombres) {
        console.log("Conozco a alguien que se llama "+element);
    }
}
saludo(nombres);


const recibeDos = (elem1, elem2) => nuevoArray = [elem1, elem2];
console.log(recibeDos('jose', 'maria'));    


const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (element of numbers) console.log(element*2);

const getFirstElement = (array) => array[0];

console.log(getFirstElement(numbers));

const setFirstElement = (array, element) => {
    array[0] = element;
    return array;
}
console.log(setFirstElement(numbers, 100));

const getLastElement = (array) =>  array[array.length-1];
/*
let positivos=0;
let negativos=0;
let nulos=0;
let array = [7,-4,-1,5,0,8,-2,0,-1,15];
for (let i=0;i<array.length-1;i++)
{
    if (array[i] <0)
        { 
            negativos++;
        }
        else if (array[i]>0)
            {
                positivos++;
            }
            else nulos++;
}

console.log("El número de positivos es "+positivos)
console.log("El número de negativos es "+negativos)
console.log("El número de ceros es "+nulos) */


let array = [7,-4,-1,5,0,8,-2,0,-1,15];
let positivos=0;
let negativos=0;
let sumaNegativos =0;
let sumaPositivos=0;
for (let i=0;i<array.length-1;i++)
{
    if (array[i] <0)
        { 
            negativos++;
            sumaNegativos=sumaNegativos+array[i];
                }
        else 
            {
                positivos++;
                sumaPositivos=sumaPositivos+array[i];
            }
}

console.log("la media de positvos es: "+sumaPositivos/positivos);
console.log("la media de negativos es: "+sumaNegativos/negativos);


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  const myData = arr[2][1]; // Modificar únicamente esta línea para acceder al 8 del array bidimensional
  console.log(myData);

  
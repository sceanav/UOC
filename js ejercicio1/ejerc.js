let entero=7;
let text='En un lugar de la Mancha';
console.log(text);
let a;
a = 7;
let b = a;  
console.log(b); // Debería mostrarse el valor de a
let i = 7;
i = 5;
i = 3;
console.log(i); // ¿Qué valor se mostrará por consola? 3, que es el último valor asignado   


a = 5;
b = 7;

let aux = a;
a = b;
b= aux;

console.log('a: ', a); 
console.log('b: ', b); 


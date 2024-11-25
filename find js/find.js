const people=[{nombre:"José", edad: 12}, {nombre:"Maria", edad: 15}, 
            {nombre:"Pedro", edad: 25}, {nombre:"Ana", edad: 19}]
const find = people.find((person) => person.edad > 18);
console.log(find); 

/* el fin sólo devuelve el priemr objeto que cumple, 
para devolver el array de los que cumplen utilizaríamos el método filter */
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


hoyQuieroComer("pizza");
verdadero(true);
console.log (calcularVelocidad(100));
console.log (calcularArea(10, 20));

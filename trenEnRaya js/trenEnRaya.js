const promptName = (nombre) => { nombre = prompt("Ingrese su nombre"); }
const posicionValida = (posic, matriz) => {
    let i= parseInt(posic[0]);
    let j = parseInt(posic[length-1]);
     if (posic[0].NaN() || posic[posic.length-1].NaN() || i>3 || j>3 || i<i || j<0 || matriz [i][j] !='')
        {   
            alert('Posición no válida')
            return false;
        }
        else return true;
}

const coloca = (letra, posic, matriz){
    matriz[parseInt(posic[0])] [parseInt(posic[posic.length-1])] = letra;

}

let jugador1="";
let jugador2="";
let turno1="";
let turno2="";
promptName(jugador1);
promptName(jugador2);
let tablero = [[,,],[,,],[,,]];



do{
    alert("Turno de " + jugador1);
    do{
        turno1 = prompt("Ingrese la coordenada que desea ocupar (x,y)");
        posicionValida (turno1,tablero)? coloca("x",turno1,tablero);
    } while (!posicionValida(turno1,tablero));
        
    if (!tresEnRaya()) { 
            alert("Turno de " + turno2);
            do{
                turno2 = prompt("Ingrese la coordenada que desea ocupar (x,y)");
                posiciónValida(turno2,tablero)? coloca("o",turno2, tableroS);
            }while (!posicionValida(turno2,tablero));
    }
} while (!tresEnRaya());
    

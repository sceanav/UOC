const convertir = () => {
    const valor = document.querySelector('#euros').value = document.querySelector('#euros').value * 1.2;
    document.querySelector('output').value=valor;
}

const farenheitConv = () => {
    const r = Number(document.querySelector('.centigrades').value) *9 /5 +32;
    document.querySelector('.salida2').value=r;   
}

const componEnvio = () => {
    
    const nombre = document.querySelector('#nameUser').value;
    const tipoMaterial = document.querySelector('#tipoMaterial').value;
    const tipoDimension = document.querySelector('[name=dimensions]:checked').value;
    const comentariosAdicionales = document.querySelector('#comentarios').value;
    
    const texto = nombre +' quiere una caja de '   + tipoMaterial + ' de dimensión ' + tipoDimension + ' y ' + comentariosAdicionales;
    
    document.querySelector('#envioPreparado').value=texto;
}

document.querySelector('#btn1').addEventListener('click', convertir);
document.querySelector('#btn2').addEventListener('click', farenheitConv);
document.querySelector('#btn3').addEventListener('click', componEnvio);
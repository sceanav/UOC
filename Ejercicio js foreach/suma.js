
const calcular = () => {
    let suma=0;
    document.querySelectorAll('input').forEach (obj => {
        suma = suma + Number(obj.value);
        });
    document.querySelector('output').value = suma;
}

document.querySelector('.btn1').addEventListener('click', calcular);



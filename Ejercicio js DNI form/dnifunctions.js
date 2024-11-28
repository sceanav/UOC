const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
let i = 0;

calculateLetter = () => {
    const numDni = Number(document.querySelector('#dni').value);
    if (numDni>9999999 && numDni<100000000){
        let i = numDni % 23;
        document.querySelector('output').value=dniLetters[i];
    }
    else alert('Número no válido');
}

document.querySelector('#btn1').addEventListener('click', calculateLetter);
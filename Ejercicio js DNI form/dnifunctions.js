const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";

calculateLetter = () => {
    const numDni = Number(document.querySelector('#dni').value);
    if (numDni>9999999 && numDni<100000000) document.querySelector('output').value=dniLetters[numDni % 23];
    else alert('Número no válido');
}

document.querySelector('#btn1').addEventListener('click', calculateLetter);
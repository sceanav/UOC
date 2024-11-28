
const outputResult = document.querySelector('output');

let result = 0;

const operar = () => {
    const operator = document.querySelector('select').value;
    const num1 = Number(document.querySelector('#op1').value);
    const num2 = Number(document.querySelector('#op2').value);
switch (operator) {
    case 'plus': {
    
        result=num1+num2;
        break;
    }
    case 'minus': {
        result=num1-num2;
        break;
    }
    case 'multiply':{
        result=num1*num2;
        break;

    } 
    case 'divide': {
        if (num2!==0) result=num1/num2   
        else alert ('IDIOTA, NO PUEDES DIVIDIR POR 0');          
     }
}
outputResult.value = result;
}

document.querySelector('#btn1').addEventListener('click', operar);


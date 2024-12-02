
const evaluateAnswer = () => {document.querySelectorAll('input[type=radio]:checked').forEach( (element) => {
    alert(element.classList);
    if (element.classList.contains('right')) element.closest('p').style.backgroundColor ='green';
    else element.closest('p').style.backgroundColor = 'red';
})}

const resetAnswer = () => {document.querySelectorAll('input').forEach( (element) => {
    element.closest('p').style.backgroundColor = 'white';
})};

document.querySelector('#btn1').addEventListener('click', evaluateAnswer);
document.querySelector('#btn2').addEventListener('click', resetAnswer);

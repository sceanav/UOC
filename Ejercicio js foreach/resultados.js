const showAnswers = () => {
	document.querySelectorAll('.rojo').forEach(obj => {
		obj.style.backgroundColor = 'red';
	});
}

document.querySelector('button').addEventListener('click', showAnswers);
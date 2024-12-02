document.querySelectorAll('button').forEach(obj => 
    obj.addEventListener('click', () => obj.closest('div').style.backgroundColor='red'));
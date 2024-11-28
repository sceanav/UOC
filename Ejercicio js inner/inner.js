const showText = () => {
    document.querySelector(".yellowBox").innerHTML = "Esto es una prueba";
}

const blindText = () => {
    document.querySelector(".yellowBox").innerHTML = "";
}

document.querySelector(".redBox").addEventListener("mouseover",showText);
document.querySelector(".redBox").addEventListener("mouseout",blindText);
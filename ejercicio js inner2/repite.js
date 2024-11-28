
const repeatWords = () => {
    const max = document.querySelector("#numWords").value;
    for (i=0; i<max; i++) {
        document.querySelector("output").innerHTML += "palabro ";
        //document.querySelector("output").style.backgroundColor = "yellow";
    }
}

document.querySelector(".btn1").addEventListener("click",repeatWords);


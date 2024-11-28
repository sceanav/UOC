document.querySelector("select").addEventListener("change", () =>{
    document.querySelector("body").style.backgroundColor = document.querySelector("select").value;
})
let texto = document.getElementById("texto")
tagBody = document.querySelector("body")
let status = document.getElementById("status")
let tamanho = 19

function aumentar () {
    tamanho = tamanho + 2;
    texto.style.fontSize = tamanho + "px";
    status.innerHTML = "A função aumentar foi usada"
}

function diminuir (){
    tamanho = tamanho - 2
    texto.style.fontSize = tamanho + "px";
    status.innerHTML = "A função diminuir foi usada"
}
function noturno (){
    tagBody.style.backgroundColor = "none"
    tagBody.style.background = "grey"
    status.innerHTML = "Modo Noturno Ativado "
    
}
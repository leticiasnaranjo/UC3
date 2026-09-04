const tagSelect = document.getElementById("Linguagem")

//^ 'const' é mais usado do que 'let' para variaveis de TAG
const btnSelecionar = document.getElementById("linguagem")

btnSelecionar.addEventListener("click", () => {
    let linguagemSelecionada = tagSelect.ariaValue
    if (linguagemSelecionada == "javascript"){
        alert("Ai sim meu chapa !")
    }
})
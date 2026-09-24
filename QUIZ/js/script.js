
// * Perguntas dentro do vetor 
// * Dentro do vetor terão diversos objetos estruturas com chaves {} com dados dentro

const perguntas = [
    {
        pergunta : " Qual a linguagem é usada para deixar a pagina interativa?",
        alternativas : ["HTML", "CSS", "Java Script", "SQL"],
        correta : 2
    },
    {
        pergunta : " Qual TAG HTML cria um botão?",
        alternativas : ["<buton>", "<inputText>", "<click>", "<btn>"],
        correta : 0
    },
    {
        pergunta : "Qual a propriedade CSS que muda a cor do texto?",
        alternativas : ["background", "font-size", "color", "border"],
        correta : 2
    },
    {
        pergunta : "Qual comando exibe algo no console do navegador?",
        alternativas : [
            "print()", 
            "console.log()",
            "show()",
            "docment.console()"],
        correta : 1
    }
]

const tagPergunta = document.getElementById("pergunta");
const tagAlternativas = document.getElementById("alternativas");
const tagResposta = document.getElementById("resultado");
const tagNumero = document.getElementById("numero-pergunta")
const botaoProxima  = document.getElementById("proxima")

// variaveis de controle

let perguntaAtual = 0
let pontos = 0

// Mostra a pergunta atual

function mostrarPergunta(){
    // A variavel 'perguntaAtual' será usada como indice na lista de perguntas 
    let pergunta = perguntas[perguntaAtual]

    // EDITA O <p>
    // Mostrando algo como "Pergunta 3 de 4"
    // 'LENGTH' conta o total de itens que tem no vetor 'perguntas'
    tagNumero.innerText = 
        "pergunta " + (perguntaAtual + 1 ) + " de " + perguntas.length;

        // mostrando a pergunta : 
        // pergunta.pergunta = o primeiro é a variavel e o segundo é o 'atributo' dentro do objeto 
        tagPergunta.innerHTML = pergunta.pergunta


        // zerando Alternativas e resultados 
        tagAlternativas.innerHTML = ""
        tagResposta.innerHTML = ""
        // Sumindo com o botão
        botaoProxima.style.display = "none"

        // criar botão para cada alternativa com loop
        // i < pergunta.alternativas.length = enquanto for menor que 4 
        // i++ aumenta de 1 em 1 
        for(let i = 0; i < pergunta.alternativas.length; i++){
            // criar tag
            let botao = document.createElement("button")
            botao.innerText = pergunta.alternativas[i]
            // colocar classe dentro da tag recem criada para o CSS
            botao.className = "alternativa"



            // ! Programando o botao
            botao.onclick = function(){
                // chama a função responder passando o nº da alternativa
                responder(i)
            }

            tagAlternativas.appendChild(botao)
        }
}
// ! função que verifica se o jogador acertou 
// ! ele é chamado  pelo <button> de alternativa
// ? A alternativa clicada é um indice 
function responder(resposta){
    let pergunta = perguntas[perguntaAtual]

    if (resposta == pergunta.correta){
        tagResposta.innerText = "Resposta Correta✅"
        tagResposta.style.color = "var(--cor-acerto)"
    } else {
        tagResposta.innerText = "Resposta Incorreta❌"
        tagResposta.style.color = "var(--cor-erro)"
    }
    let botoes = document.getElementsByClassName("alternativa")

    for (botao of botoes){
        botao.disabled = true
    }

    // Fazendo o botão 'proxima pergunta' aparecer
    // Por natureza ele é display: none (que é invisivel)
    // Aqui, apos ele responder, mudamos o display dele 
    botaoProxima.style.display = "block"

}
mostrarPergunta()

// * Perguntas dentro do vetor 
// * Dentro do vetor terão diversos objetos estruturas com chaves {} com dados dentro

const perguntas = [
    {
        pergunta : " Qual a linguagem é usada para deixar a pagina interativa?"
        alternativas : ["HTML", "CSS", "Java Script", "SQL"]
        correta : 2
    },
    {
        pergunta : " Qual TAG HTML cria um botão?"
        alternativas : ["<buton>", "<inputText>", "<click>", "<btn>"]
        correta : 0
    },
    {
        pergunta : "Qual a propriedade CSS que muda a cor do texto?"
        alternativas : ["background", "font-size", "color", "border"]
        correta : 2
    },
    {
        pergunta : "Qual comando exibe algo no console do navegador?"
        alternativas : [
            "print()", 
            "console.log()",
            "show()",
            "docment.console()"]
        correta : 1
    }
]

const tagPergunta = document.getElementById("pergunta");
const tagAlternativas = document.getElementById("alternativas");
const tagResposta = document.getElementById("resultado");
const tagNumero = document.getElementById("numero-resposta")

// variaveis de controle

let perguntaAtual = 0
let pontos = 0
// * Perguntas dentro do vetor
// * Cada objeto {} tem: a pergunta, as alternativas e o índice da correta (começa em 0)

const perguntas = [
    {
        imagem : "img/titanic.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Titanic", "Avatar", "Poseidon", "Pearl Harbor"],
        correta : 0
    },
    {
        imagem : "img/rei-leao.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Madagascar", "O Rei Leão", "Tarzan", "Kung Fu Panda"],
        correta : 1
    },
    {
        imagem : "img/toy-story.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Carros", "Monstros S.A.", "Toy Story", "Procurando Nemo"],
        correta : 2
    },
    {
        imagem : "img/star-wars.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Star Trek", "Interestelar", "Duna", "Star Wars"],
        correta : 3
    },
    {
        imagem : "img/matrix.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Matrix", "Blade Runner", "O Exterminador do Futuro", "Tron"],
        correta : 0
    },
    {
        imagem : "img/harry-potter.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Percy Jackson", "Harry Potter", "Nárnia", "O Hobbit"],
        correta : 1
    },
    {
        imagem : "img/jurassic-park.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["King Kong", "Godzilla", "A Era do Gelo", "Jurassic Park"],
        correta : 3
    },
    {
        imagem : "img/shrek.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Shrek", "Como Treinar o Seu Dragão", "Enrolados", "A Bela e a Fera"],
        correta : 0
    },
    {
        imagem : "img/frozen.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Moana", "Valente", "Frozen", "Encanto"],
        correta : 2
    },
    {
        imagem : "img/homem-aranha.jpg",
        pergunta : "De qual filme é esta cena?",
        alternativas : ["Batman", "Homem-Aranha", "Superman", "Homem de Ferro"],
        correta : 1
    }
]

const tagPergunta = document.getElementById("pergunta");
const tagImagem = document.getElementById("imagem-pergunta");
const moldura = document.getElementById("moldura");
const tagAlternativas = document.getElementById("alternativas");
const tagResposta = document.getElementById("resultado");
const tagNumero = document.getElementById("numero-pergunta")
const botaoProxima = document.getElementById("proxima")

// Novidades desta versão
const barraProgresso = document.getElementById("progresso")
const telaQuiz = document.getElementById("tela-quiz")
const telaFinal = document.getElementById("tela-final")
const tagNota = document.getElementById("nota")
const tagMensagemFinal = document.getElementById("mensagem-final")
const imagemFinal = document.getElementById("imagem-final")

// variaveis de controle

let perguntaAtual = 0
let pontos = 0

// Letras que aparecem antes de cada alternativa
const letras = ["A", "B", "C", "D"]

// Mostra a pergunta atual

function mostrarPergunta(){
    // A variavel 'perguntaAtual' será usada como indice na lista de perguntas
    let pergunta = perguntas[perguntaAtual]

    // Mostrando algo como "Pergunta 3 de 5"
    tagNumero.innerText =
        "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length

    // A barra enche conforme o jogador avança (em %)
    barraProgresso.style.width = (perguntaAtual / perguntas.length * 100) + "%"

    tagPergunta.innerText = pergunta.pergunta

    // ! Mostrando a imagem da pergunta
    // Se a imagem não for encontrada, a moldura mostra um aviso com o nome do arquivo
    moldura.classList.remove("sem-imagem")
    moldura.setAttribute("data-arquivo", pergunta.imagem)
    tagImagem.onerror = function(){
        moldura.classList.add("sem-imagem")
    }
    tagImagem.src = pergunta.imagem

    // zerando Alternativas e resultados
    tagAlternativas.innerHTML = ""
    tagResposta.innerHTML = ""
    // Sumindo com o botão
    botaoProxima.style.display = "none"

    // criar botão para cada alternativa com loop
    for(let i = 0; i < pergunta.alternativas.length; i++){
        // criar tag
        let botao = document.createElement("button")

        // O botão terá a letra (em um <span>) + o texto da alternativa
        botao.innerHTML = '<span class="letra">' + letras[i] + '</span>' + pergunta.alternativas[i]
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
// ! ele é chamado pelo <button> de alternativa
function responder(resposta){
    let pergunta = perguntas[perguntaAtual]
    let botoes = document.getElementsByClassName("alternativa")

    if (resposta == pergunta.correta){
        tagResposta.innerText = "Resposta correta ✅"
        tagResposta.style.color = "var(--cor-acerto)"
        pontos++
    } else {
        tagResposta.innerText = "Resposta incorreta ❌"
        tagResposta.style.color = "var(--cor-erro)"
        // pinta de vermelho a que o jogador escolheu
        botoes[resposta].classList.add("errada")
    }

    // Sempre pinta de verde a alternativa certa, para o jogador aprender
    botoes[pergunta.correta].classList.add("certa")

    // Trava todos os botões
    for (let botao of botoes){
        botao.disabled = true
    }

    // Se for a última pergunta, o botão muda de texto
    if (perguntaAtual == perguntas.length - 1){
        botaoProxima.innerText = "Ver resultado"
    } else {
        botaoProxima.innerText = "Próxima pergunta"
    }

    // Fazendo o botão 'próxima pergunta' aparecer
    botaoProxima.style.display = "block"
}

// Chamada pelo botão "Próxima pergunta" (onclick no HTML)
function proximaPergunta(){
    perguntaAtual++

    if (perguntaAtual < perguntas.length){
        mostrarPergunta()
    } else {
        mostrarFinal()
    }
}

// Tela final com a pontuação
function mostrarFinal(){
    telaQuiz.style.display = "none"
    telaFinal.style.display = "block"

    barraProgresso.style.width = "100%"
    tagNumero.innerText = "Sessão encerrada"
    tagNota.innerText = pontos + "/" + perguntas.length

    // A imagem começa escondida em todo final
    imagemFinal.style.display = "none"

    if (pontos == perguntas.length){
        tagMensagemFinal.innerText = "ABSOLUTE CINEMA! Você acertou tudo."
        // ! Só no 10/10: mostra a imagem
        imagemFinal.style.display = "block"
        // se o arquivo não existir na pasta img/, esconde a imagem quebrada
        imagemFinal.onerror = function(){
            imagemFinal.style.display = "none"
        }
    } else if (pontos >= perguntas.length / 2){
        tagMensagemFinal.innerText = "Muito bem! Você entende de filmes."
    } else {
        tagMensagemFinal.innerText = "Hora de maratonar mais filmes!"
    }
}

// Zera tudo e começa de novo
function reiniciar(){
    perguntaAtual = 0
    pontos = 0
    telaFinal.style.display = "none"
    telaQuiz.style.display = "block"
    mostrarPergunta()
}

mostrarPergunta()

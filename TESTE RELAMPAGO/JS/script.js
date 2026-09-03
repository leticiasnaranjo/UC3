let perguntaAtual = 0;
let pontos = 0;

let perguntas = document.querySelectorAll(".perguntas > div");

let resultado = document.getElementById("resultado");
let pontosTexto = document.getElementById("pontos");

let botaoReiniciar = document.getElementById("reiniciar");


// ESCONDER TODAS AS PERGUNTAS

function mostrarPergunta() {

    perguntas.forEach(function(pergunta) {
        pergunta.style.display = "none";
    });

    perguntas[perguntaAtual].style.display = "block";

    resultado.innerHTML = "";
}


// VERIFICAR RESPOSTA

function verificarResposta(resposta) {

    if (perguntaAtual == 0) {

        if (resposta == "René Descartes") {

            acertou();

        } else {

            errou("René Descartes");
        }

    } else if (perguntaAtual == 1) {

        if (resposta == "Nietzsche") {

            acertou();

        } else {

            errou("Nietzsche");
        }
    }
}


// QUANDO ACERTAR

function acertou() {

    pontos++;

    pontosTexto.innerHTML = pontos;

    resultado.innerHTML = "✅ Acertou! Muito bem!";

    resultado.style.backgroundColor = "green";
    resultado.style.color = "white";

    passarParaProximaPergunta();
}


// QUANDO ERRAR

function errou(respostaCorreta) {

    resultado.innerHTML = "❌ Você errou! A resposta correta era: " + respostaCorreta;

    resultado.style.backgroundColor = "red";
    resultado.style.color = "white";

    passarParaProximaPergunta();
}


// PRÓXIMA PERGUNTA

function passarParaProximaPergunta() {

    setTimeout(function() {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        } else {

            resultado.innerHTML = "🎉 Quiz finalizado! Você fez " + pontos + " ponto(s).";

            resultado.style.backgroundColor = "green";
            resultado.style.color = "white";

            perguntas.forEach(function(pergunta) {
                pergunta.style.display = "none";
            });
        }

    }, 1500);
}


// ADDEVENTLISTENER NOS BOTÕES DAS PERGUNTAS

perguntas.forEach(function(pergunta) {

    let botoes = pergunta.querySelectorAll("button");

    botoes.forEach(function(botao) {

        botao.addEventListener("click", function() {

            verificarResposta(botao.innerHTML);

        });

    });

});


// BOTÃO REINICIAR

botaoReiniciar.addEventListener("click", function() {

    perguntaAtual = 0;
    pontos = 0;

    pontosTexto.innerHTML = pontos;

    resultado.innerHTML = "";

    resultado.style.backgroundColor = "";

    mostrarPergunta();

});


// COMEÇAR O QUIZ

mostrarPergunta();
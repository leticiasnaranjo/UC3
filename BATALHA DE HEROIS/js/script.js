// ? Primeira ação definir e salvar tags em variáveis

let tagPontosPlayer = document.getElementById("pontosPlayer")
let tagPontosCPU = document.getElementById("pontosMaquina")

let pontosPlayer = 0
let pontosMaquina = 0
// ? função que será linkada as cartas da jogada

// ? Ele recebe 'jogada' como parâmetro, pois o jogador tem 5 cartas para escolher. é cada uma jogada diferente.

function jogar(jogadaPlayer) {
    // ? Jogada do CPU
    // ? floor = arredonda pra baixo
    // ? random sorteia um número entre 0 e 1
    // * ao multiplicar por 5 ele pode gerar um número de 0 a 5 aleatóriamente
    let jogadaNumero = Math.floor(Math.random() * 5)


    let jogadaMaquina = ""
    switch (jogadaNumero) {
        case 0:
            jogadaMaquina = "Arqueiro"
            break
        case 1:
            jogadaMaquina = "Guerreiro"
            break
        case 2:
            jogadaMaquina = "Ladino"
            break
        case 3:
            jogadaMaquina = "Mago"
            break
        case 4:
            jogadaMaquina = "Paladino"

    }
    let vencedor = quemVenceu(jogadaPlayer, jogadaMaquina)

    alert("Player jogou: " + jogadaPlayer + " Maquina jogou: " + jogadaMaquina)
    if (vencedor == "EMPATE") {
        alert("Deu empate!")
    }
    else if (vencedor == "PLAYER") {
        alert(vencedor + " venceu!!")
        // ? variavel++ é o mesmo que:
        // ? variavel = variável + 1 Ou variável += 1
        pontosPlayer++
    }
    else {
        alert(vencedor + " venceu!!")
        pontosMaquina++
    }

    atualizaPlacar()
}
// ? Função separada que analisa se o player venceu ou não
// ? Ele recebe dois valores : Jogada do jogador e da maquina
// ? parÂmetros servem para a função receba informação externa. pois não é a função que define a jogada
function quemVenceu(jogadaPlayer, jogadaMaquina) {

    if (jogadaPlayer == jogadaMaquina) {
        return "EMPATE"
    }
    else if (jogadaPlayer == "Guerreiro" && jogadaMaquina == "Arqueiro") {
        return "PLAYER"
    }
    else if (jogadaPlayer == "Guerreiro" && jogadaMaquina == "Ladino") {
        return "PLAYER"
    }
    else if (jogadaPlayer == "Mago" && jogadaMaquina == "Guerreiro") {
        return "PLAYER"
    }
    else if (jogadaPlayer == "Mago" && jogadaMaquina == "Paladino") {
        return "PLAYER"
    }
    else {
        return "MÁQUINA"
    }
}
function atualizaPlacar() {
    // * innerHTML edita oque está escrito no <h1>
    // ? quando essa função é chamada ela vai na tag e coloca o novo valor
    tagPontosPlayer.innerHTML = "Player Pontos: " + pontosPlayer
    tagPontosCPU.innerHTML = "Máquina Pontos: " + pontosMaquina
}

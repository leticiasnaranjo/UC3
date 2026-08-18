// ? Primeira ação definir e salvar tags em variáveis
 
let tagPontosPlayer = document.getElementById("pontos-jogador")
let tagPontosCPU = document.getElementById("pontos-maquina")
 
let pontosPlayer = 0
let pontosMaquina = 0
// ? função que será linkada as cartas da jogada
 
// ? Ele recebe 'jogada' como parâmetro, pois o jogador tem 3 cartas para escolher. é cada uma jogada diferente.
 
function jogar(jogada){
    // ? Jogada do CPU
    // ? floor = arredonda pra baixo
    // ? random sorteia um número entre 0 e 1
    // * ao multiplicar por 3 ele pode gerar um número de 0 a 3 aleatóriamente
    let jogadaNumero = Math.floor(Math.random() * 3)
 
 
    let jogadaMaquina =""
    switch (jogadaNumero){
        case 0:
            jogadaMaquina = "Pedra"
            break
        case 1:
            jogadaMaquina = "Papel"
            break
        case 2:
            jogadaMaquina = "Tesoura"
            break
    }
 
    let vencedor = quemVenceu(jogada,jogadaMaquina)
 
    alert("Player jogou: " + jogada + "\nMaquina jogou: " + jogadaMaquina)
    if (vencedor == "EMPATE"){
        alert("Deu empate!")
    }
   else if (vencedor == "PLAYER"){
        alert(vencedor +" venceu!!")
        // ? variavel++ é o mesmo que:
        // ? variavel = variável + 1 Ou variável += 1
        pontosPlayer++
   }
   else {
        alert(vencedor +" venceu!!")
        pontosMaquina++
   }
 
   atualizaPlacar()
}
 
   
 
// ? Função separada que analisa se o player venceu ou não
// ? Ele recebe dois valores : Jogada do jogador e da maquina
// ? parÂmetros servem para a função receba informação externa. pois não é a função que define a jogada
function quemVenceu(jogadaP,jogadaM){
 
    if (jogadaP == jogadaM){
        return "EMPATE"
    }
    else if (jogadaP == "Pedra" && jogadaM == "Tesoura"){
        return "PLAYER"
    }
    else if (jogadaP == "Papel" && jogadaM == "Pedra"){
        return "PLAYER"
    }
    else if (jogadaP == "Tesoura" && jogadaM == "Papel"){
        return "PLAYER"
    }
    else{
        return "MÁQUINA"
    }
}
 
function atualizaPlacar(){
    // * innerHTML edita oque está escrito no <h1>
    // ? quando essa função é chamada ela vai na tag e coloca o novo valor
    tagPontosPlayer.innerHTML = "Player Pontos: " + pontosPlayer
    tagPontosCPU.innerHTML = "Máquina Pontos: " + pontosMaquina
}
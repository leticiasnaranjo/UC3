

let tagContador = document.getElementById("contador")
let tagTitulo = document.getElementById("titulo")

let contador = 0 

//^ Função que chamará o LOOP
function iniciarContadorWhile(){
//^ Loop While - > Continua repetindo enquanto a condicional for verdadeira
//* Enquanto o contador for menor que 10 mil repita...
while(contador < 1000){
    //^ Aumentar contador 
    contador++
    //^tagContador.innerHTML = contador
    console.log(contador)
    }
}
function iniciarContadorFor(){
    //^ O loop FOR do JavaScript é BEEEM diferente do Python
    //^ No corpo dele possui:
    //* 1 - A criação da variavel contadora  dele (aqui se chama 'I')
    //* 2- O limite do contador (Aqui é o I < 100)
    //* 3 - De quanto em quanto ele vai subindo (Aqui é o i++)
    for(let i = 0; i < 100; i++)
        console.log("Valor de i:" + i)
}
function contadorVetor(){
    //^Vetor  são variaveis como listas (COM MUITOS VALORES DENTRO)
    let consoles = ["Atari 2000", "Nintendo", "Master System", "Intelevision", "Mega Drive", "Super Nintendo", "Wonderswan"]

    //^ Mostrando valores de Vetor. É por meio de indice
    //^ Os indices (posições) contam a partir do 0 
    console.log ("É o 3º Console da lista: " + consoles[2])

    console.log("Lista abaixo: ")
        //^ Mostrando a lista toda com o loop for
    for(let i=0; i <= 6; i++){
        console.log(consoles[i])
    }
}

function trocarClasse(){
    //^ Estamos manipulando a tag acessando suas classes com 'CLASSLIST'
    //^ O toggle funciona como um 'INTERRUPTOR'  de liga e desliga
    // * Se a tag NÃO tiver 'TROCADO' ele adicionar nela
    // Se a TAG já tiver a classe ele RETIRA dela
    tagTitulo.classList.toggle("trocado")
}
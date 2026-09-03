// ^ Para TAGS é mis comum usarmos 'const' para criar variavel
/*
* 'const' é uma VARIAVEL que não pode ser editada !
^ Digamos : const idade = 30
* Após criar uma variavel dessas, nunca mais (nesse codigo) pode mudar o valor dela.
SERÁ PARA SEMPRE 30.
^ Usamos aqui no JS geralmente TAGS  para que ele fique 'para sempre' naquela TAG. -> Para evitar um possivel esquecimento do PROGRAMADOR.
*/


const tagBtn1 = document.getElementById("btn1")
const tagBtn2 = document.getElementById("btn2")
const tagBtn3 = document.getElementById("btn3")

//^ Aqui neste codigo conheceremos as 3 principais formas de CONECTAR botoes nas funções.

function boasVindas(){
    alert("Seja bem vindo ao sistema!")
    //^ \n = Pular uma linha no mesmo texto
    alert("Aqui você conhecerá sobre a função \n'AddEventListener'")
}

// ^ Conectando os botões direto aqui no JS

tagBtn1.addEventListener('click', boasVindas)

/* 
* () => {} = É o que chamamos de 'ARROW FUNCTION' 
* É uma função Anonima (sem nome) que possui uma flecha =>
* É como uma função completa de uma vez só.
^ É uma das formas mais utilizadas no JAVASCRIPT

*/

tagBtn2.addEventListener('click', () => {
    alert("Essa é a terceira forma")
    // ? Selecionando TAG por meio de uma seleção igual o CSS
    document.querySelector("container>h1").innerHTML = "Foi mudado"

})

// ^ Mais usado do que o ONCLICK , mas menos usado do que o ARROW FUNCTION
// ^ Aqui colocamos a função dentr odo parenteses , porem omitimos o nome de função

tagBtn3.addEventListener('click', function(){
    alert("Quarta forma")
    document.querySelector(".container>h1").style.color = "red";
})
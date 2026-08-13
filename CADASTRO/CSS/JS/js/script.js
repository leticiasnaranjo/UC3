//? para pegarmos os valors do <input> temos que descobrir aqui no js 

let tagNome = document.getElementById("nome")
let tagEmail = document.getElementById("email")
let tagTelefone = document.getElementById("telefone")
let tagIdade = document.getElementById("idade")

function cadastro(){
    // Pegando os valores escritos no <input>
    // Value pega o valor digitado na caixa 
    // Iniciando as variaveis como vazias
    let Nome = ""
    let Email = ""
    let Telefone = ""
    let Idade = 0

    // Checar se os campos estão preenchidos
    if (tagNome.value == ""){
    alert("Preencher o nome !")
    // o return é como um 'break' so que para funções
    // Ele PARA/INTERROMPE a função aqui
    return
    }
    else if (tagEmail.value == ""){
        alert ("Preencher o email !")
        return
    }
    else if (tagTelefone.value == ""){
        alert ("Preencher o telefone !")
        return
    }
    else if (tagIdade.value ==""){
        alert ("Preencha com sua idade !")
        return
    }

    // após checar CADA CAMPO continua o cadastro (Os returns impedirão de chegar aqui caso algum campo falhe)
    // querySelector é como se fosse o 'GetElementById' porém mais livre
    // So colocando o nome dentro dos parenteses, ele pega aquela tag
    let tagBody = document.querySelector("body")

    Nome = tagNome.value
    Email = tagEmail.value
    Telefone = tagTelefone.value
    Idade = Number (tagIdade.value)

    if (Idade < 18){
        alert ("Não pode ser cadastrados menores de idade ! ")
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "red"
    }
    else {
        alert("Cadatro realizado com sucesso ! ")
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "green"
    }
}
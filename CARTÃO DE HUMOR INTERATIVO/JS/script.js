function enviarNome() {

    let nome = document.getElementById("nome").value;

    let boasVindas = document.getElementById("boasVindas");

    if (nome == "") {

        boasVindas.innerHTML = "Digite seu nome primeiro!";

    } else {

        boasVindas.innerHTML = "Olá, " + nome + "! 😊";
    }
}


function mostrarHumor(humor) {

    let nome = document.getElementById("nome").value;

    let mensagem = document.getElementById("mensagem");

    if (nome == "") {

        mensagem.innerHTML = "Digite seu nome primeiro!";

    } 
    
    else if (humor == "feliz") {

        mensagem.innerHTML = nome + ", você está feliz! 😊 Que ótimo!";
        mensagem.style.color = "green";

    } 
    
    else if (humor == "cansado") {

        mensagem.innerHTML = nome + ", você está cansado! 😴 Que tal descansar?";
        mensagem.style.color = "orange";

    } 
    
    else if (humor == "triste") {

        mensagem.innerHTML = nome + ", você está triste! 😢 Espero que seu dia melhore.";
        mensagem.style.color = "blue";

    } 
    
    else if (humor == "animado") {

        mensagem.innerHTML = nome + ", você está animado! 🤩 Aproveite essa energia!";
        mensagem.style.color = "purple";
    }
}
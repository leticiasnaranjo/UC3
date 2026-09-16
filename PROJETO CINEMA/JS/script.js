function calcular() {

    let filme = document.getElementById("filme");
    let nomeFilme = filme.options[filme.selectedIndex].text;

    let qtdIngresso = Number(
        document.getElementById("qtdIngresso").value
    );

    let qtdCombo = Number(
        document.getElementById("qtdCombo").value
    );

    let valorCombo = Number(
        document.getElementById("combo").value
    );

    // Validação
    if (filme.value === "") {
        alert("Selecione um filme!");
        return;
    }

    // Descobre preço do ingresso pelo dia
    let dia = new Date().getDay();

    let precoIngresso;
    let nomeDia;

    switch (dia) {

        case 0:
            nomeDia = "Domingo";
            precoIngresso = 36.00;
            break;

        case 1:
            nomeDia = "Segunda-feira";
            precoIngresso = 32.50;
            break;

        case 2:
            nomeDia = "Terça-feira";
            precoIngresso = 36.00;
            break;

        case 3:
            nomeDia = "Quarta-feira";
            precoIngresso = 32.50;
            break;

        case 4:
            nomeDia = "Quinta-feira";
            precoIngresso = 36.00;
            break;

        case 5:
            nomeDia = "Sexta-feira";
            precoIngresso = 32.50;
            break;

        case 6:
            nomeDia = "Sábado";
            precoIngresso = 36.00;
            break;
    }

    if (isNaN(valorCombo)) {
        valorCombo = 0;
    }

    let totalIngressos = precoIngresso * qtdIngresso;
    let totalCombos = valorCombo * qtdCombo;
    let total = totalIngressos + totalCombos;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML =
    "<h2>Resumo do Pedido</h2>";
    
    resultado.innerHTML +=
    "<p>Dia: " + nomeDia + "</p>";
    
    resultado.innerHTML +=
    "<p>Filme: " + nomeFilme + "</p>";
    
    resultado.innerHTML +=
    "<p>Ingressos: " + qtdIngresso + "</p>";
    
    resultado.innerHTML +=
    "<p>Valor do ingresso: R$ " + precoIngresso + "</p>";
    
    resultado.innerHTML +=
    "<p>Total Ingressos: R$ " + totalIngressos + "</p>";
    
    resultado.innerHTML +=
    "<p>Total Combos: R$ " + totalCombos + "</p>";
    
    resultado.innerHTML +=
    "<h2>Total a pagar: R$ " + total + "</h2>";
}
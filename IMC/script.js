function calcularIMC() {

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {

        document.getElementById("resultado").innerHTML =
            "Digite o peso e a altura corretamente.";

        return;
    }

    let imc = peso / (altura * altura);

    let classificacao;

    if (imc < 18.5) {

        classificacao = "Baixo peso";

    } else if (imc < 25) {

        classificacao = "Normal";

    } else if (imc < 30) {

        classificacao = "Sobrepeso";

    } else {

        classificacao = "Obesidade";
    }

    document.getElementById("resultado").innerHTML =
        "Seu IMC é: " + imc.toFixed(2) +
        "<br>" +
        "Classificação: " + classificacao;
}
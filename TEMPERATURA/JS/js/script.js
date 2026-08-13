function resultadoTemp(){

    let tagTemp = document.getElementById("temp")
    let tagBody = document.querySelector("body")
    // ^ Pegando o valor  do input
    let temp = Number(tagTemp.value)

    let classificacao;

    if ( temp < 10) {

        classificacao = "Muito frio";
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "gray"

    } 
    else if (temp < 19) {

        classificacao = "Frio";
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "blue"
        alert(" A temperatura indica muito frio")

    } 
    else if (temp < 29) {

        classificacao = "Agradavel";
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "green"
        alert(" A temperatura indica que o clima esta agradavel")

    } 
    else {

        classificacao = "Muito quente";
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "red"
        alert(" A temperatura indica muito quente e risco de desidratação")
    }
    
        
}
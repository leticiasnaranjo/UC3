// ^ Pegando tags iniciais

const inputTask = document.getElementById("task")
const taskList = document.getElementById("task-list")
const btnAdd = document.getElementById("btnAdd")

function addTask(){
    // * Checando se o nome da tarefa foi digitada
    if (inputTask.value == ""){
        alert("Você precisa escrever algo!")
    } 
    else{
        // ^ CRIANDO UM <li> AQUI NO JAVASCRIPT
        // * createElement = Criar TAG
        let li = document.createElement("li")
        li.innerHTML = inputTask.value
        
        // ^ Limpando campo de texto
        inputTask.value = ""
        //^ Criando Tag do 'x' de deletar tarefa
        // ^ Spam = texto generico
        let span = document.createElement("span")
        span.innerHTML = "x"

        //^ Posicionando o span para dentro da <li> 
        li.appendChild(span)

        // ^ Falta Posicionar onde esse <li> novo ficará:
        // * appendChild = Coloca a tag dentro do <ul>
        taskList.appendChild(li)
        saveData()

    }
}

btnAdd.addEventListener('click', addTask)

// ^ Esse 'e' como parâmetro servirá para descobrirmos o que foi clicado

taskList.addEventListener('click', function (e){
    // Checando se o que foi clicado foi o <li>
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }


    else if (e.target.tagName == "SPAN"){
    //^ Se o <span> que é o 'x' foi clicado
    // ^ Então seu 'parent' / 'pai' que é o <li> é deletado
        e.target.parentElement.remove();

    // chama a função de salvar informações 
        saveData()
    }
}, false)

//^ Permanencia de dados
//^ Salvaremos as tarefas no cache do navegador 
//^ Assim a pessoa poderá sair do site e voltar com as mesmas tarefas

//* Salvar informações (tarefas) quando for adicionado ou removido
function saveData(){
    //LocaLStorage = armazenamento Local (Deste PC/Navegador)
    //seItem = Cria uma variavel no hd
    // task_data = É o nome da variavel salva no armazenamento
    // taksList.innerHTML = é o valor salvo nessa variavel  'task_data'
    //* taskList.innerHTML representa todos os <li> dentro <inner> do <ul> (taskList)
    localStorage.setItem('task_data', taskList.innerHTML)
}

//* Ler dados ao carregar o site
function loadTask(){
    //^ ao 'carregar' os dados . Ele reescreve o taskList (o <ul>)
    //^ inner.HTML = Reescreve dentro da <ul>
    //^ getItem("task_data") = Pega o que esta salvo no armazenamento
    taskList.innerHTML = localStorage.getItem ("task_data")
}

loadTask()

document.addEventListener('DOMContentLoaded', function (){
    //Lista de declarações a serem manipuladas
    const formulario = document.querySelector('#forms');
    const inputNome = document.querySelector ('#idNome');
    const BotaoAdd = document.querySelector ('#btnAdicionar');

    //Função para adicionar um nome na lista


    let listaNomes = [];
    
    
    function addNomesLista(nome){
        if (nome !==undefined && nome !==""){
            listaNomes.push(nome);
            renderizaLista();
            inputNome.value="";
            console.log("Nome inserido com sucesso");
        }
        else
        {
            console.log ("Insira um nome");
        }

    }
    //Criando uma função para imprimir os dados inseridos de forma eficiente

    function renderizaLista(){
        listaNomes.innerHTML = "";
        for(let i=0; i < listaNomes.length; i++){
            const listaElement = document.createElement("li");
            listaElement.textContent = listaNomes[i];
            lista.appendChild(listaElement);
        }
    }
    //chamando as funções
    BotaoAdd.addEventListener('click', function (e) {
        e.preventDefault();
        addNomesLista(inputNome.value);
    })
});

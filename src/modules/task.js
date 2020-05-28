import {divTarefas,pegaProjetoAtual, projetos} from "../index";

const criaTarefa = (nome, dia, prioridade, index) => {

    return {nome, dia, prioridade, index}
}

const criaElementoTarefa = (novaTarefa) => {

    let divTarefa = document.createElement("div");
    let checkBoxTarefa = document.createElement("input");
    let tituloTarefa = document.createElement("h3");
    let prioridadeTarefa = document.createElement("h3");
    let dataTarefa = document.createElement("h3");
    let botaoRemoverTarefa = document.createElement("button");
    
    checkBoxTarefa.type = "checkbox";
    divTarefa.classList.add("tarefa");
    divTarefa.setAttribute("data-index", `${novaTarefa.index}`);

    tituloTarefa.textContent = novaTarefa.nome;
    prioridadeTarefa.textContent = novaTarefa.prioridade;
    dataTarefa.textContent = novaTarefa.dia;
    botaoRemoverTarefa.textContent = "-";

    divTarefa.appendChild(checkBoxTarefa);
    divTarefa.appendChild(tituloTarefa);
    divTarefa.appendChild(prioridadeTarefa);
    divTarefa.appendChild(dataTarefa);
    divTarefa.appendChild(botaoRemoverTarefa);

    removeTarefa(botaoRemoverTarefa);

    return divTarefa;

}

const colocaTarefaArray = (array, tarefa) => {
    array.push(tarefa);
}

const colocaTarefaDOM = (container, tarefa) => {
    container.appendChild(tarefa);
}

const atualizaTarefas = () => {
    let tarefas = projetos[pegaProjetoAtual()];
    console.log("rodou");
    
    while (divTarefas.lastElementChild.className != "cabeçalho") {
        divTarefas.removeChild(divTarefas.lastChild);
    }

    tarefas.forEach(tarefa => {
        let divTarefa = criaElementoTarefa(tarefa, projetos[pegaProjetoAtual()].length);
        colocaTarefaDOM(divTarefas, divTarefa);
    })
}

function removeTarefa (botaoRemover) {

    let tarefa = botaoRemover.parentNode;

    botaoRemover.addEventListener("click", function () {
        divTarefas.removeChild(tarefa);
        projetos[pegaProjetoAtual()].splice(tarefa.dataset.index, 1);
        atualizaDataIndex(tarefa.dataset.index);
    })
}

function atualizaDataIndex (index) {
    let tarefasDiv = document.querySelectorAll("#tarefas div");

    tarefasDiv.forEach(tarefa => {
        if (tarefa.dataset.index > index) {
            tarefa.dataset.index -= 1;
        }
    })
}

export {criaTarefa, criaElementoTarefa, colocaTarefaArray, colocaTarefaDOM, atualizaTarefas};

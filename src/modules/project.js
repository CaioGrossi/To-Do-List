import {projetos, pegaProjetoAtual, atualizaProjetoAtual, divProjetos} from "../index";
import {atualizaTarefas} from "./task";

const criaProjeto = () => {
    let novoProjeto = [];
    return novoProjeto;
}

const criaElementoProjeto = (nome, index) => {
    
    //CRIA ELEMENTOS
    let divProjeto = document.createElement("div");
    let tituloProjeto = document.createElement("h3");
    let botaoRemoverProjeto = document.createElement("button");

    //ATRIBUI INFORMAÇÕES
    divProjeto.setAttribute("data-index", `${index}`)
    divProjeto.classList.add("projeto");

    //ATRIBUI TEXTO
    tituloProjeto.textContent = nome;
    botaoRemoverProjeto.textContent = "-";

    //JUNTA ELEMENTOS
    divProjeto.appendChild(tituloProjeto);
    divProjeto.appendChild(botaoRemoverProjeto);

    //ADICIONA LISTERNERS
    mudarProjetoAtual(divProjeto);
    removeProjeto(botaoRemoverProjeto);
    reColocaTarefasDoProjeto(divProjeto);

    return divProjeto;

}

const colocaProjetoArray = (array, projeto) => {
    array.push(projeto);    
}

const colocaProjetoDOM = (container, projeto) => {
    container.appendChild(projeto)
}

function mudarProjetoAtual (divProjeto) {

    divProjeto.addEventListener("click", function () {
        atualizaProjetoAtual(divProjeto.dataset.index);
        alert(pegaProjetoAtual());
    })

}

function reColocaTarefasDoProjeto (divProjeto) {

    divProjeto.addEventListener("click", function () {
        atualizaTarefas();
    })
}

function removeProjeto (botaoRemover) {

    let projeto = botaoRemover.parentNode;

    botaoRemover.addEventListener("click", function () {
        divProjetos.removeChild(projeto);
        projetos.splice(projeto.dataset.index, 1);
        atualizaDataIndex(projeto.dataset.index);
    })

}

function atualizaDataIndex (index) {

    let projetosDiv = document.querySelectorAll("#projetos div");

    projetosDiv.forEach(projeto => {
        if (projeto.dataset.index > index) {
            projeto.dataset.index -= 1;
        }
    })
}

export {criaProjeto, criaElementoProjeto, colocaProjetoArray, colocaProjetoDOM};
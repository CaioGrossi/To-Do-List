
import {formularioProjeto, formularioTarefa} from "./modules/form";
import {criaTarefa, criaElementoTarefa, colocaTarefaArray, colocaTarefaDOM} from "./modules/task";
import {criaProjeto, criaElementoProjeto, colocaProjetoArray, colocaProjetoDOM} from "./modules/project";

let projetos = [];
let projetoAtual = 0;

const divProjetos = document.querySelector("#projetos");
const divTarefas = document.querySelector("#tarefas");
const botaoAddProjetos = document.querySelector("#addProjeto");
const botaoAddTarefas = document.querySelector("#addTarefa");

botaoAddProjetos.addEventListener("click", function () {
    formularioProjeto.mostrar();
})

botaoAddTarefas.addEventListener("click", function () {
    formularioTarefa.mostrar();
})

function submeterProjeto (nome) {

    let novoProjeto = criaProjeto();
    let elementoProjeto = criaElementoProjeto(nome, projetos.length);

    colocaProjetoArray(projetos, novoProjeto);
    colocaProjetoDOM(divProjetos, elementoProjeto);
}

function submeterTarefa (nome, dia, prioridade) {

    let novaTarefa = criaTarefa(nome, dia, prioridade, projetos[projetoAtual].length)
    let elementoTarefa = criaElementoTarefa(novaTarefa)

    colocaTarefaArray(projetos[projetoAtual], novaTarefa);
    colocaTarefaDOM(divTarefas, elementoTarefa);
}

function pegaProjetoAtual () {
    return projetoAtual;
}

function atualizaProjetoAtual (projetoAtualizado) {
    projetoAtual = projetoAtualizado;
}

export {submeterProjeto, submeterTarefa, atualizaProjetoAtual, pegaProjetoAtual, projetos, divProjetos, divTarefas}



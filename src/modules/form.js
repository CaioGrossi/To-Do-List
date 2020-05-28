import {submeterProjeto, submeterTarefa} from "../index";

const formularioProjeto = (() => {

    const formulario = document.querySelector("#projetosForm form");
    const nome = document.querySelector("#nomeProjeto");
    const submeter = document.querySelector("#submeterProjeto");
    const cancelar= document.querySelector("#cancelarProjeto");

    const mostrar = () => {
        formulario.style.display = "flex";
    }

    const esconder = () => {
        formulario.style.display = "none";
    }

    const limpar = () => {
        nome.value = "";
    }

    submeter.addEventListener("click", function (event) {
        event.preventDefault();
        esconder();
        submeterProjeto(nome.value);
        limpar()
    })

    cancelar.addEventListener("click", function (event){
        event.preventDefault();
        esconder();
        limpar();
    })


    return {mostrar}
})();

const formularioTarefa = (() => {

    const formulario = document.querySelector("#tarefasForm form");
    const nome = document.querySelector("#nomeTarefa");
    const dia = document.querySelector("#diaTarefa");
    const prioridade = document.querySelector("#prioridadeTarefa");
    const submeter = document.querySelector("#submeterTarefa");
    const cancelar = document.querySelector("#cancelarTarefa");

    const mostrar = () => {
        formulario.style.display = "flex";
    }
    
    const esconder = () => {
        formulario.style.display = "none";
    }

    const limpar = () => {
        nome.value = "";
        dia.value = "";
    }

    submeter.addEventListener("click", function (event) {
        event.preventDefault();
        esconder();
        submeterTarefa(nome.value, dia.value, prioridade.value);
        limpar();
    })

    cancelar.addEventListener("click", function (event) {
        event.preventDefault();
        esconder();
        limpar()
    })

    return {mostrar};

})()

export {formularioProjeto, formularioTarefa}






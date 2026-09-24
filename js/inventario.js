const cursos = document.querySelectorAll(".slot");

const nome = document.querySelector("#nome");
const instituicao = document.querySelector("#instituicao");
const categoria = document.querySelector("#categoria");
const statusCurso = document.querySelector("#status-curso");
const descricao = document.querySelector("#descricao");
const icone = document.querySelector("#icone");
const status = document.querySelector("#status");


cursos.forEach(function(curso) {

    curso.addEventListener("click", function() {

        cursos.forEach(function(item) {
            item.classList.remove("selecionado");
        });

        curso.classList.add("selecionado");


        nome.textContent = curso.dataset.nome;

        instituicao.textContent = curso.dataset.instituicao;

        categoria.textContent = curso.dataset.categoria;

        statusCurso.textContent = curso.dataset.status;

        descricao.textContent = curso.dataset.descricao;

        icone.textContent = curso.querySelector("strong").textContent;


        if (curso.dataset.status === "Concluído") {

            status.textContent = "ITEM DESBLOQUEADO";

        } else {

            status.textContent = "EM PROGRESSO";

        }

    });

});
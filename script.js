// Header



// Index

document.querySelectorAll(".sanfona .item").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".sanfona .item").forEach(outro => {
            if (outro !== item) {
                outro.classList.remove("ativo");
            }
        });

        item.classList.toggle("ativo");
    });
});

const palavras = ["Locação", "Negócio", "Sistema"];
let indice = 0;

const elemento = document.querySelector(".palavraDinamica");

setInterval(() => {
    indice = (indice + 1) % palavras.length;
    elemento.textContent = palavras[indice];
}, 3000);



// Solucao

window.addEventListener("load", () => {
    const contProjetos = document.querySelector(".contadorProjetos");
    const contAnos = document.querySelector(".contadorAnos");
    const contPlataforma = document.querySelector(".contadorPlataforma");

    const duracao = 4500;

    function animar(contador, valorFinal) {
        let inicio = 0;
        const incremento = valorFinal / (duracao / 16);

        function atualizar() {
            inicio += incremento;

            if (inicio < valorFinal) {
                contador.textContent = Math.floor(inicio);
                requestAnimationFrame(atualizar);
            } else {
                contador.textContent = valorFinal;
            }
        }

        atualizar();
    }

    animar(contProjetos, 100);
    animar(contAnos, 5);
    animar(contPlataforma, 25);
});



// Contato

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
});
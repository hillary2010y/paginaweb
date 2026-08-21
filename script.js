const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        const texto = botao.querySelector("span");
        let contador = Number(texto.textContent);

        if (curtiu === false) {
            contador++;
            curtiu = true;
        } else {
            contador--;
            curtiu = false;
        }

        texto.textContent = contador;
    });
});
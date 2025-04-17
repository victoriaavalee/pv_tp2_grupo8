const inputTexto = document.getElementById("textoInput");
const textoMostrado = document.getElementById("textoMostrado");

inputTexto.addEventListener("input", () => {
    textoMostrado.textContent = inputTexto.value;

 
    if (inputTexto.value.length > 20) {
        textoMostrado.classList.add("excedido");
    } else {
        textoMostrado.classList.remove("excedido");
    }
});

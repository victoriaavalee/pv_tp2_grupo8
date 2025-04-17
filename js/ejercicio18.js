const cambiarTexto = () => {
    const parrafo = document.getElementById("parrafo");
    parrafo.textContent = "¡Puff, cambiamos el texto! :D";
}

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    cambiarTexto();
});
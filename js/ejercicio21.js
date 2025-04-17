export function copia(){
    const input = document.getElementById("entrada");
    const mostrar = document.getElementById("salida"); 


/*textContent cambia el texto que ves dentro de un elemento HTML*/
input.addEventListener("input", function() {
  mostrar.textContent = input.value;
});
}
/*
Construir una página web utilizando Html, Css y JavaScript que incluya un botón. Al hacer clic en ese botón, el
color de fondo de toda la página debe cambiar.
Usar un elemento <button> para permitir la interacción del usuario.
Cambiar el color de fondo del body al hacer clic.
Utilizar JavaScript para capturar el evento click.
Aplicar estilos básicos con CSS para mejorar la presentación.
Mostrar un mensaje en la consola cada vez que el color cambia.
Opcional: Cambiar el color de fondo aleatoriamente entre varios colores cada vez que se haga clic.
*/
let colores = ["pink", "red", "blue", "orange", "yellow", "blueviolet", "cyan", ];

function colorAleatorio () {
    let indice = Math.floor(Math.random() * colores.length);
    return indice;
}

function cambiarColor() {
    let color = colores[colorAleatorio()];
    document.body.style.backgroundColor =  color;
    console.log("Color de fondo cambiado a:", color);
}
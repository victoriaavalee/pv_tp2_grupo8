/*
7. Declarar un array denominado nombres con al menos 6 nombres. Obtener el nombre más 
largo del array nombres. Las cadenas de textos (String) son listas de caracteres y las
listas tienen un largo (length) que indica su tamaño.
*/

let nombres=["Marina", "Maria", "Monica", "Marcela", "Mercedes", "Maia", "Micaela"];

const nombreLargo = (nombres) => {
    let masLargo=nombres[0];
    for (let i=1; i<nombres.length; i++){
        if(masLargo.length < nombres[i].length){
            masLargo=nombres[i];
        }
    }
    console.log("El nombre más largo del array es:", masLargo);
}

nombreLargo(nombres);
const paises=['AR', 'BR', 'MX', 'CO', 'CL', 'PE']
const capitales=['Buenos Aires','Brasilia','Ciudad de Mexico','Bogota','Santiago','Lima']

export function SelecionCapital(){
    let paisEleccion=document.getElementById("paises");
    let capitalEleccion=document.getElementById("capitales");

    const pais=paisEleccion.value;    /* pais seleccionado por el usuario */
    const index=paises.indexOf(pais);
    /* indexOf devuelve el numero de posicion dentro de un arreglo.Si no lo encuentra un devuelve un -1 */

    if (index !== -1){
        capitalEleccion.value =capitales[index];
    }
    console.log("Pais: " +paisEleccion.value +" - " +"Capital: "  +capitales[index]);
}

/* Hacer que la función esté disponible para el HTML*/
window.SelecionCapital = SelecionCapital;
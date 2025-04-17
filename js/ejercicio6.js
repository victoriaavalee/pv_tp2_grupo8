/* 6. Crear un array denominado edades con al menos 8 edades distintas. 
Recorrer el array y obtener el promedio de las edades de array */

const edades = [15, 57, 3, 30, 22 , 81, 9, 45];
let acumulador=0;


edades.forEach((elementos)=>{
    acumulador=acumulador+elementos;
});

console.log("Promedio de las edades del array: ", Math.trunc(acumulador/edades.length));
;


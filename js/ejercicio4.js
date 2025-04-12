/*4. Declarar una variable y almacenar en ella un valor numérico que representa el lado de 
un cuadrado. Calcular el área y el perímetro del cuadrado y mostrar los resultados por 
consola.*/

const lado = 4; 

const calcularAreaCuadrado = (lado) => 2 * lado;
const calcularPerimetroCuadrado = (lado) => lado + lado + lado + lado;

console.log("El área del cuadrado con lado 4 es: " + calcularAreaCuadrado(lado));
console.log("El perímetro del cuadrado con lado 4 es: " + calcularPerimetroCuadrado(lado));
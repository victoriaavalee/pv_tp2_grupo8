/*5. Declarar dos variables denominadas horas, minutos, asignar valores a cada una 
y realizar la conversion para expresar esas horas y minutos en segundos. Mostrar por 
consola las horas y minutos, luego el resultado de la conversion en segundos */

const horas=8; 
const minutos =15;

const multiplicado60 = (minutos) => 60 * minutos;

console.log("Horas ",horas, "\nMinutos:", minutos);
console.log(minutos + " minutos expresado en segundos es " + multiplicado60(minutos));
console.log(horas + " horas expresado en segundos es " + multiplicado60(multiplicado60(horas)));

//3.Calcular y mostrar por consola el área de un círculo cuyo radio = 7,5

const calcularAreaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
console.log("El área de un círculo cuyo radio es 7.5 resulta: " + calcularAreaCirculo(7.5).toFixed(2));